import React, {Component} from 'react';

import '../index.css'
import HotelRate from "./HotelRate";

class HotelRates extends Component {
    constructor() {
        super();
    }

    render() {
        let hotelRates = this.props.hotelRates;
        let hotelRatesHtml = [];
        for (let i=0; i< hotelRates.length;i++){
            hotelRatesHtml.push(<HotelRate hotelRates={hotelRates[i]} key={i}/>)
        }

        return (
            <div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="row"><br/><br/></div>
                        <div className="">
                            <div className="row mb-4 portfolio-list">
                                {hotelRatesHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HotelRates;
