import React, {Component} from 'react';
import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { withAlert } from 'react-alert'

import 'react-datepicker/dist/react-datepicker.css';

import '../index.css'

class HotelBook extends Component {
    constructor() {
        super();

        this.state = {
            selected: {},
            name: '',
            phone: '',
            arriveDate: moment(),
            departureDate: moment(),
            adults: 0,
            kids: 0,
            agree:false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleArriveChange = this.handleArriveChange.bind(this);
        this.handleDepartureChange = this.handleDepartureChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleInputChange = inputChangeHandler.bind(this);

    sendEmail(event){
        if(!this.state.phone){
            this.props.alert.error('Моля добавете телефонния си номер');
        }
        else if(Object.keys(this.state.selected).length === 0){
            this.props.alert.error('Моля изберете стая');
        }

        event.preventDefault();
    }

    handleArriveChange(date) {
        this.setState({
            arriveDate: date
        });
    }

    handleDepartureChange(date) {
        this.setState({
            departureDate: date
        });
    }

    findPropertyValue(arr, prop) {
        prop = prop.toLowerCase();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key.toLowerCase() == prop) {
                return arr[i].value;
            }
        }
    }

    onRadioChanged(e) {
        this.setState({
            selected: this.props.hotelRates[e.currentTarget.value]
        });
    }

    onHouseRadioChanged(e) {
        this.setState({
            selected: this.props.hotelHouseRates[e.currentTarget.value]
        });
    }

    render() {
        let hotelRates = this.props.hotelRates;
        let hotelRatesHtml = [];
        for (let i = 0; i < hotelRates.length; i++) {

            hotelRatesHtml.push(<div className="row">
                <div className="col-1 text-center">
                    <label className="mt-4 mb-4">
                        <input type="radio" name="bookNowRoom" onChange={this.onRadioChanged.bind(this)} value={i}
                               id="bookNowRoom"
                        />
                    </label>
                </div>
                <div className="col-2 d-none d-sm-block">
                    <img src={hotelRates[i].url} className="img-fluid"/>
                </div>
                <div className="col-11 col-sm-9">
                    <h5 className="mt-0 mb-0">{hotelRates[i].title}</h5>
                    <div className="room-suite-info">
                        <ul>
                            <li><label>ЛЕГЛА</label>
                                <span>{this.findPropertyValue(hotelRates[i].properties, 'ЛЕГЛА')}</span></li>
                            <li><label>ЦЕНА ОТ</label>
                                <strong>{this.findPropertyValue(hotelRates[i].properties, 'ЦЕНА')}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>)
        }

        hotelRates = this.props.hotelHouseRates;
        let hotelHouseRatesHtml = [];


        for (let i = 0; i < hotelRates.length; i++) {
            hotelHouseRatesHtml.push(<div className="row">
                <div className="col-1 text-center">
                    <label className="mt-4 mb-4">
                        <input type="radio" name="bookNowRoom" onChange={this.onHouseRadioChanged.bind(this)} value={i}
                               id="bookNowRoom"
                        />
                    </label>
                </div>
                <div className="col-2 d-none d-sm-block">
                    <img src={hotelRates[i].url} className="img-fluid"/>
                </div>
                <div className="col-11 col-sm-9">
                    <h5 className="mt-0 mb-0">{hotelRates[i].title}</h5>
                    <div className="room-suite-info">
                        <ul>
                            <li><label>ЛЕГЛА</label>
                                <span>{this.findPropertyValue(hotelRates[i].properties, 'ЛЕГЛА')}</span></li>
                            <li><label>ЦЕНА ОТ</label>
                                <strong>{this.findPropertyValue(hotelRates[i].properties, 'ЦЕНА')}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>)
        }

        return (
            <form onSubmit={this.sendEmail}>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4">
                        <section className="section section-tertiary section-no-border p-5 mt-1 mb-4" data-plugin-sticky
                                 data-plugin-options="{'minWidth': 991, 'containerSelector': '.container', 'padding': {'top': 150}}">
                            <div className="form-row">
                                <div className="form-group col">
                                    <h4 className="mt-4 mb-4 pb-0 text-uppercase">Детайли на резервацията</h4>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <div className="form-control-custom form-control-datepicker-custom">
                                        <DatePicker
                                            className={'form-control text-uppercase text-2'}
                                            selected={this.state.arriveDate}
                                            onChange={this.handleArriveChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <div className="form-control-custom form-control-datepicker-custom">
                                        <DatePicker
                                            className={'form-control text-uppercase text-2 form-control-custom form-control-datepicker-custom'}
                                            selected={this.state.departureDate}
                                            onChange={this.handleDepartureChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <div className="form-control-custom">
                                        <select className="form-control text-uppercase text-2" name="adults"
                                                data-msg-required="This field is required." id="adults" required
                                                onChange={this.handleInputChange} value={this.state.adults}>
                                            <option value>Възрастни</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <div className="form-control-custom">
                                        <select className="form-control text-uppercase text-2" name="kids"
                                                data-msg-required="This field is required." id="kids" required
                                                onChange={this.handleInputChange} value={this.state.kids}>
                                            <option value>Деца</option>
                                            <option value={1}>0</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-8">
                        <section className="section section-quaternary section-no-border text-light p-5 mt-1 mb-4">
                            <div className="row">
                                <div className="col">
                                    <h4 className="mt-4 mb-4 pb-0 text-uppercase">Изберете стая от хотела</h4>
                                </div>
                            </div>

                            {hotelRatesHtml}

                            <div className="row">
                                <div className="col">
                                    <h4 className="mt-4 mb-4 pb-0 text-uppercase">Изберете стая от къщата за гости</h4>
                                </div>
                            </div>

                            {hotelHouseRatesHtml}
                        </section>
                        <section className="section section-quaternary section-no-border text-light p-5 mt-1 mb-4">
                            <div className="row">
                                <div className="col">
                                    <h4 className="mt-4 mb-4 pb-0 text-uppercase">Данни на госта</h4>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="name" className="form-control-label">Име</label>
                                    <input type="text" onChange={this.handleInputChange} value={this.state.name}
                                           className="form-control" id="name"
                                           name="name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="phone" className="form-control-label">Телефон за контакт</label>
                                    <input type="number" placeholder={'088 888 888'} onChange={this.handleInputChange } value={this.state.phone}
                                           className="form-control" id="phone"
                                           name="phone"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <br/>
                                    <label className="form-control-label">Ще се свържем с вас на посочения номер, за да
                                        ви потвърдим резервацията.</label>

                                </div>
                            </div>
                        </section>
                        <div className="row">
                            <div className="col">
                                <input type="submit" defaultValue="Изпрати запитване"
                                       className="btn btn-primary btn-lg btn-block text-uppercase p-4 mb-4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <div><label htmlFor="agree">Съгласие за обработка на лични данни</label></div>
                                        <input name="agree" id="agree" type="checkbox" onChange={this.handleInputChange}/> Прочетох и разбрах
                                        записаното в Общите условия за ползване на dekom.bg. Потвърждавам, че съм
                                        съгласен/на личните ми данни да бъдат обработвани, по описания в документа начин
                                        и за целите посочени в него.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withAlert(HotelBook);
