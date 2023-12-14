import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent {
  data: any;
  lang: string;
  constructor() {
    this.lang = localStorage.getItem('lang');
    if (this.lang === 'ar') {
      this.data = [2.5, 3.7, 0.5, 2.2, 4, 2.5, 3.5, 3, 2.8, 1.7, 1, 3.5];
    } else {
      this.data = [3.5, 1, 1.7, 2.8, 3, 3.5, 2.5, 4, 2.2, 0.5, 3.7, 2.5];
    }
  }
  @ViewChild('canvas') canvas: ElementRef;
  chart: any;
  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: [
          'ديسمبر',
          'نوفبمر',
          'أكتوبر',
          'سيتمير',
          'أغسطس',
          'يوليو',
          'يونيو',
          'مايو ',
          'أبريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
        datasets: [
          {
            label: 'Population',
            data: this.data,
            backgroundColor: 'rgba(138, 116, 249, .1)',
            borderWidth: 3,
            borderColor: '#8A74F9',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        title: {
          display: false,
          text: 'Largest city in upper egypt',
          fontSize: 25,
        },
        legend: {
          display: false,
          position: 'left',
          labels: {
            fontColor: '#000',
          },
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        tooltips: {
          enabled: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                min: 0,
                max: 4,
                stepSize: 1,
                display: false,
              },
            },
          ],
        },
      },
    });
  }
}
