import { Component, ViewChild, Input, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.scss']
})

export class StackedColumnChartComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;
  @Input() seriesDetails: any;
  @Input() xAxisValues: string[];

  constructor() {

  }

  ngOnInit(){
   this.chartOptions = {
         series: this.seriesDetails,
         chart: {
           type: "bar",
           height: 350,
           stacked: true,
           toolbar: {
             show: true
           },
           zoom: {
             enabled: true
           }
         },
         responsive: [
           {
             breakpoint: 480,
             options: {
               legend: {
                 position: "bottom",
                 offsetX: -10,
                 offsetY: 0
               }
             }
           }
         ],
         plotOptions: {
           bar: {
             horizontal: false
           }
         },
         xaxis: {
           type: "category",
           categories: this.xAxisValues
         },
         legend: {
           position: "right",
           offsetY: 40
         },
         fill: {
           opacity: 1
         }
       };
  }
}
