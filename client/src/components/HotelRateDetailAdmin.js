import React, {Component} from 'react';

import '../index.css'
import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";

class HotelRateDetail extends Component {
    constructor(props) {
        super(props);
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {};
        }

        this.state = {
            title: hotelRate.title,
            properties: hotelRate.properties,
            url: hotelRate.url,
            description: hotelRate.description,
            _id:hotelRate._id
        };

        this.handleInputChange = inputChangeHandler.bind(this);
        this.handleSubmit = submitHandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let hotelRate = nextProps.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {};
        }

        this.setState(Object.assign({}, hotelRate));
    }

    render() {
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {properties: []};
        }

        let propertiesHtml = [];
        for (let i = 0; i < hotelRate.properties.length; i++) {
            propertiesHtml.push(<li key={i}><label>{hotelRate.properties[i].key}</label>
                <span>{hotelRate.properties[i].value}</span></li>);
        }

        return (
            <section className="section section-no-background section-no-border m-0 p-0">
                <form onSubmit={this.handleSubmit}>

                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="mt-4 pt-4 mb-0 pb-0 text-uppercase">{hotelRate.title}</h3>
                            <div className="divider divider-primary divider-small mb-4 mt-0">
                                <hr className="mt-2 mr-auto"/>
                            </div>
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="mt-4 lead">
                                            <textarea name={'description'}
                                                      cols="70" rows="8"
                                                      className="form-control"
                                                      onChange={this.handleInputChange}
                                                      value={this.state.description}/>
                                    </p>
                                    <div className="room-suite-info">
                                        <ul>
                                            {propertiesHtml}
                                            <li>
                                                <br/>
                                                <button type="submit"
                                                        className="btn btn-primary pull-right">Запиши
                                                    информацията
                                                </button>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="owl-carousel owl-theme nav-inside box-shadow-custom mt-4"
                                         data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">
                                        <div>
                                            <img src={hotelRate.url} className="img-fluid" alt/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </section>
        );
    }
}

export default HotelRateDetail;
