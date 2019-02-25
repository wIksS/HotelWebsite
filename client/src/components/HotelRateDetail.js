import React, {Component} from 'react';

import '../index.css'

class HotelRateDetail extends Component {
    constructor() {
        super();

    }

    render() {
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if(!hotelRate){
            hotelRate={properties:[], images:[]};
        }

        let propertiesHtml = [];
        for (let i = 0; i < hotelRate.properties.length; i++) {
            propertiesHtml.push(<li key={i}><label>{hotelRate.properties[i].key}</label>
                <span>{hotelRate.properties[i].value}</span></li>);
        }


        let imagesHtml = [];
        for (let i=0;i<hotelRate.images.length;i++){
            imagesHtml.push(
                <div>
                    <img src={hotelRate.images[i]} className="img-fluid" alt=""/>
                </div>
            );
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
                                                <a href="hotel-book.html" className="btn btn-primary btn-lg text-2 text-uppercase mt-2 room-suite-info-book-now"title>Резервирайте сега</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="">
                                        <div className="owl-carousel owl-theme nav-inside box-shadow-custom mt-4"
                                             data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">

                                            {imagesHtml}
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
