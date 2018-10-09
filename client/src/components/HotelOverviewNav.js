import React, {Component} from 'react';

import '../index.css'
import {HotelOverviewText} from "../helpers/constants";

class HotelOverviewNav extends Component {
    constructor() {
        super();
    }

    render() {
        // let propertiesRows = [];
        // for(let i =0; i< 3;i++){
        //     let propertiesCols = [];
        //     for(let j =0; j<3; j++){
        //         let propValue = this.props.hotelOverview.properties[(i*3) + j];
        //         if(propValue) {
        //             propertiesCols.push(<li><i className="fas fa-check"></i> {propValue}</li>)
        //         }
        //     }

        //     propertiesRows.push(
        //         <div className="col-lg-4">
        //             <ul className="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
        //                 {propertiesCols}
        //             </ul>
        //         </div>);
		// 		}
				
		// 		let propertiesRowsAttract = [];
		// 		const attractOverview =[
		// 			"Интернет в рамките на хотела.",
		// 			"Минерален басейн (закрит, лечебен).",
		// 			"Физиотерапия – два пъти на ден от Понеделник до Петък.",
		// 			"Интервак.",
		// 			"Електромагнит.",
		// 			"Тонус апарат.",
		// 			"Галваностат, солукс и кварц."
		// 		];
		// 		const animationDelay = ["0","300","600","900"];

        // for(let i =0; i< 2;i++){
        //     let propertiesColsAttract = [];
        //     for(let j =0; j<4; j++){
		// 						let propValueAttract = attractOverview[(i*4) + j];
		// 						let propValueAnimationDelay = animationDelay[(i*4) + j];
        //         if(propValueAttract) {
		// 							propertiesColsAttract.push(<li className="appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay={propValueAnimationDelay}><i className="fas fa-check"></i> {propValueAttract}</li>)
        //         }
        //     }

        //     propertiesRowsAttract.push(
        //         <div className="col-lg-6">
        //             <ul className="list list-icons list-primary">
        //                 {propertiesColsAttract}
        //             </ul>
        //         </div>);
        // }

        // let info =[];
        // if(this.props.expanded){
        //     info.push(<p className="mt-4">{this.props.hotelOverview.description}</p>);
        // }else{
        //     info.push(<p className="mt-4">{this.props.hotelOverview.description.substring(0, 230)} <a
        //         href="hotel.html" className="custom-rtl-link-fix" title="">(Вижте Повече...)</a></p>);
        // }

        return (
					<div className="react">
						  <div className="tabs tabs-vertical tabs-left tabs-navigation">
                            <ul className="nav nav-tabs col-sm-3">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#tabsNavigation1" data-toggle="tab"> Преглед</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tabsNavigation2" data-toggle="tab"> Услуги</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tabsNavigation3" data-toggle="tab"> Често задавани въпроси</a>
                                </li>
                            </ul>
                        </div>

                        
                            <img alt="" className="img-fluid mt-2 mt-lg-4 mb-4" src="img/demos/hotel/gallery/gallery-1.jpg"/>
					</div>
        );
    }
}

export default HotelOverviewNav;
