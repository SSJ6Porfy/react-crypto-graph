import React from 'react';
// import CanvasJS from '../vendor/chart';
// import CanvasJS from 'canvasjs';

const CryptoGraph = ({path, symbol}) => {
  function getDataPointsFromCSV(csv) {
    var dataPoints = [];

    var chart = new CanvasJS.Chart("chartContainer", {
    	animationEnabled: true,
    	theme: "light2", // "light1", "light2", "dark1", "dark2"
    	exportEnabled: true,
    	title: {
    		text: `${symbol} Stock Price`
    	},
    	subtitles: [{
    		text: "Weekly Averages"
    	}],
    	axisX: {
    		interval: 1,
    		valueFormatString: "MMM"
    	},
    	axisY: {
    		includeZero: false,
    		prefix: "$",
    		title: "Price"
    	},
    	toolTip: {
    		content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[1]}<br />High: {y[2]}, Low: {y[3]}"
    	},
    	data: [{
    		type: "candlestick",
    		yValueFormatString: "$##0.00",
    		dataPoints: dataPoints
    	}]
    });

  	var csvLines = [];
    var points = [];
  	csvLines = csv.split(/[\r?\n|\r|\n]+/);
  	for (var i = 0; i < csvLines.length/8; i++) {
  		if (csvLines[i].length > 0) {
  			points = csvLines[i].split(",");
  			dataPoints.push({
  				x: new Date(
  					parseInt(points[0].split("-")[0]),
  					parseInt(points[0].split("-")[1]),
  					parseInt(points[0].split("-")[2])
  				),
  				y: [
  					parseFloat(points[1]),
  					parseFloat(points[2]),
  					parseFloat(points[3]),
  					parseFloat(points[4])
  				]
  			});
  		}
  	}
  	chart.render();
  }
  let xhr = new XMLHttpRequest();
  xhr.open('GET', path);
  xhr.onload = function() {
    if (xhr.status === 200) {
        getDataPointsFromCSV(xhr.responseText);
    }
    else {
        console.log(xhr.status);
    }
  };
  xhr.send();
  return (
    <div>
      <div id="chartContainer"></div>
    </div>
  );
};

CryptoGraph.defaultProps = {
	path: "",
	symbol: "BTC"
};


export default CryptoGraph;
