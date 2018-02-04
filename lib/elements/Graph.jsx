import React from 'react';
import CryptoGraph from "./CryptoGraph";
import Button from "./button";

class Graph extends React.Component {
    constructor(props) {
        super();
        this.state = {
            current: "BTC"
        };
        this.toggleCurrency = this.toggleCurrency.bind(this);
        this.movingAverage = this.movingAverage.bind(this);
    }

    toggleCurrency() {
        if (this.state.current == "BTC") {
            this.setState({ current: "ETH"});
        } else {
            this.setState({ current: "BTC"});
        }
    }

    render() {
        return (
            <div className="crypto-graph-wrapper">
                <Button className="currency-btn" onClick={this.toggleCurrency}>{this.state.current}</Button>
                <CryptoGraph symbol={this.state.current} path={`https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/${this.state.current}+USD+Bitfinex+Historical+Data+copy.csv`}/>
            </div>
        );
    }
}

export default Graph;
