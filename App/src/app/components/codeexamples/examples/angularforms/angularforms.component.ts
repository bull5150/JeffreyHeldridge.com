import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ChartapiService } from 'src/app/services/chartapi.service';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;

@Component({
  selector: 'angularforms',
  templateUrl: './angularforms.component.html',
  styleUrls: ['./angularforms.component.css'],
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
export class AngularformsComponent implements OnInit {

  public selectInput: string = "";
  public textInput: string;
  public passwordInput: string;
  public radioInput: string = "1";
  public ckboxOneInput: boolean;
  public ckboxTwoInput: boolean = true;
  public ckboxThreeInput: boolean;
  public textAreaInput: string;
  public allAPIData: object;
  public showForms: boolean;
  public angularFormsOverlay: boolean;
  public toolActive: boolean;

  constructor(private chartService: ChartapiService) { 
    ga('set', 'page', 'Angular_Forms');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);
    this.chartService.getRaceChart().subscribe(response =>{
      this.allAPIData = response;
      this.buildRaceChart();
      this.buildRadialChart();
    });
    this.hideAll();
  }
  buildRaceChart(){
      let chart = am4core.create("racechartdiv", am4charts.XYChart);
      chart.padding(40, 40, 40, 40);

      chart.numberFormatter.bigNumberPrefixes = [
        { "number": 1e+3, "suffix": "K" },
        { "number": 1e+6, "suffix": "M" },
        { "number": 1e+9, "suffix": "B" }
      ];

      let label = chart.plotContainer.createChild(am4core.Label);
      label.x = am4core.percent(97);
      label.y = am4core.percent(95);
      label.horizontalCenter = "right";
      label.verticalCenter = "middle";
      label.dx = -15;
      label.fontSize = 50;

      let playButton = chart.plotContainer.createChild(am4core.PlayButton);
      playButton.x = am4core.percent(97);
      playButton.y = am4core.percent(95);
      playButton.dy = -2;
      playButton.verticalCenter = "middle";
      playButton.events.on("toggled", function(event) {
        if (event.target.isActive) {
          play();
        }
        else {
          stop();
        }
      })

      let stepDuration = 4000;

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "network";
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.rangeChangeEasing = am4core.ease.linear;
      valueAxis.rangeChangeDuration = stepDuration;
      valueAxis.extraMax = 0.1;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = "network";
      series.dataFields.valueX = "MAU";
      series.tooltipText = "{valueX.value}"
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusBottomRight = 5;
      series.columns.template.column.cornerRadiusTopRight = 5;
      series.interpolationDuration = stepDuration;
      series.interpolationEasing = am4core.ease.linear;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet())
      labelBullet.label.horizontalCenter = "right";
      labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
      labelBullet.label.textAlign = "end";
      labelBullet.label.dx = -10;

      chart.zoomOutButton.disabled = true;

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target){
        return chart.colors.getIndex(target.dataItem.index);
      });

      let year = 2003;
      label.text = year.toString();

      let interval;

      function play() {
        interval = setInterval(function(){
          nextYear();
        }, stepDuration)
        nextYear();
      }

      function stop() {
        if (interval) {
          clearInterval(interval);
        }
      }

      function nextYear() {
        year++

        if (year > 2020) {
          year = 2003;
        }

        let newData = allData[year];
        let itemsWithNonZero = 0;
        for (var i = 0; i < chart.data.length; i++) {
          chart.data[i].MAU = newData[i].MAU;
          if (chart.data[i].MAU > 0) {
            itemsWithNonZero++;
          }
        }

        if (year == 2003) {
          series.interpolationDuration = stepDuration / 4;
          valueAxis.rangeChangeDuration = stepDuration / 4;
        }
        else {
          series.interpolationDuration = stepDuration;
          valueAxis.rangeChangeDuration = stepDuration;
        }

        chart.invalidateRawData();
        label.text = year.toString();

        categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
      }


      categoryAxis.sortBySeries = series;

    let allData = this.allAPIData;
    chart.data = JSON.parse(JSON.stringify(allData[year]));
    categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });
    series.events.on("inited", function() {
      setTimeout(function() {
        playButton.isActive = true; // this starts interval
      }, 2000)
    })
  }


  buildRadialChart(){
    let chart = am4core.create("radialchartdiv", am4charts.RadarChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.data = [
      {
        category: "One",
        value1: 8,
        value2: 2,
        value3: 4,
        value4: 3
      },
      {
        category: "Two",
        value1: 11,
        value2: 4,
        value3: 2,
        value4: 4
      },
      {
        category: "Three",
        value1: 7,
        value2: 6,
        value3: 6,
        value4: 2
      },
      {
        category: "Four",
        value1: 13,
        value2: 8,
        value3: 3,
        value4: 2
      },
      {
        category: "Five",
        value1: 12,
        value2: 10,
        value3: 5,
        value4: 1
      },
      {
        category: "Six",
        value1: 15,
        value2: 12,
        value3: 4,
        value4: 4
      }
    ];

    //chart.padding(20, 20, 20, 20);
    chart.colors.step = 4;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.tooltipLocation = 0.5;
    categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
    categoryAxis.renderer.axisFills.template.disabled = true;
    categoryAxis.interactionsEnabled = false;
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.labels.template.horizontalCenter = "left";
    valueAxis.min = 0;
    valueAxis.max = 60;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.maxLabelPosition = 0.99;
    valueAxis.renderer.minGridDistance = 10;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.interactionsEnabled = false;

    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.columns.template.tooltipText = "{name}: {valueX.value}";
    series1.name = "Series 1";
    series1.dataFields.categoryY = "category";
    series1.dataFields.valueX = "value1";
    series1.stacked = true;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.columns.template.tooltipText = "{name}: {valueX.value}";
    series2.name = "Series 2";
    series2.dataFields.categoryY = "category";
    series2.dataFields.valueX = "value2";
    series2.stacked = true;

    let series3 = chart.series.push(new am4charts.RadarColumnSeries());
    series3.columns.template.tooltipText = "{name}: {valueX.value}";
    series3.name = "Series 3";
    series3.dataFields.categoryY = "category";
    series3.dataFields.valueX = "value3";
    series3.stacked = true;

    let series4 = chart.series.push(new am4charts.RadarColumnSeries());
    series4.columns.template.tooltipText = "{name}: {valueX.value}";
    series4.name = "Series 4";
    series4.dataFields.categoryY = "category";
    series4.dataFields.valueX = "value4";
    series4.stacked = true;

    chart.seriesContainer.zIndex = -1;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.exportable = false;
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.exportable = false;

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.lineY.disabled = true;
  }
  //overlay functions
  hideAll(){
    this.toolActive = false;
    this.showForms = false;
  }
  toolAction(selected: string): void {
    this.hideAll();
    this.angularFormsOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "angular":
        this.showForms = true;
        setTimeout(() => {
          this.angularFormsOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.angularFormsOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }
}
