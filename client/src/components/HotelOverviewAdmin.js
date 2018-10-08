import React, {Component} from 'react';

import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";
import {HotelOverviewText} from "../helpers/constants";

class HotelDescriptionAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {description: this.props.hotelOverview.description, properties: this.props.hotelOverview.properties};

        this.handleInputChange = inputChangeHandler.bind(this);
        this.handleSubmit = submitHandler.bind(this);
        this.handlePropertyChange = this.handlePropertyChange.bind(this);
    }

    handlePropertyChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newProperties = [...this.state.properties];
        newProperties[name] = value;

        this.setState({
            properties: newProperties
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, nextProps.hotelOverview));
    }

    render() {
        let propertiesRows = [];

        for(let i =0; i< 3;i++){
            let propertiesCols = [];
            for(let j =0; j<3; j++){
                propertiesCols.push(<li key={i + ' ' + j}><i className="fas fa-check"></i>
                    <input
                        name={((i*3) + j)}
                        type="text"
                        value={this.state.properties[(i*3) + j]}
                        className="form-control"
                        onChange={this.handlePropertyChange}/>
                    </li>)
            }

            propertiesRows.push(
                <div key={i} className="col-lg-4">
                    <ul className="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
                        {propertiesCols}
                    </ul>
                </div>);
        }

        return (
            <div className="react">
                <h3 className="mt-4 mb-0 pb-0 text-uppercase">{HotelOverviewText}</h3>
                <div className="divider divider-primary divider-small mb-4 mt-0">
                    <hr className="mt-2 mr-auto"/>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <textarea
                            name="description"
                            rows={3}
                            value={this.state.description}
                            className="form-control"
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="row">
                        {propertiesRows}
                    </div>

                    <br/>
                    <button type="submit" className="btn btn-primary">Запиши информацията</button>
                </form>

            </div>
        );
    }
}

export default HotelDescriptionAdmin;

