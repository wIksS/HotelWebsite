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
				
				let propertiesRowsAttract = [];
				const attractOverview =[
					"Интернет в рамките на хотела.",
					"Минерален басейн (закрит, лечебен).",
					"Физиотерапия – два пъти на ден от Понеделник до Петък.",
					"Интервак.",
					"Електромагнит.",
					"Тонус апарат.",
					"Галваностат, солукс и кварц."
				];
				const animationDelay = ["0","300","600","900"];

        for(let i =0; i< 2;i++){
            let propertiesColsAttract = [];
            for(let j =0; j<4; j++){
								let propValueAttract = attractOverview[(i*4) + j];
								let propValueAnimationDelay = animationDelay[(i*4) + j];
                if(propValueAttract) {
									propertiesColsAttract.push(<li className="appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay={propValueAnimationDelay}><i className="fas fa-check"></i> {propValueAttract}</li>)
                }
            }

            propertiesRowsAttract.push(
                <div className="col-lg-6">
                    <ul className="list list-icons list-primary">
                        {propertiesColsAttract}
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
						<div className="tab-pane tab-pane-navigation active" id="tabsNavigation1">
							<h3 className="mt-4 mb-0 pb-0 text-uppercase">{HotelOverviewText}</h3>
							<div className="divider divider-primary divider-small mb-4 mt-0">
								<hr className="mt-2 mr-auto"/>
							</div>

							<div className="row">
								<div className="col-lg-8">
									{info}
								</div>
								<div className="col-lg-4">
									<div className="owl-carousel owl-theme nav-inside box-shadow-custom mt-4" data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">
										<div>
												<img alt="" className="img-fluid" src="img/demos/hotel/gallery/gallery-1.jpg" />
										</div>  
										<div>
												<img alt="" className="img-fluid" src="img/demos/hotel/gallery/gallery-2.jpg" />
										</div>
									</div>  
								</div> 
							</div>

							<div className="row">
								{propertiesRows}
							</div>

							<div className="row">
								<h4 className="mt-4 mb-4 pb-0 text-uppercase">Безплатни услуги</h4>
								<div className="row">
									{propertiesRowsAttract}
								</div>
							</div>
						</div>

				

					</div>
        );
    }
}

export default HotelOverview;
