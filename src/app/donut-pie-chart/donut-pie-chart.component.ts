import { Component, ViewChild, Input, AfterViewInit, OnInit } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
  colors: string[];
};

@Component({
  selector: 'app-donut-pie-chart',
  templateUrl: './donut-pie-chart.component.html',
  styleUrls: ['./donut-pie-chart.component.scss']
})

export class DonutPieChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() seriesValues: number[];
  @Input() seriesLabels:string[];
  @Input() seriesColors:string[];

  constructor() {
  }

  ngOnInit(){
      this.chartOptions = {
        series: this.seriesValues,
        chart: {
          type: "donut"
        },
        labels: this.seriesLabels,
        colors: this.seriesColors,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            },
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  formatter: function (val:any) {
                    return val
                  }
                },
                value: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: '#000',
                  offsetY: 16,
                  formatter: function (val:any) {
                    return val
                  }
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#000',
                  formatter: function (w:any) {
                    return w.globals.seriesTotals.reduce((a:any, b:any) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            },
          }
        }
      };
  }
}
