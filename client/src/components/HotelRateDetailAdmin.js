import React, {Component} from 'react';

import '../index.css'
import {inputChangeHandler, submitHandler} from "../helpers/inputHelper";

class HotelRateDetail extends Component {
    constructor(props) {
        super(props);
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {};
        }
        this.state = {
            title: hotelRate.title,
            properties: hotelRate.properties,
            url: hotelRate.url,
            description: hotelRate.description,
            images:hotelRate.images,
            _id:hotelRate._id
        };

        this.handleInputChange = inputChangeHandler.bind(this);
        this.handleSubmit = submitHandler.bind(this);
        this.addImage = this.addImage.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let hotelRate = nextProps.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {};
        }
        this.setState(Object.assign({}, hotelRate),()=>{
            this.addImageWidgets();
        });
    }

    componentDidMount() {
        this.addImageWidgets();
    }

    addImageWidgets(){
        let self = this;
        if (this.state.images) {

            for (let i = 1; i < this.state.images.length; i++) {
                window.runImageUpload(i);

                window.imageEvent[i].initEvent('imageReady' + i, true, true);

                window.addEventListener('imageReady' + i, function (e) {
                    let images = self.state.images;
                    images[i] = 'https://res.cloudinary.com/df3euu0sz/image/upload/v1532481656/' + e.data[0].public_id;
                    self.setState({
                        images: images
                    })
                    console.log(e);
                }, false);
            }
        }
    }

    addImage(index){
        debugger;
        let images = this.state.images;
        images.splice(index+1, 0, 'https://res.cloudinary.com/df3euu0sz/image/upload/v1532481656/iomxrfbtffximwmeizta');

        this.setState({
            images:images
        },()=>{
            this.addImageWidgets();
        });
    }

    deleteImage(index){

        let images = this.state.images;
        images= [...images.slice(0, index), ...images.slice(index + 1)]

        this.setState({
            images:images
        },()=>{
            this.addImageWidgets();
        });
    }

    render() {
        let hotelRate = this.props.hotelRates[this.props.match.params.id];
        if (!hotelRate) {
            hotelRate = {properties: []};
        }

        let propertiesHtml = [];
        for (let i = 0; i < hotelRate.properties.length; i++) {
            propertiesHtml.push(<li key={i}><label>{hotelRate.properties[i].key}</label>
                <span>{hotelRate.properties[i].value}</span></li>);
        }

        let imagesHtml = [];
        let images = this.state.images;
        if (images) {
            let self = this;
            for (let i = 0; i < images.length; i++) {
                if (i > 0) {
                    imagesHtml.push(<div>
                        <div>
                            <a id={"upload_widget_opener" + i}>
                                      <span
                                          className="thumb-info thumb-info-centered-info thumb-info-no-borders">
                                        <span className="thumb-info-wrapper">
                                          <img src={images[i]} className="img-fluid" alt/>
                                            <span className="thumb-info-title">
                                             <span className="thumb-info-inner">Качи снимка</span>
                                          </span>
                                        </span>
                                      </span>
                            </a>
                        </div>
                        <br/>
                        <div>
                            <img src="img/ok.png" title="Добави нова снимка"
                                 style={{marginRight: '10px', marginLeft: '30px'}} width="40px"
                                 onClick={function () {
                                     self.addImage(i)
                                 }}
                            />

                            <img src="img/delete.png" title="Изтрий типа стая" width="40px"
                                 onClick={function () {
                                     self.deleteImage(i)
                                 }}
                            />
                        </div>
                        <br/>
                    </div>);
                }
                else{
                    imagesHtml.push(<div>
                        <div>
                            <img src={images[i]} height='250px'/>
                        </div>
                        <br/>
                        <div>
                            <img src="img/ok.png"  title="Добави нова снимка"
                                 style={{marginRight: '10px', marginLeft: '30px'}} width="40px"
                                 onClick={function () {
                                     self.addImage(i)
                                 }}
                            />
                        </div>
                        <br/>
                    </div>);
                }
            }
        }

        return (
            <section className="section section-no-background section-no-border m-0 p-0">
                <form onSubmit={this.handleSubmit}>

                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="mt-4 pt-4 mb-0 pb-0 text-uppercase">{hotelRate.title}</h3>
                            <div className="divider divider-primary divider-small mb-4 mt-0">
                                <hr className="mt-2 mr-auto"/>
                            </div>
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="mt-4 lead">
                                            <textarea name={'description'}
                                                      cols="70" rows="8"
                                                      className="form-control"
                                                      onChange={this.handleInputChange}
                                                      value={this.state.description}/>
                                    </p>
                                    <div className="room-suite-info">
                                        <ul>
                                            {propertiesHtml}
                                            <li>
                                                <br/>
                                                <button type="submit"
                                                        className="btn btn-primary pull-right">Запиши
                                                    информацията
                                                </button>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div>
                                        {imagesHtml}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </section>
        );
    }
}

export default HotelRateDetail;
