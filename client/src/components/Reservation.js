import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../index.css'
import {inputChangeHandler} from "../helpers/inputHelper";

class Reservation extends Component {
    constructor() {
        super();
        this.state = {
            arriveDate: moment(),
            departureDate: moment(),
            adults: 0,
            kids: 0,
        }

        this.handleArriveChange = this.handleArriveChange.bind(this);
        this.handleDepartureChange = this.handleDepartureChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = inputChangeHandler.bind(this);

    getQueryData(state){
        return 'arriveDate=' + state.arriveDate.format('DD/MM/YYYY') + '&departureDate=' + state.departureDate.format('DD/MM/YYYY') +
            '&kids=' + state.kids +'&adults=' + state.adults;
    }

    handleArriveChange(date) {
        this.setState({
            arriveDate: date,
        });
    }

    handleDepartureChange(date) {
        this.setState({
            departureDate: date,
        });

    }

    render() {

        return (
            <li>
                <div className="dropdown-mega-content">
                    <form id="bookFormHeader" action="hotel-book.html" method="POST">
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
                            <div className="form-group col-lg-6">
                                <div className="form-control-custom">
                                    <select className="form-control text-uppercase text-2" name="adults"
                                            id="adults"
                                            onChange={this.handleInputChange} value={this.state.adults}>
                                        <option value>Възрастни</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-lg-6">
                                <div className="form-control-custom">
                                    <select className="form-control text-uppercase text-2" name="kids"
                                            id="kids"
                                            onChange={this.handleInputChange} value={this.state.kids}>
                                        <option value>Деца</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col mb-0">
                                <a href={'/hotel-book.html?' + this.getQueryData(this.state)} className="btn btn-secondary btn-lg btn-block text-uppercase text-2">Провери наличността</a>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        );
    }
}

export default Reservation;
