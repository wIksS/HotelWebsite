import React, {Component} from 'react';

import '../index.css'
import {HotelOverviewText} from "../helpers/constants";

class HotelOverview extends Component {
    constructor() {
        super();
    }

    render() {
        let propertiesRows = [];
        for(let i =0; i< 3;i++){
            let propertiesCols = [];
            for(let j =0; j<3; j++){
                let propValue = this.props.hotelOverview.properties[(i*3) + j];
                if(propValue) {
                    propertiesCols.push(<li><i className="fas fa-check"></i> {propValue}</li>)
                }
            }

            propertiesRows.push(
                <div className="col-lg-4">
                    <ul className="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
                        {propertiesCols}
                    </ul>
                </div>);
        }

        let info =[];
        if(this.props.expanded){
            info.push(<p className="mt-4">{this.props.hotelOverview.description}</p>);
        }else{
            info.push(<p className="mt-4">{this.props.hotelOverview.description.substring(0, 230)} <a
                href="hotel.html" className="custom-rtl-link-fix" title="">(Вижте Повече...)</a></p>);
        }

        return (
            <div className="react">
                <h3 className="mt-4 mb-0 pb-0 text-uppercase">{HotelOverviewText}</h3>
                <div className="divider divider-primary divider-small mb-4 mt-0">
                    <hr className="mt-2 mr-auto"/>
                </div>

                {info}

                <div className="row">
                    {propertiesRows}
                </div>
            </div>
        );
    }
}

export default HotelOverview;
