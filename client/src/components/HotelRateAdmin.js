import React, {Component} from 'react';

import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";

class HotelRateAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.hotelRates.title,
            properties: this.props.hotelRates.properties,
            url: this.props.hotelRates.url,
            images:this.props.hotelRates.images,
            description: this.props.hotelRates.description,
            _id:this.props.hotelRates._id
        };

        this.handleInputChange = inputChangeHandler.bind(this);
        this.handleSubmit = submitHandler.bind(this);
        this.handlePropertyChange = this.handlePropertyChange.bind(this);

    }

    handleSubmit(event){

    }

    handlePropertyChange(event) {
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
        if(this.state.properties.length <= 1){
            return;
        }

        this.setState({
            properties: [...this.state.properties.slice(0, index), ...this.state.properties.slice(index + 1)]
        });
    }

    addProperty(index) {
        this.setState({
            properties: [...this.state.properties.slice(0, index + 1), {
                key: '',
                value: ''
            }, ...this.state.properties.slice(index + 1)]
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, nextProps.hotelRates));
    }

    componentDidMount() {
        let self = this;
            window.runImageUpload(this.state._id);

            window.imageEvent[this.state._id].initEvent('imageReady' + this.state._id, true, true);

            window.addEventListener('imageReady' + this.state._id, function (e) {
                self.setState({
                    url: 'https://res.cloudinary.com/df3euu0sz/image/upload/v1532481656/' + e.data[0].public_id
                })
                console.log(e);
            }, false);
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
            <div className="col-md-6 col-lg-4 isotope-item rooms mb-4 pb-3">
                <form onSubmit={this.handleSubmit}>
                    <a id={"upload_widget_opener" + this.state._id}>
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
                            <li style={{marginTop: '10px'}}>
                                <button type="submit"
                                        className="btn btn-primary pull-left">Запиши
                                    информацията
                                </button>
                                <img src="img/ok.png" title="Добави нов тип стая"
                                     style={{marginRight: '10px', marginLeft: '30px'}} width="40px"
                                     onClick={this.props.addRates}/>

                                <img src="img/delete.png" title="Изтрий типа стая" width="40px" onClick={this.props.deleteRates}/>
                            </li>
                        </ul>
                    </div>
                </form>

            </div>
        );
    }
}

export default HotelRateAdmin;

