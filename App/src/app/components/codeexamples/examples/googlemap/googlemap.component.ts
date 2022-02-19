import { Component, OnInit } from '@angular/core';
import { marker, mapmarker } from '../../../../models/googlemap_models';
import { truncateWithEllipsis } from '@amcharts/amcharts4/.internal/core/utils/Utils';
import { GooglemarkerapiService } from '../../../../services/googlemarkerapi.service';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, animate, style} from '@angular/animations';

declare var markerCheck: boolean;
declare var markers: marker[];
declare var google: any;
declare let ga: Function;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
  animations:[
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('750ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('750ms ease-in', style({transform: 'translateX(500%)'}))
      ]),
    ])
  ]
})
export class GooglemapComponent implements OnInit {

  public mapMarkers: google.maps.Marker[];
  public userMarkers: google.maps.Marker[];
  public drawnPolys: google.maps.Polyline[];
  public drawnCircles: google.maps.Circle[];
  public apiMarkers: mapmarker[];
  public info_details: string;
  public marker: google.maps.Marker;
  public geo_coder: google.maps.Geocoder;
  public kmlURL: string;
  public googleMap: any;
  public is_marker: boolean;
  public is_user_marker: boolean;
  public is_traffic: boolean;
  public is_noaa: boolean;
  public is_airQ: boolean;
  public is_fire: boolean;
  public is_drawing: boolean;
  public trafficLayer: google.maps.TrafficLayer;
  public noaaKMLLayer: google.maps.KmlLayer;
  public airKMLLayer: google.maps.KmlLayer;
  public fireKMLLayer: google.maps.KmlLayer;
  public mapDrawing: google.maps.drawing.DrawingManager;
  public directionService: google.maps.DirectionsService;
  public directionsRenderer: google.maps.DirectionsRenderer;
  public addressTo: string;
  public addressFrom: string;
  public is_directions: boolean;
  public radioData: string;
  public searchValue: string;
  public R: number;
  public LatLng: google.maps.LatLng;
  public showGoogle: boolean;
  public googleMapOverlay: boolean;
  public toolActive: boolean;

  constructor(public markerService: GooglemarkerapiService, public router: Router) {
      ga('set', 'page', 'Google_Maps');
      ga('send', 'pageview');
  }

