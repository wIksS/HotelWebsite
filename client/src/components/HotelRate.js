import React, {Component} from 'react';

import '../index.css'

class HotelRate extends Component {
    constructor() {
        super();
    }

    render() {
        let hotelRates = this.props.hotelRates;
        let propertiesHtml = [];
        for (let i = 0; i < hotelRates.properties.length; i++) {
            propertiesHtml.push(<li key={i}><label>{hotelRates.properties[i].key}</label>
                <span>{hotelRates.properties[i].value}</span></li>);
        }

        return (
            <div className="col-md-6 col-lg-4 isotope-item rooms mb-4 pb-3">
                <a href="demo-hotel-house-rates-detail.html">
                  <span
                      className="thumb-info thumb-info-centered-info thumb-info-no-borders">
                    <span className="thumb-info-wrapper">
                      <img src={hotelRates.url} className="img-fluid" alt/>
                      <span className="thumb-info-title">
                        <span className="thumb-info-inner">View Details</span>
                      </span>
                    </span>
                  </span>
                </a>
                <h5 className="mt-3 mb-0">{this.props.hotelRates.title}</h5>
                <div className="room-suite-info">
                    <ul>
                        {propertiesHtml}
                        <li>
                            <a href="demo-hotel-house-rates-detail.html"
                               className="room-suite-info-detail" title>Вижте повече <i
                                className="fas fa-long-arrow-alt-right"/></a>
                            <a href="demo-hotel-book.html" className="room-suite-info-book" title>Резервирайте сега</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HotelRate;
