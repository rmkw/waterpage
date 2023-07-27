import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-three-metric',
  templateUrl: './three-metric.component.html',
  styleUrls: ['./three-metric.component.css']
})
export class ThreeMetricComponent implements OnInit{

  ngOnInit(): void {
    var Highcharts = require('highcharts');
    // require('highcharts/modules/exporting')(Highcharts);
    // require('highcharts/modules/export-data')(Highcharts);
    // require('highcharts/modules/accessibility')(Highcharts);
    // require('highcharts/highcharts')(Highcharts);
    require('highcharts/highcharts-more')(Highcharts);


    Highcharts.chart('charSpeed', {

    chart: {
        type: 'gauge',

        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'

    },

    title: {
      text: 'Variables cubiertas del MDEA',
      style:{
        "fontSize":"1.5rem"
      }
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '120%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '1rem'
            }
        },
        // lineWidth: 0,
        plotBands: [{
        from: 0,
        to: 10,
        color: '#43aaff', //
        thickness: 25
      },{
        from: 10,
        to: 30,
        color: '#088fff', //
        thickness: 25
      }, {
        from: 30,
        to: 50,
        color: '#007ae0', //
        thickness: 25
      },{
        from: 50,
        to: 70,
        color: '#0065b9', //
        thickness: 25
      }, {
        from: 70,
        to: 90,
        color: '#005092', //
        thickness: 25
      },{
        from: 90,
        to: 100,
        color: '#003057', //
        thickness: 25
      }]
    },

    series: [{
        name: 'Porcentaje',
        data: [10],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '1.5rem'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

  },function(chart:any) {
    var arr = chart.options.exporting.buttons.contextButton.menuItems;
    var index = arr.indexOf("viewData");
    if (index !== -1) arr.splice(index, 1);
  }

);

// Add some life
setInterval(() => {
    const chart = Highcharts.charts[0];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 3000);

}


}
