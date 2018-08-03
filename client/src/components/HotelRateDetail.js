import React, {Component} from 'react';

import '../index.css'

class HotelRateDetail extends Component {
    constructor() {
        super();

    }

    render() {
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if(!hotelRate){
            hotelRate={properties:[]};
        }

        let propertiesHtml = [];
        for (let i = 0; i < hotelRate.properties.length; i++) {
            propertiesHtml.push(<li key={i}><label>{hotelRate.properties[i].key}</label>
                <span>{hotelRate.properties[i].value}</span></li>);
        }

        return (
            <section className="section section-no-background section-no-border m-0 p-0">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="mt-4 pt-4 mb-0 pb-0 text-uppercase">{hotelRate.title}</h3>
                            <div className="divider divider-primary divider-small mb-4 mt-0">
                                <hr className="mt-2 mr-auto" />
                            </div>
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="mt-4 lead">{hotelRate.description}</p>
                                    <div className="room-suite-info">
                                        <ul>
                                            {propertiesHtml}
                                            <li>
                                                <a href="demo-hotel-book.html" className="btn btn-primary btn-lg text-2 text-uppercase mt-2 room-suite-info-book-now"title>Резервирайте сега</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="">
                                        <div>
                                            <img src={hotelRate.url} className="img-fluid" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HotelRateDetail;
