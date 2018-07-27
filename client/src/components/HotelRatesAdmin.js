import React, {Component} from 'react';

import HotelRateAdmin from "./HotelRateAdmin";

class HotelRatesAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {hotelRates: this.props.hotelRates};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({hotelRates: nextProps.hotelRates});
    }

    deleteRates(index, hotelRates) {
        if(this.state.hotelRates.length <= 1){
            return;
        }

        this.setState({
            hotelRates: [...this.state.hotelRates.slice(0, index), ...this.state.hotelRates.slice(index + 1)]
        });

        this.props.onDeleteRate(hotelRates);
    }

    addRates(index) {
        let hotelRates = {
            title: 'Тип на стая',
            properties: [{key: 'Екстри', value: 'има/няма'}],
            url: 'https://res.cloudinary.com/df3euu0sz/image/upload/v1532481656/iomxrfbtffximwmeizta'
        }

        this.setState({
            hotelRates: [...this.state.hotelRates.slice(0, index + 1), hotelRates, ...this.state.hotelRates.slice(index + 1)]
        });

        this.props.onAddRate(hotelRates);
    }

    render() {
        let hotelRatesHtml = [];
        let self = this;
        for (let i = 0; i < this.state.hotelRates.length; i++) {
            hotelRatesHtml.push(
                <HotelRateAdmin key={i} onSubmit={this.props.onSubmit} hotelRates={this.state.hotelRates[i]}
                                addRates={function () {
                                    self.addRates(i);
                                }} deleteRates={function () {
                    self.deleteRates(i, self.state.hotelRates[i]);
                }}/>
            );
        }

        return (
            <section className="section section-no-background section-no-border m-0 p-0">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="">
                                <div className="row mb-4 portfolio-list" style={{paddingTop: '40px'}}>
                                    {hotelRatesHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default HotelRatesAdmin;

