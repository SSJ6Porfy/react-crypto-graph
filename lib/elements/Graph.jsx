import React from 'react';
import CryptoGraph from "./CryptoGraph";

class Graph extends React.Component {
    constructor(props) {
        super();
        this.state = {
            current: "BTC"
        };
        this.toggleCurrency = this.toggleCurrency.bind(this);
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
            <div>
                <button className="currency-btn" onClick={this.toggleCurrency}>{this.state.current}</button>
                <CryptoGraph symbol={this.state.current} path={`https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/${this.state.current}+USD+Bitfinex+Historical+Data+copy.csv`}/>
            </div>
        );
    }
}

export default Graph;