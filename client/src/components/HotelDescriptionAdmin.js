import React, {Component} from 'react';

import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";

class HotelDescriptionAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {title: this.props.hotelDescription.title, subTitle: this.props.hotelDescription.subTitle, description: this.props.hotelDescription.description};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = inputChangeHandler.bind(this);
    handleSubmit = submitHandler.bind(this);

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, nextProps.hotelDescription));
    }

    render() {
        return (
            <div className="react">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            className="form-control"
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            name="subTitle"
                            type="text"
                            value={this.state.subTitle}
                            className="form-control"
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                    <textarea
                        name="description"
                        rows={4}
                        value={this.state.description}
                        className="form-control"
                        onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Запиши информацията</button>
                </form>
            </div>
        );
    }
}

export default HotelDescriptionAdmin;

