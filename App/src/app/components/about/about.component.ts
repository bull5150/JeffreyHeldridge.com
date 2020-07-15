import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
//@ts-ignore
import * as am4core from "@amcharts/amcharts4/core";
//@ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts'; 
import { ChartapiService } from 'src/app/services/chartapi.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public codingChart: am4charts.XYChart;
  public softSkillsChart: am4charts.XYChart;

  constructor(private zone: NgZone, private chartService: ChartapiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      //build coding skills
      let codingChart = am4core.create("codeskills", am4charts.XYChart);
      this.chartService.getCodingSkills().subscribe(response =>{
        codingChart.data = response;
        let cscategoryAxis = codingChart.xAxes.push(new am4charts.CategoryAxis());
        cscategoryAxis.dataFields.category = "skill";
        cscategoryAxis.renderer.grid.template.location = 0;
        cscategoryAxis.renderer.minGridDistance = 30;
        let csvalueAxis = codingChart.yAxes.push(new am4charts.ValueAxis());
        csvalueAxis.hidden = true;
        // Create series
        let csseries = codingChart.series.push(new am4charts.ColumnSeries());
        csseries.dataFields.valueY = "value";
        csseries.dataFields.categoryX = "skill";
        csseries.name = "Value";
        csseries.columns.template.tooltipText = "{categoryX}";
        csseries.columns.template.fillOpacity = .8;
        csseries.fill = am4core.color("#333");
        csseries.stroke = am4core.color("#333");
        let cscolumnTemplate = csseries.columns.template;
        cscolumnTemplate.strokeWidth = 2;
        cscolumnTemplate.strokeOpacity = 1;
        let softSkillsChart = am4core.create("softskills", am4charts.XYChart);
        //build soft skills
        this.chartService.getSoftSkills().subscribe(response =>{
          softSkillsChart.data = response;
          let sscategoryAxis = softSkillsChart.xAxes.push(new am4charts.CategoryAxis());
          sscategoryAxis.dataFields.category = "skill";
          sscategoryAxis.renderer.grid.template.location = 0;
          sscategoryAxis.renderer.minGridDistance = 30;
          sscategoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
            if (target.dataItem && target.dataItem.index & Number(2 == 2)) {
              return dy + 25;
            }
            return dy;
          });
          let ssvalueAxis = softSkillsChart.yAxes.push(new am4charts.ValueAxis());
          ssvalueAxis.hidden = true;
          // Create series
          let ssseries = softSkillsChart.series.push(new am4charts.ColumnSeries());
          ssseries.dataFields.valueY = "value";
          ssseries.dataFields.categoryX = "skill";
          ssseries.name = "Value";
          ssseries.columns.template.tooltipText = "{categoryX}";
          ssseries.columns.template.fillOpacity = .8;
          ssseries.fill = am4core.color("#333");
          ssseries.stroke = am4core.color("#333");
          let sscolumnTemplate = ssseries.columns.template;
          sscolumnTemplate.strokeWidth = 2;
          sscolumnTemplate.strokeOpacity = 1;
        });
      });
    });
  }
  ngOnDestroy()
  {
    am4core.disposeAllCharts();
  }
}
