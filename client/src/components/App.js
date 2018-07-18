import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HotelDescriptionWrapper from "../containers/HotelDescriptionWrapper";
import HotelDescriptionAdminWrapper from "../containers/HotelDescriptionAdminWrapper";
import HotelOverviewWrapper from "../containers/HotelOverviewWrapper";
import HotelOverviewAdminWrapper from "../containers/HotelOverviewAdminWrapper";

import '../index.css'

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount(){
        window.reactReady();
    }

    render() {
        let store = this.props.store;

        return (
            <div>
                <div className="header-top-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 col-address">
                                <i className="icon-location-pin icons text-color-primary"/>
                                <label>address</label>
                                <strong>1234 Street Name, Porto, Envato</strong>
                            </div>
                            <div className="col-sm-3 col-phone">
                                <i className="icon-phone icons text-color-primary"/>
                                <label>call us</label>
                                <strong>(800) 1234-5678</strong>
                            </div>
                            <div className="col-sm-4 col-share">
                                <i className="icon-share icons text-color-primary"/>
                                <label>follow us</label>
                                <ul className="social-icons">
                                    <li className="social-icons-instagram"><a href="http://www.instagram.com/"
                                                                              target="_blank" title="Instagram"><i
                                        className="fab fa-instagram"/> <span>Instagram</span></a></li>
                                    <li className="social-icons-facebook"><a href="http://www.facebook.com/"
                                                                             target="_blank" title="Facebook"><i
                                        className="fab fa-facebook-f"/> <span>Facebook</span></a></li>
                                    <li className="social-icons-twitter"><a href="http://www.twitter.com/"
                                                                            target="_blank" title="Twitter"><i
                                        className="fab fa-twitter"/> <span>Twitter</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <header id="header"
                            data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 220, 'stickyChangeLogo': false}">
                        <div className="header-body">
                            <div className="header-container container">
                                <div className="header-row">
                                    <div className="header-column">
                                        <div className="header-row">
                                            <div className="header-logo">
                                                <a href="demo-hotel.html">
                                                    <img alt="Porto" width={192} height={55}
                                                         src="img/demos/hotel/logo-hotel.png"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-column justify-content-end">
                                        <div className="header-row">
                                            <div className="header-nav header-nav-stripe">
                                                <div
                                                    className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                                    <nav className="collapse">
                                                        <ul className="nav nav-pills" id="mainNav">
                                                            <li>
                                                                <a className="nav-link active" href="demo-hotel.html">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="nav-link" href="demo-hotel-hotel.html">
                                                                    Hotel
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="nav-link"
                                                                   href="demo-hotel-rooms-rates.html">
                                                                    Rooms &amp; Rates
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="nav-link"
                                                                   href="demo-hotel-special-offers.html">
                                                                    Special Offers
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="nav-link" href="demo-hotel-location.html">
                                                                    Location
                                                                </a>
                                                            </li>
                                                            <li className="dropdown dropdown-full-color dropdown-primary dropdown-mega dropdown-mega-book-now"
                                                                id="headerBookNow">
                                                                <a className="nav-link dropdown-toggle"
                                                                   href="demo-hotel-book.html">
                                                                    Book Now
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <div className="dropdown-mega-content">
                                                                            <form id="bookFormHeader"
                                                                                  action="demo-hotel-book.html"
                                                                                  method="POST">
                                                                                <div className="form-row">
                                                                                    <div className="form-group col">
                                                                                        <div
                                                                                            className="form-control-custom form-control-datepicker-custom">
                                                                                            <input type="text"
                                                                                                   defaultValue
                                                                                                   className="form-control text-uppercase text-2"
                                                                                                   data-msg-required="This field is required."
                                                                                                   placeholder="Arrival"
                                                                                                   name="bookNowArrivalHeader"
                                                                                                   id="bookNowArrivalHeader"
                                                                                                   required/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-row">
                                                                                    <div className="form-group col">
                                                                                        <div
                                                                                            className="form-control-custom form-control-datepicker-custom">
                                                                                            <input type="text"
                                                                                                   defaultValue
                                                                                                   className="form-control text-uppercase text-2"
                                                                                                   data-msg-required="This field is required."
                                                                                                   placeholder="Departure"
                                                                                                   name="bookNowDepartureHeader"
                                                                                                   id="bookNowDepartureHeader"
                                                                                                   required/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-row">
                                                                                    <div
                                                                                        className="form-group col-lg-6">
                                                                                        <div
                                                                                            className="form-control-custom">
                                                                                            <select
                                                                                                className="form-control text-uppercase text-2"
                                                                                                name="bookNowAdults"
                                                                                                data-msg-required="This field is required."
                                                                                                id="bookNowAdults"
                                                                                                required>
                                                                                                <option value>Adults
                                                                                                </option>
                                                                                                <option value={1}>1
                                                                                                </option>
                                                                                                <option value={2}>2
                                                                                                </option>
                                                                                                <option value={3}>3
                                                                                                </option>
                                                                                                <option value={4}>4
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group col-lg-6">
                                                                                        <div
                                                                                            className="form-control-custom">
                                                                                            <select
                                                                                                className="form-control text-uppercase text-2"
                                                                                                name="bookNowKids"
                                                                                                data-msg-required="This field is required."
                                                                                                id="bookNowKids"
                                                                                                required>
                                                                                                <option value>Kids
                                                                                                </option>
                                                                                                <option value={1}>0
                                                                                                </option>
                                                                                                <option value={1}>1
                                                                                                </option>
                                                                                                <option value={2}>2
                                                                                                </option>
                                                                                                <option value={3}>3
                                                                                                </option>
                                                                                                <option value={4}>4
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-row">
                                                                                    <div
                                                                                        className="form-group col mb-0">
                                                                                        <input type="submit"
                                                                                               defaultValue="Check availability"
                                                                                               className="btn btn-secondary btn-lg btn-block text-uppercase text-2"/>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <button className="btn header-btn-collapse-nav" data-toggle="collapse"
                                                        data-target=".header-nav-main nav">
                                                    <i className="fas fa-bars"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div role="main" className="main">
                        <div className="slider-container rev_slider_wrapper" style={{height: 530}}>
                            <div id="revolutionSlider" className="slider rev_slider manual" data-version="5.4.7">
                                <ul>
                                    <li data-transition="boxfade">
                                        <img src="img/demos/hotel/slides/slide-hotel-1.jpg" alt
                                             data-bgposition="center bottom" data-bgfit="cover"
                                             data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg"
                                             data-no-retina/>
                                    </li>
                                    <li data-transition="boxfade">
                                        <img src="img/demos/hotel/slides/slide-hotel-2.jpg" alt
                                             data-bgposition="center bottom" data-bgfit="cover"
                                             data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg"
                                             data-no-retina/>
                                    </li>
                                    <li data-transition="boxfade">
                                        <img src="img/demos/hotel/slides/slide-hotel-3.jpg" alt
                                             data-bgposition="center bottom" data-bgfit="cover"
                                             data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg"
                                             data-no-retina/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <section className="section section-no-background section-no-border m-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8" id="hotel-description">
                                        <Provider store={store}>
                                            <BrowserRouter>
                                                <Switch>
                                                    <Route path='/administration' component={HotelDescriptionAdminWrapper}/>
                                                    <Route path='/' component={HotelDescriptionWrapper}/>
                                                </Switch>
                                            </BrowserRouter>
                                        </Provider>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="micro-map box-shadow-custom clearfix">
                                            <div className="micro-map-map">
                                                <div id="googleMapsMicro" className="google-map m-0"
                                                     style={{height: 280}}/>
                                            </div>
                                            <div className="micro-map-info">
                                                <div className="micro-map-info-detail">
                                                    <i className="icon-location-pin icons text-color-primary"/>
                                                    <label>address</label>
                                                    <strong>1234 Street Name, Porto, Envato</strong>
                                                    <a href="demo-hotel-location.html" title>(View Location)</a>
                                                </div>
                                                <div className="micro-map-info-detail">
                                                    <i className="icon-phone icons text-color-primary"/>
                                                    <label>call us</label>
                                                    <strong>(800) 1234-5678</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="parallax section section-parallax section-center m-0 section-overlay-opacity section-overlay-opacity-scale-4"
                            data-plugin-parallax data-plugin-options="{'speed': 1.5}"
                            data-image-src="img/demos/hotel/parallax-hotel.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h3 className="mb-1 mt-0 text-light text-uppercase">Enjoy the best of Porto</h3>
                                        <p className="lead text-light mb-4">Make your reservation right now with the
                                            best price</p>
                                        <a className="btn btn-primary btn-lg text-2 text-uppercase mt-2"
                                           href="demo-hotel-book.html">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section section-no-background section-no-border m-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="owl-carousel owl-theme nav-inside box-shadow-custom mt-4"
                                             data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">
                                            <div>
                                                <img alt className="img-fluid"
                                                     src="img/demos/hotel/gallery/gallery-1.jpg"/>
                                            </div>
                                            <div>
                                                <img alt className="img-fluid"
                                                     src="img/demos/hotel/gallery/gallery-2.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8" id="hotel-overview">
                                        <Provider store={store}>
                                            <BrowserRouter>
                                                <Switch>
                                                    <Route path='/administration' component={HotelOverviewAdminWrapper}/>
                                                    <Route path='/' component={HotelOverviewWrapper}/>
                                                </Switch>
                                            </BrowserRouter>
                                        </Provider>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="section section-text-light section-background section-center section-overlay-opacity section-overlay-opacity-scale-4 m-0"
                            style={{backgroundImage: 'url(img/demos/hotel/video-cover-bg-1.jpg)'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12" style={{height: 360}}>
                                        <a href="https://vimeo.com/178747566" className="play-video-custom"><img
                                            src="img/demos/hotel/play-icon.png" className="img-fluid" width={90}
                                            height={90}/></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section section-primary section-no-border m-0" data-plugin-parallax
                                 data-plugin-options="{'speed': 6}"
                                 data-image-src="img/demos/hotel/parallax-hotel-map.png">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h3 className="mt-4 mb-0 pb-0 text-light text-uppercase">Guest Reviews</h3>
                                        <div
                                            className="divider divider-light divider-small divider-small-center mb-4 mt-0">
                                            <hr className="mt-2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div
                                            className="testimonial testimonial-style-3 testimonial-style-custom appear-animation"
                                            data-appear-animation="fadeInUp" data-appear-animation-delay={0}>
                                            <blockquote className="box-shadow-custom">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                                                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                                                    potenti. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.</p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down mx-auto"/>
                                            <div className="testimonial-author">
                                                <p><strong>John Smith</strong><span>Porto Advisor</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div
                                            className="testimonial testimonial-style-3 testimonial-style-custom appear-animation"
                                            data-appear-animation="fadeInUp" data-appear-animation-delay={300}>
                                            <blockquote className="box-shadow-custom">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                                                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                                                    potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Sociis natoque penatibus et magnis dis parturient montes.</p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down mx-auto"/>
                                            <div className="testimonial-author">
                                                <p><strong>Brad Smith</strong><span>Porto Advisor</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div
                                            className="testimonial testimonial-style-3 testimonial-style-custom appear-animation"
                                            data-appear-animation="fadeInUp" data-appear-animation-delay={600}>
                                            <blockquote className="box-shadow-custom">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                                                    risus porta, tincidunt turpis at, interdum tortor. Suspendisse
                                                    potenti. Lorem ipsum dolor sit amet.</p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down mx-auto"/>
                                            <div className="testimonial-author">
                                                <p><strong>Paul Smith</strong><span>Porto Advisor</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section section-no-background section-no-border m-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h3 className="mb-0 pb-0 text-uppercase">Special Offers</h3>
                                        <div
                                            className="divider divider-primary divider-small divider-small-center mb-4 mt-0">
                                            <hr className="mt-2"/>
                                        </div>
                                        <div className="row pt-4">
                                            <div className="col-lg-6">
                                                <a href="#" className="text-decoration-none">
                          <span
                              className="thumb-info thumb-info-side-image thumb-info-side-image-custom thumb-info-no-zoom box-shadow-custom thumb-info-no-zoom thumb-info-side-image-custom-highlight appear-animation"
                              data-appear-animation="fadeIn" data-appear-animation-delay={0}>
                            <span className="thumb-info-side-image-wrapper">
                              <img alt className="img-fluid" src="img/demos/hotel/gallery/gallery-4.jpg"/>
                            </span>
                            <span className="thumb-info-caption">
                              <span className="thumb-info-caption-text">
                                <h4 className="text-uppercase">Porto Special</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti...</p>
                              </span>
                            </span>
                          </span>
                                                </a>
                                            </div>
                                            <div className="col-lg-6">
                                                <a href="#" className="text-decoration-none">
                          <span
                              className="thumb-info thumb-info-side-image thumb-info-side-image-custom thumb-info-no-zoom box-shadow-custom appear-animation"
                              data-appear-animation="fadeIn" data-appear-animation-delay={300}>
                            <span className="thumb-info-side-image-wrapper">
                              <img alt className="img-fluid" style={{maxWidth: 225}}
                                   src="img/demos/hotel/gallery/gallery-2.jpg"/>
                            </span>
                            <span className="thumb-info-caption">
                              <span className="thumb-info-caption-text">
                                <h4 className="text-uppercase">Plan Ahead</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                              </span>
                            </span>
                          </span>
                                                </a>
                                                <a href="#" className="text-decoration-none">
                          <span
                              className="thumb-info thumb-info-side-image thumb-info-side-image-custom thumb-info-no-zoom box-shadow-custom appear-animation"
                              data-appear-animation="fadeIn" data-appear-animation-delay={600}>
                            <span className="thumb-info-side-image-wrapper">
                              <img alt className="img-fluid" style={{maxWidth: 225}}
                                   src="img/demos/hotel/gallery/gallery-3.jpg"/>
                            </span>
                            <span className="thumb-info-caption">
                              <span className="thumb-info-caption-text">
                                <h4 className="text-uppercase">Valentine's Day</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                              </span>
                            </span>
                          </span>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="btn btn-primary btn-lg text-2 text-uppercase mt-2"
                                           href="demo-hotel-special-offers.html">View All</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section section-tertiary section-no-border m-0">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-3">
                                        <p className="lead p-0 m-0 text-3 text-uppercase">Sign Up Now For</p>
                                        <h4 className="mb-1 mt-0 text-light text-uppercase">Exclusive special
                                            offers:</h4>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="alert alert-success d-none" id="newsletterSuccess">
                                            <strong>Success!</strong> You've been added to our email list.
                                        </div>
                                        <div className="alert alert-danger d-none" id="newsletterError"/>
                                        <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
                                            <div className="form-row">
                                                <div className="form-group col-md-5">
                                                    <div className="form-control-custom">
                                                        <input type="text"
                                                               className="form-control form-control-lg text-uppercase text-2 mt-2"
                                                               id="newsletterName" placeholder="Full Name *" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <div className="form-control-custom">
                                                        <input type="email"
                                                               className="form-control form-control-lg text-uppercase text-2 mt-2"
                                                               id="newsletterEmail" placeholder="Email Address *"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-3">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-lg btn-block text-2 text-uppercase mt-2">
                                                        Subscribe Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer id="footer" className="color color-primary mt-0 pt-5 pb-5">
                            <div className="container">
                                <div className="row pt-3 pb-3">
                                    <div className="col-lg-3 mb-0">
                                        <img alt="Porto" className="img-fluid logo" style={{maxWidth: 145}}
                                             src="img/demos/hotel/logo-hotel-footer.png"/>
                                    </div>
                                    <div className="col-lg-3 mb-0">
                                        <div className="footer-info">
                                            <i className="icon-location-pin icons"/>
                                            <label>address</label>
                                            <strong>1234 Street Name, Porto, Envato</strong>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mb-0">
                                        <div className="footer-info">
                                            <i className="icon-phone icons"/>
                                            <label>call us</label>
                                            <strong>(800) 1234-5678</strong>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-0">
                                        <div className="footer-info">
                                            <i className="icon-share icons"/>
                                            <label>follow us</label>
                                            <ul className="social-icons">
                                                <li className="social-icons-instagram"><a
                                                    href="http://www.instagram.com/" target="_blank"
                                                    title="Instagram"><i className="fab fa-instagram"/> Instagram</a>
                                                </li>
                                                <li className="social-icons-facebook"><a href="http://www.facebook.com/"
                                                                                         target="_blank"
                                                                                         title="Facebook"><i
                                                    className="fab fa-facebook-f"/> Facebook</a></li>
                                                <li className="social-icons-twitter"><a href="http://www.twitter.com/"
                                                                                        target="_blank" title="Twitter"><i
                                                    className="fab fa-twitter"/> Twitter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <nav id="sub-menu">
                                    <ul>
                                        <li>
                                            <a href="demo-hotel-hotel.html">
                                                Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-hotel-rooms-rates.html">
                                                Rooms &amp; Rates
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-hotel-special-offers.html">
                                                Special Offers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-hotel-location.html">
                                                Location
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-6 text-right">
                                <p>© Copyright 2018. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
