import React, {Component} from 'react';

import '../index.css'

class HotelDescription extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="react">
                <h3 className="mt-4 mb-0 pb-0 text-uppercase">{this.props.hotelDescription.title}</h3>
                <div className="divider divider-primary divider-small mb-4 mt-0">
                    <hr className="mt-2 mr-auto"/>
                </div>

                <p className="lead">{this.props.hotelDescription.subTitle}</p>

                <p className="mt-4">{this.props.hotelDescription.description}</p>

                <a className="btn btn-primary btn-lg text-2 text-uppercase mt-2 mb-4" href="#">Научете повече</a>
            </div>
        );
    }
}

export default HotelDescription;
