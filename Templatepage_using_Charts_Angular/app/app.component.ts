import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatepage';
  showFiller:boolean=false;

// comment
addSymbols = (e: any) => {
  var suffixes = ["", "K", "M", "B"];
  var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
  if(order > suffixes.length - 1)
  order = suffixes.length - 1;

  var suffix = suffixes[order];
  return (e.value / Math.pow(1000, order) + suffix);
}

chart1Options = {
  animationEnabled: true,
  height: 280,
  axisX: {
  labelAngle: -90
  },
  toolTip: {
  shared: true
  },
  legend:{
  cursor:"pointer",
  itemclick: function(e: any){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
    }
    else {
    e.dataSeries.visible = true;
    }
    e.chart.render();
  }
  },
  data: [{
    type: "column",	
    showInLegend: true, 
    dataPoints:[
      {y: 262},
      {y: 211},
      {y: 175},
      {y: 137},
      {y: 115},
      {y: 104},
      {y: 97.8},
      { y: 60},
      { y: 23.3},
      { y: 20.4}
  ]
  }, {
    type: "column",	
    axisYType: "secondary",
    showInLegend: true,
    dataPoints:[
      {y: 11.15},
      { y: 2.5},
      { y: 3.6},
      { y: 4.2},
      { y: 2.6},
      { y: 2.7},
      { y: 3.1},
      { y: 10.23},
      { y: 10.3},
      { y: 4.3}
  ]
  }]
}	
chart2Options = {
  animationEnabled: true,
  height: 280,
  axisX: {
    minimum: new Date(2011, 0), // Starting from 2011
    maximum: new Date(2018, 0), // Ending at 2018
    labelFormatter: function () {
      return ''; // Removes the X axis labels
    },
    lineThickness: 0 // Optional: Remove the X-axis line
  },
  axisY: {
    labelFormatter: function () {
      return ''; // Removes the Y axis labels
    },
    lineThickness: 0 // Optional: Remove the Y-axis line
  },
  toolTip: {
    enabled: false // Disables the tooltip
  },
  data: [
    {
      type: "splineArea",
      color: "rgba(54,158,173,.7)",
      xValueFormatString: "YYYY",
      dataPoints: [
        { x: new Date(2011, 0), y: 2140000 },
        { x: new Date(2012, 0), y: 7289000 },
        { x: new Date(2013, 0), y: 4830000 },
        { x: new Date(2014, 0), y: 2009000 },
        { x: new Date(2015, 0), y: 2840000 },
        { x: new Date(2016, 0), y: 2396000 },
        { x: new Date(2017, 0), y: 1613000 },
        { x: new Date(2018, 0), y: 2821000 }
      ]
    },
    {
      type: "splineArea",
      color: "rgba(255,99,132,.7)", // Change color for the second wave
      xValueFormatString: "YYYY",
      dataPoints: [
        { x: new Date(2011, 0), y: 3000000 },
        { x: new Date(2012, 0), y: 5000000 },
        { x: new Date(2013, 0), y: 4000000 },
        { x: new Date(2014, 0), y: 3000000 },
        { x: new Date(2015, 0), y: 4500000 },
        { x: new Date(2016, 0), y: 3500000 },
        { x: new Date(2017, 0), y: 3800000 },
        { x: new Date(2018, 0), y: 4200000 }
      ]
    }
  ]
}



chart3Options = {
  animationEnabled: true,height: 230,
  data: [{
  type: "doughnut",
  yValueFormatString: "#,###.##'%'",
  indexLabel: "{name}",
  dataPoints: [
    { y: 28, name: "Labour" },
    { y: 10, name: "Legal" },
    { y: 20, name: "Production" },
    { y: 15, name: "License" },
    { y: 23, name: "Facilities" },
    { y: 17, name: "Taxes" },
    { y: 12, name: "Insurance" }
  ]
  }]
}	
}