  ngOnInit() {
    this.is_marker = false;
    this.is_user_marker = false;
    this.is_traffic = false;
    this.is_noaa = false;
    this.is_airQ = false;
    this.is_drawing = false;
    this.is_fire = false;
    this.mapMarkers = [];
    this.userMarkers = [];
    this.drawnPolys = [];
    this.drawnCircles = [];
    this.searchValue = '';
    this.info_details = '';
    this.R = 6378137;
    this.hideAll();
  }
  //overlay functions
  hideAll(){
    this.toolActive = false;
    this.showGoogle = false;
  }
  toolAction(selected: string): void {
    this.hideAll();
    this.googleMapOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "google":
        this.showGoogle = true;
        setTimeout(() => {
          this.googleMapOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.googleMapOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }
  //when map loads
  onMapReady(map) {
    this.googleMap = map;
    this.geo_coder = new google.maps.Geocoder();
    this.directionService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer;
    this.radioData = "1";
    this.setStyle(this.radioData);
  }
  ////////////////////////////////////////////////////
  ///                Get Directions                ///
  ////////////////////////////////////////////////////
  enableDirections(): void {
    if(this.is_directions){
      this.is_directions = false;
      this.directionsRenderer.setMap(null);
      this.info_details = '';
    }
    else
    {
      this.is_directions = true;
    }
  }
  getDirections(): void {
    const thisComponent = this;
    thisComponent.directionService.route({
      origin: this.addressFrom,
      destination: this.addressTo,
      travelMode: google.maps.TravelMode['DRIVING']
    }, function(response, status){
      if(status.toString() === 'OK')
      {
        thisComponent.directionsRenderer.setDirections(response);
        thisComponent.directionsRenderer.setMap(thisComponent.googleMap);
        thisComponent.info_details = '<h4>Direction Info:</h4>';
        thisComponent.info_details += '<br/><span class="emphasisclass>Duration: </span>"' + response.routes[0].legs[0].duration.text;
        thisComponent.info_details += '<br/><span class="emphasisclass>Distance: </span>"' + response.routes[0].legs[0].distance.text;
        thisComponent.info_details += '<br/><span class="emphasisclass>Steps: </span><br/>"';
        response.routes[0].legs[0].steps.forEach(item => {
          thisComponent.info_details += 'Go: ' + item.distance.text + ' For: ' + item.duration.text + ' - ' + item.instructions + '<br/>'
        });
      }
      else
      {
        window.alert("Not enough info for Google to find route, please try adding state, city or zip")
      }
    });
  }
  ////////////////////////////////////////////////////
  ///                Marker Creation               ///
  ////////////////////////////////////////////////////
  setMarkers() {
    if(this.is_marker == false)
    {
      this.markerService.getMapMarkers().subscribe(response =>{
        this.apiMarkers = response;
        this.apiMarkers.forEach(item => {
          const marker = new google.maps.Marker({
            ceo: item.ceo
          });
          marker.setPosition(new google.maps.LatLng(item.lat, item.lng));
          marker.setTitle(item.title);
          marker.setIcon("../../assets/media/" + item.icon);
          marker.setMap(this.googleMap);
          this.mapMarkers.push(marker);
        });
        this.is_marker = true
      });
    }
    else
    {
      this.mapMarkers.forEach(marker =>{
        marker.setMap(null);
      });
      this.mapMarkers = [];
      this.is_marker = false;
    }
  }
  ////////////////////////////////////////////////////
  ///                 Find User Loc                ///
  ////////////////////////////////////////////////////
  //function to find users location
  findMe()
  {
    console.log(this.is_user_marker);
    if(!this.is_user_marker)
    {
      this.is_user_marker = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.showPosition(position);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    else
    {
      this.userMarkers.forEach(marker =>{
        marker.setMap(null);
      });
      this.userMarkers = [];
      this.is_user_marker = false;
    }
  }
  showPosition(position) {
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.googleMap.panTo(location);
    if (!this.marker) {
      const marker = new google.maps.Marker();
      marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      marker.setTitle('You');
      marker.setMap(this.googleMap);
      marker.setIcon("../../assets/media/User.png");
      this.userMarkers.push(marker);
    }
    else {
      this.marker.setPosition(location);
    }
  }
  ////////////////////////////////////////////////////
  ///                 Drawing Tools                ///
  ////////////////////////////////////////////////////
  //function for the drawing objects controller, driven off flag is_drawing
  enableDrawing(): void{
    const thisComponent = this;
    if(this.is_drawing == false)
    {
      this.mapDrawing = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['marker', 'circle', 'polyline']
        },
        markerOptions: { icon: '../../assets/media/marker.png'},
      });
      //javascript for polyline complete Event
      google.maps.event.addListener(this.mapDrawing, 'polylinecomplete', function (polyline) {
        //add poly to array for removal later
        thisComponent.drawnPolys.push(polyline);
        //figure out miles between points on the line
        if(polyline.getPath().getArray().length == 2){
          thisComponent.findMiles(polyline.getPath().getArray());
        }
        //or count markers in side polyline
        else {
          thisComponent.countPolyMarkers(polyline);
        }
      });
      //javascript for circle complete
      google.maps.event.addListener(this.mapDrawing, 'circlecomplete', function (circle) {
        thisComponent.drawnCircles.push(circle);
        let ne = circle.getBounds().getNorthEast();
        let sw = circle.getBounds().getSouthWest();
        let theta = 0;
        let drawnCords = [];
        let radi = Math.abs(ne.lng() - sw.lng()) / 2;
        for (theta = 0; theta < 360; theta += 1){
          let cos = Math.cos(theta) * radi + circle.getCenter().lat();
          let sin = Math.sin(theta) * radi + circle.getCenter().lng();
          drawnCords.push(new google.maps.LatLng(cos, sin));
        };
        let drawnPoly = new google.maps.Polygon({
          paths: drawnCords
        });
        thisComponent.countPolyMarkers(drawnPoly);
      });

      this.mapDrawing.setMap(this.googleMap);
      this.is_drawing = true;
    }
    else
    {
      this.drawnPolys.forEach(item => {
        item.setMap(null);
      });
      this.drawnCircles.forEach(item => {
        item.setMap(null);
      });
      this.drawnPolys = [];
      this.drawnCircles = [];
      this.mapDrawing.setMap(null);
      this.is_drawing = false;
      this.info_details = '';
    }
  }
  //find miles from polyline and display it
  findMiles(polylineVal): void{
    let polylineLatValA = polylineVal[0].lat();
    let polylineLngValA = polylineVal[0].lng();
    let polylineLatValB = polylineVal[1].lat();
    let polylineLngValB = polylineVal[1].lng();
    let X = this.findSinandCos(
      this.findRad(polylineLatValB - polylineLatValA),
      this.findRad(polylineLngValB - polylineLngValA),
      polylineLatValA,
      polylineLatValB
    );
    let Y = 2 * Math.atan2(Math.sqrt(X), Math.sqrt(1 - X));
    let Z = this.R * Y;
    this.info_details = '<h4>Distance</h4><span class="emphasisclass">The Last Line Drawn in Miles: </span>' + (Z / 1609.344).toFixed(2);
  }
  //count marker items in a polyline
  countPolyMarkers(drawnPoly): void{
    console.log("I am here");
    let companyCount = 0;
    let companyList = "<table>" +
    "<tr>" + 
      "<th><span class='emphasisclass'>Company Location</th><th><span class='emphasisclass'>CEO</span></th>"+
    "</tr>";
    this.info_details = '';
    //Count Companies
    if(this.mapMarkers != [] && this.mapMarkers != undefined){
      this.mapMarkers.forEach(item =>{
        let Lat = item.getPosition().lat();
        let Lng = item.getPosition().lng();
        this.LatLng = new google.maps.LatLng(Lat, Lng);
        if(google.maps.geometry.poly.containsLocation(this.LatLng, drawnPoly)){
            companyList += "<tr><td>" + item.get('title') + "</td>" + 
                            "<td>" + item.get('ceo') + "</td></tr>";
            companyCount += 1;
        }
      });
      this.info_details += '<h4>Companies: ' + companyCount + '</h4>';
      this.info_details += companyList + "</table>";
    }
  }
  //some math functions
  findRad(x: number): number{
    return x * Math.PI / 100;
  }
  findSinandCos(a: number,b: number,x: number,y: number){
    let SinCos = Math.sin(a/2) * Math.sin(a/2) + Math.cos(this.findRad(x)) * Math.cos(this.findRad(y)) * Math.sin(b / 2) * Math.sin(b / 2);
    return SinCos;
  }
  ////////////////////////////////////////////////////
  ///             KML Layers and Search            ///
  ////////////////////////////////////////////////////
  //function for the NOAA Weather Layer button, driven off flag is_noaa
  setNOAAKML(): void{
    if(this.is_noaa == false)
    {
      this.noaaKMLLayer = new google.maps.KmlLayer({
        url: "http://www.wpc.ncep.noaa.gov/kml/noaa_chart/WPC_Day1_SigWx.kml",
        map: this.googleMap,
      });
      this.is_noaa = true;
    }
    else
    {
      this.noaaKMLLayer.setMap(null);
      this.is_noaa = false;
    }
  }
  //function for the Air Now Layer button, driven off flag is_airQ
  setAirQualityKML(): void{
    if(this.is_airQ == false)
    {
      this.airKMLLayer = new google.maps.KmlLayer({
        url: "http://files.airnowtech.org/airnow/today/airnow_conditions.kml",
        map: this.googleMap,
      });
      this.is_airQ = true;
    }
    else
    {
      this.airKMLLayer.setMap(null);
      this.is_airQ = false;
    }
  }
  //function for the Fire Layer button, driven off flag is_fire
  setFireKML(): void{
    if(this.is_fire == false)
    {
      this.fireKMLLayer = new google.maps.KmlLayer({
        url: "https://fsapps.nwcg.gov/data/kml/conus_latest_lg_incidents.kml",
        map: this.googleMap,
      });
      this.is_fire = true;
    }
    else
    {
      this.fireKMLLayer.setMap(null);
      this.is_fire = false;
    }
  }
  //function for the traffic layer button, driven off flag is_traffic
  setTrafficLayer(): void{
    if (this.is_traffic == false)
    {
      this.trafficLayer = new google.maps.TrafficLayer({map: this.googleMap});
      this.is_traffic = true;
    }
    else
    {
      this.trafficLayer.setMap(null);
      this.is_traffic = false;
    }
  }
  //search function
  findSearch(): void{
    const thisComponent = this;
    thisComponent.marker = new google.maps.Marker;
    thisComponent.geo_coder.geocode({'address' : thisComponent.searchValue }, function(results, status) {
      if(status.toString() == "OK"){
        thisComponent.googleMap.setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
        thisComponent.marker.setIcon('./assets/media/marker.png');
        thisComponent.marker.setPosition(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
        thisComponent.marker.setMap(thisComponent.googleMap);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  ////////////////////////////////////////////////////
  ///                 Set Map Style                ///
  ////////////////////////////////////////////////////
  setStyle(value: string): void{
    switch(value)
    {
      case "1":
        this.googleMap.setOptions({styles:
          [
            {
              elementType: 'geometry',
              stylers: [{color: '#f5f5f5'}]
            },
            {
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{color: '#616161'}]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{color: '#f5f5f5'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{color: '#bdbdbd'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#eeeeee'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#757575'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#e5e5e5'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'labels.text.fill',
              stylers: [{color: '#757575'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#dadada'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#616161'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#e5e5e5'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{color: '#eeeeee'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#c9c9c9'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9e9e9e'}]
            }
          ],
        });
        break;
      case "2":
      this.googleMap.setOptions({styles:
        [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
      });
      break;
      case "3":
        this.googleMap.setOptions({styles: null});
      break;
    }
  }
}
