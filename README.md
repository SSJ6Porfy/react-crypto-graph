# react-crypto-graph

React-Crypto-Graph is an NPM package for adding crypto currency graphs complete with trading tools to web applications.

Builders:
1. [Justin Diederich](https://www.linkedin.com/in/justindiederich/), Business Dev
2. [Cory Kane](https://www.linkedin.com/in/cory-kane/), Developer 
3. [Adrian Jewell](https://www.linkedin.com/in/adrian-jewell-%E7%88%B1%E5%BE%B7%E5%8D%8E-391a43142/), Developer
4. [Porifio Matias](https://www.linkedin.com/in/porfiriomatias/), Developer 

<img src="https://github.com/SSJ6Porfy/react-crypto-graph/blob/master/media/BTC-Price-Screenshot.png"></img>

* **Simple API:** React-Crypto-Graph makes it painless to create interactive graphs.
* **Robust Customizability** Perfect for building trading platforms and exchanges because the trading tools that traders expect come baked in to the api.
* **Up to the minute data** React-Crypto-Graph hits an api endpoint to get the latest data for the currency of your choice or can be configured to hit your own proprietary api for data.

## Documentation

Installation
```
npm install --save react-crypto-graph
```

Setting your currency types
NOTE: All props are optional
* currencies get passed in as props
  * if you don't pass in any props it defaults to BTC vs USD
```
currency={"BTCUSD"}
chartType={"CandleStick"}
timeWindow={"month"}
chartHeight={400}
chartWidth={550}
30dayMovingAverage={true}
bollingerBands={true}
MACD={true}
Aroon={true}
```

## Examples

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Graph } from 'react-crypto-graph';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Test <Graph/></h1>, root);
});
```
This example will render a BTC USD Graph into a container on the page.
