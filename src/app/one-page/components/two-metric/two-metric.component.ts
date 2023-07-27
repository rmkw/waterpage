import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as  Highcharts  from "highcharts";


@Component({
  selector: 'app-two-metric',
  templateUrl: './two-metric.component.html',
  styleUrls: ['./two-metric.component.css']
})
export class TwoMetricComponent implements OnInit {

  ngOnInit(): void {
    var Highcharts = require('highcharts');
    require('highcharts/modules/exporting')(Highcharts);


    Highcharts.chart('container', {
    chart: {
        type: 'bar',

        height: '78%',
        plotShadow: false,
        plotBorderWidth: 0,
    },
    title: {
        text: 'Variables MDEA',
        align: 'center',
        style:{
          "fontSize":"1.5rem",

        }
    },

    xAxis: {
        categories: [''],
        title: {
            text: 'Variables cubiertas'
        },

    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Porcentaje',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },

    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {

            dataLabels: {
                enabled: true
            },

        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'bottom',
        x: 10,
        y: 10,
        floating: false,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        // shadow: true
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    //     shadow: true
    // },
    credits: {
        enabled: false
    },
    series: [
      {name:'Componentes:',
      color:'white'},
      {
        name: '1: Condiciones y calidad ambiental',
        data: [10, ],
        color:'#003057'
      }, {
        name: '2: Recursos ambientales y su uso',
        data: [5, ],
        color:'#005092'
      }, {
        name: '3: Residuos',
        data: [30, ],
        color: '#0065b9'
      }, {
        name: '4: Eventos extremos y desastres',
        data: [15, ],
        color: '#007ae0'
      }, {
        name: '5: Asentamientos humanos y salud ambiental',
        data: [11, ],
        color:'#088fff'
      }, {
        name: ' 6: Protección, gestión y participación/acción ambiental',
        data: [13, ],
        color:'#43aaff'
      }]
    });


  }


}




