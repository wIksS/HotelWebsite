import React, {Component} from 'react';

import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";
import $ from 'jquery'

class HotelRatesAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', properties: [], url: ''};

        this.handleInputChange = inputChangeHandler.bind(this);
        this.handleSubmit = submitHandler.bind(this);
        this.handlePropertyChange = this.handlePropertyChange.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, nextProps.hotelRates));
    }

    handlePropertyChange(event) {
        debugger;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newProperties = [...this.state.properties];
        if (target.classList.contains("key")) {
            newProperties[name].key = value;

        } else if (target.classList.contains("value")) {
            newProperties[name].value = value;

        }

        this.setState({
            properties: newProperties
        });
    }

    deleteProperty(index) {
        this.setState({
            properties: [...this.state.properties.slice(0, index), ...this.state.properties.slice(index + 1)]
        });
    }

    addProperty(index) {
        debugger;
        this.setState({
            properties: [...this.state.properties.slice(0, index + 1), {
                key: '',
                value: ''
            }, ...this.state.properties.slice(index + 1)]
        });
    }

    componentDidMount() {
        let self = this;
        window.addEventListener('load', function () {
            window.runImageUpload();

            window.imageEvent.initEvent('imageReady', true, true);

            window.addEventListener('imageReady', function (e) {
                self.setState({
                    url: 'https://res.cloudinary.com/df3euu0sz/image/upload/v1532481656/' + e.data[0].public_id
                })
                console.log(e);
            }, false);
        });


    }

    render() {
        let hotelRates = this.state;
        let self = this;
        let propertiesHtml = [];
        for (let i = 0; i < hotelRates.properties.length; i++) {
            propertiesHtml.push(<li key={i}>
                <div className={"row"} style={{marginLeft: 0, marginRight: '0px'}}>
                    <div className={"col-md-2"} style={{padding: 0}}>
                        <img src="img/ok.png" style={{marginRight: '10px'}} width="15px" onClick={function () {
                            self.addProperty(i)
                        }}/>

                        <img src="img/delete.png" width="15px" onClick={function () {
                            self.deleteProperty(i)
                        }}/>
                    </div>
                    <input
                        name={i}
                        value={hotelRates.properties[i].key}
                        type="text"
                        className="form-control col-md-5 key"
                        onChange={this.handlePropertyChange}/>

                    <input
                        name={i}
                        type="text"
                        key={i}
                        value={hotelRates.properties[i].value}
                        className="form-control col-md-5 value"
                        onChange={this.handlePropertyChange}/>


                </div>
            </li>);
        }

        return (
            <div className="react">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="row"><br/><br/></div>
                                <div className="">
                                    <div className="row mb-4 portfolio-list">
                                        <div className="col-md-6 col-lg-4 isotope-item rooms mb-4 pb-3">
                                            <a id="upload_widget_opener">
                                      <span
                                          className="thumb-info thumb-info-centered-info thumb-info-no-borders">
                                        <span className="thumb-info-wrapper">
                                          <img src={this.state.url} className="img-fluid" alt/>
                                            <span className="thumb-info-title">
                                             <span className="thumb-info-inner">Качи снимка</span>
                                          </span>
                                        </span>
                                      </span>
                                            </a>
                                            <h5 className="mt-3 mb-0">
                                                <input
                                                    name="title"
                                                    type="text"
                                                    value={hotelRates.title}
                                                    className="form-control"
                                                    onChange={this.handleInputChange}/>
                                            </h5>
                                            <div className="room-suite-info">
                                                <ul>
                                                    {propertiesHtml}
                                                    <li>
                                                        <button type="submit"
                                                                className="btn btn-primary pull-left">Запиши
                                                            информацията
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default HotelRatesAdmin;

