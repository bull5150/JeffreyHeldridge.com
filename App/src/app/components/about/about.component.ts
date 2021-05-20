import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
//@ts-ignore
import * as am4core from "@amcharts/amcharts4/core";
//@ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts'; 
import { ChartapiService } from '../../services/chartapi.service';
import { NavigationEnd, Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public codingChart: am4charts.XYChart;
  public softSkillsChart: am4charts.XYChart;
  public infoLoaded: boolean;

  constructor(private zone: NgZone, private chartService: ChartapiService, public router: Router) { 
      ga('set', 'page', 'About');
      ga('send', 'pageview');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      let codingChart = am4core.create("skills", am4charts.XYChart);
      this.chartService.getSkills().subscribe(response =>{
        codingChart.data = response;
        let cscategoryAxis = codingChart.yAxes.push(new am4charts.CategoryAxis());
        cscategoryAxis.dataFields.category = "skill";
        cscategoryAxis.renderer.grid.template.location = 0;
        cscategoryAxis.renderer.minGridDistance = 30;
        let csvalueAxis = codingChart.xAxes.push(new am4charts.ValueAxis());
        csvalueAxis.hidden = true;
        let csseries = codingChart.series.push(new am4charts.ColumnSeries());
        csseries.dataFields.valueX = "value";
        csseries.dataFields.categoryY = "skill";
        csseries.name = "Value";
        csseries.columns.template.tooltipText = "{categoryY}: {valueX}";
        csseries.columns.template.fillOpacity = .8;
        csseries.fill = am4core.color("#333");
        csseries.stroke = am4core.color("#9f00ff");
        let cscolumnTemplate = csseries.columns.template;
        cscolumnTemplate.strokeWidth = 2;
        cscolumnTemplate.strokeOpacity = 1;
      });
    });
  }
  ngOnDestroy()
  {
    am4core.disposeAllCharts();
  }
}
