import React, {Component} from 'react';

import '../index.css'

class Hotel extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="root">
                <div>
                    <div classname="header-top-custom">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-sm-5 col-address">
                                    <i classname="icon-location-pin icons text-color-primary"/>
                                    <label>address</label>
                                    <strong>1234 Street Name, Porto, Envato</strong>
                                </div>
                                <div classname="col-sm-3 col-phone">
                                    <i classname="icon-phone icons text-color-primary"/>
                                    <label>call us</label>
                                    <strong>(800) 1234-5678</strong>
                                </div>
                                <div classname="col-sm-4 col-share">
                                    <i classname="icon-share icons text-color-primary"/>
                                    <label>follow us</label>
                                    <ul classname="social-icons">
                                        <li classname="social-icons-instagram"><a href="http://www.instagram.com/"
                                                                                  target="_blank" title="Instagram"><i
                                            classname="fab fa-instagram"/> <span>Instagram</span></a>
                                        </li>
                                        <li classname="social-icons-facebook"><a href="http://www.facebook.com/"
                                                                                 target="_blank" title="Facebook"><i
                                            classname="fab fa-facebook-f"/> <span>Facebook</span></a>
                                        </li>
                                        <li classname="social-icons-twitter"><a href="http://www.twitter.com/"
                                                                                target="_blank" title="Twitter"><i
                                            classname="fab fa-twitter"/>
                                            <span>Twitter</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classname="body">
                        <header id="header"
                                data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 220, 'stickyChangeLogo': false}">
                            <div classname="header-body">
                                <div classname="header-container container">
                                    <div classname="header-row">
                                        <div classname="header-column">
                                            <div classname="header-row">
                                                <div classname="header-logo">
                                                    <a href="demo-hotel.html">
                                                        <img alt="Porto" width={192} height={55}
                                                             src="img/demos/hotel/logo-hotel.png"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="header-column justify-content-end">
                                            <div classname="header-row">
                                                <div classname="header-nav header-nav-stripe">
                                                    <div
                                                        classname="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                                        <nav classname="collapse">
                                                            <ul classname="nav nav-pills" id="mainNav">
                                                                <li>
                                                                    <a classname="nav-link" href="demo-hotel.html">
                                                                        Home
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a classname="nav-link active"
                                                                       href="demo-hotel-hotel.html">
                                                                        Hotel
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a classname="nav-link"
                                                                       href="demo-hotel-rooms-rates.html">
                                                                        Rooms &amp; Rates
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a classname="nav-link"
                                                                       href="demo-hotel-special-offers.html">
                                                                        Special Offers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a classname="nav-link"
                                                                       href="demo-hotel-location.html">
                                                                        Location
                                                                    </a>
                                                                </li>
                                                                <li classname="dropdown dropdown-full-color dropdown-primary dropdown-mega dropdown-mega-book-now"
                                                                    id="headerBookNow">
                                                                    <a classname="nav-link dropdown-toggle"
                                                                       href="demo-hotel-book.html">
                                                                        Book Now
                                                                    </a>
                                                                    <ul classname="dropdown-menu">
                                                                        <li>
                                                                            <div classname="dropdown-mega-content">
                                                                                <form id="bookFormHeader"
                                                                                      action="demo-hotel-book.html"
                                                                                      method="POST">
                                                                                    <div classname="form-row">
                                                                                        <div classname="form-group col">
                                                                                            <div
                                                                                                classname="form-control-custom form-control-datepicker-custom">
                                                                                                <input type="text"
                                                                                                       defaultValue
                                                                                                       classname="form-control text-uppercase text-2"
                                                                                                       data-msg-required="This field is required."
                                                                                                       placeholder="Arrival"
                                                                                                       name="bookNowArrivalHeader"
                                                                                                       id="bookNowArrivalHeader"
                                                                                                       required/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div classname="form-row">
                                                                                        <div classname="form-group col">
                                                                                            <div
                                                                                                classname="form-control-custom form-control-datepicker-custom">
                                                                                                <input type="text"
                                                                                                       defaultValue
                                                                                                       classname="form-control text-uppercase text-2"
                                                                                                       data-msg-required="This field is required."
                                                                                                       placeholder="Departure"
                                                                                                       name="bookNowDepartureHeader"
                                                                                                       id="bookNowDepartureHeader"
                                                                                                       required/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div classname="form-row">
                                                                                        <div
                                                                                            classname="form-group col-lg-6">
                                                                                            <div
                                                                                                classname="form-control-custom">
                                                                                                <select
                                                                                                    classname="form-control text-uppercase text-2"
                                                                                                    name="bookNowAdults"
                                                                                                    data-msg-required="This field is required."
                                                                                                    id="bookNowAdults"
                                                                                                    required>
                                                                                                    <option value>
                                                                                                        Adults
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
                                                                                            classname="form-group col-lg-6">
                                                                                            <div
                                                                                                classname="form-control-custom">
                                                                                                <select
                                                                                                    classname="form-control text-uppercase text-2"
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
                                                                                    <div classname="form-row">
                                                                                        <div
                                                                                            classname="form-group col mb-0">
                                                                                            <input type="submit"
                                                                                                   defaultValue="Check availability"
                                                                                                   classname="btn btn-secondary btn-lg btn-block text-uppercase text-2"/>
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
                                                    <button classname="btn header-btn-collapse-nav"
                                                            data-toggle="collapse" data-target=".header-nav-main nav">
                                                        <i classname="fas fa-bars"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div role="main" classname="main">
                            <section
                                classname="page-header page-header-custom-background parallax section section-parallax section-center m-0 section-overlay-opacity section-overlay-opacity-scale-3"
                                data-plugin-parallax data-plugin-options="{'speed': 1.5}"
                                data-image-src="img/demos/hotel/parallax-hotel.jpg">
                                <div classname="container">
                                    <div classname="row">
                                        <div classname="col-lg-12 text-center">
                                            <h1 classname="font-weight-bold text-light text-uppercase">Hotel
                                                <span>Enjoy the best of Porto</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section classname="section section-no-background section-no-border m-0">
                                <div classname="container">
                                    <div classname="row mb-4">
                                        <div classname="col-lg-3">
                                            <div classname="tabs tabs-vertical tabs-left tabs-navigation">
                                                <ul classname="nav nav-tabs col-sm-3">
                                                    <li classname="nav-item active">
                                                        <a classname="nav-link" href="#tabsNavigation1"
                                                           data-toggle="tab">
                                                            Overview</a>
                                                    </li>
                                                    <li classname="nav-item">
                                                        <a classname="nav-link" href="#tabsNavigation2"
                                                           data-toggle="tab">
                                                            Services</a>
                                                    </li>
                                                    <li classname="nav-item">
                                                        <a classname="nav-link" href="#tabsNavigation3"
                                                           data-toggle="tab">
                                                            FAQ's</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="demo-hotel-special-offers.html"
                                               classname="mt-4 mb-4 appear-animation" data-appear-animation="fadeIn"
                                               data-appear-animation-delay={0} title>
                                                <img alt classname="img-fluid mt-2 mt-lg-4 mb-4"
                                                     src="img/demos/hotel/banner-hotel.jpg"/>
                                            </a>
                                        </div>
                                        <div classname="col-lg-9" id="about-hotel">
                                            <div classname="tab-pane tab-pane-navigation active" id="tabsNavigation1">
                                                <h3 classname="mb-0 pb-0 text-uppercase">Porto Hotel</h3>
                                                <div classname="divider divider-primary divider-small mb-4 mt-0">
                                                    <hr classname="mt-2 mr-auto"/>
                                                </div>
                                                <div classname="row">
                                                    <div classname="col-lg-8">
                                                        <p classname="lead">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer
                                                            ultrices malesuada ante quis pharetra. Nullam non bibendum
                                                            dolor. Ut vel
                                                            turpis accumsan.</p>
                                                        <p classname="mt-4">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer
                                                            ultrices malesuada ante quis pharetra. Nullam non bibendum
                                                            dolor. Ut vel
                                                            turpis accumsan, efficitur dolor fermentum, tincidunt metus
                                                            ut
                                                            vel turpis
                                                            accumsan, efficitur dolor fermentum, tincidunt metus. Etiam
                                                            ut.</p>
                                                    </div>
                                                    <div classname="col-lg-4">
                                                        <div
                                                            classname="owl-carousel owl-theme nav-inside box-shadow-custom mt-4"
                                                            data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">
                                                            <div>
                                                                <img alt classname="img-fluid"
                                                                     src="img/demos/hotel/gallery/gallery-1.jpg"/>
                                                            </div>
                                                            <div>
                                                                <img alt classname="img-fluid"
                                                                     src="img/demos/hotel/gallery/gallery-2.jpg"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="row mt-4">
                                                    <div classname="col-lg-4">
                                                        <ul classname="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
                                                            <li><i classname="fas fa-check"/> 24 Rooms, 4 Luxury suites
                                                            </li>
                                                            <li><i classname="fas fa-check"/> Fitness center</li>
                                                            <li><i classname="fas fa-check"/> Airport transporation</li>
                                                        </ul>
                                                    </div>
                                                    <div classname="col-lg-4">
                                                        <ul classname="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
                                                            <li><i classname="fas fa-check"/> 24-Hour In-Room Dining
                                                            </li>
                                                            <li><i classname="fas fa-check"/> Cocktail Bar</li>
                                                            <li><i classname="fas fa-check"/> Dog Friendly - Pets Stay
                                                                Free
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div classname="col-lg-4">
                                                        <ul classname="list list-icons list-primary list-borders text-uppercase text-color-dark text-2">
                                                            <li><i classname="fas fa-check"/> Valet car service</li>
                                                            <li><i classname="fas fa-check"/> Pool</li>
                                                            <li><i classname="fas fa-check"/> Free Wi-Fi</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h4 classname="mt-4 mb-4 pb-0 text-uppercase">Complimentary
                                                    Attractions</h4>
                                                <div classname="row">
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/> Lorem ipsum
                                                                dolor sit amet, consectetur adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={900}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/>Consectetur
                                                                adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div classname="tab-pane tab-pane-navigation" id="tabsNavigation2">
                                                <h3 classname="mb-0 pb-0 text-uppercase">Services &amp; Amenities</h3>
                                                <div classname="divider divider-primary divider-small mb-4 mt-0">
                                                    <hr classname="mt-2 mr-auto"/>
                                                </div>
                                                <div classname="row">
                                                    <div classname="col">
                                                        <p classname="lead">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer
                                                            ultrices malesuada ante quis pharetra. Nullam non bibendum
                                                            dolor. Ut vel
                                                            turpis accumsan.</p>
                                                        <p classname="mt-4">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer
                                                            ultrices malesuada ante quis pharetra. Nullam non bibendum
                                                            dolor. Ut vel
                                                            turpis accumsan, efficitur dolor fermentum, tincidunt metus
                                                            ut
                                                            vel turpis
                                                            accumsan, efficitur dolor fermentum, tincidunt metus. Etiam
                                                            ut.</p>
                                                    </div>
                                                </div>
                                                <h4 classname="mt-4 mb-4 pb-0 text-uppercase">Porto Hotel Services</h4>
                                                <div classname="row">
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/> Lorem ipsum
                                                                dolor sit amet, consectetur adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={900}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/>Consectetur
                                                                adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h4 classname="mt-4 mb-4 pb-0 text-uppercase">Amenities</h4>
                                                <div classname="row">
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/> Lorem ipsum
                                                                dolor sit amet, consectetur adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={900}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div classname="col-lg-6">
                                                        <ul classname="list list-icons list-primary">
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={0}><i
                                                                classname="fas fa-check"/>Consectetur
                                                                adipiscing elit.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={300}><i
                                                                classname="fas fa-check"/> Fusce sit
                                                                amet orci quis arcu vestibulum vestibulum.
                                                            </li>
                                                            <li classname="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay={600}><i
                                                                classname="fas fa-check"/> Lorem
                                                                dolor sit amet, consectetur adipiscing.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div classname="tab-pane tab-pane-navigation" id="tabsNavigation3">
                                                <h3 classname="mb-0 pb-0 text-uppercase">Frequently Asked Questions</h3>
                                                <div classname="divider divider-primary divider-small mb-4 mt-0">
                                                    <hr classname="mt-2 mr-auto"/>
                                                </div>
                                                <div classname="row">
                                                    <div classname="col">
                                                        <p classname="lead">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Nullam
                                                            non bibendum dolor. Ut vel turpis accumsan.</p>
                                                        <p classname="mt-4">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer
                                                            ultrices malesuada ante quis pharetra. Nullam non bibendum
                                                            dolor. Ut vel
                                                            turpis accumsan, efficitur dolor fermentum, tincidunt metus
                                                            ut
                                                            vel turpis
                                                            accumsan.</p>
                                                    </div>
                                                </div>
                                                <div classname="toggle toggle-primary" data-plugin-toggle>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet vague iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet viaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet varius iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet vague iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet viaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet varius iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet vague iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet viaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.</p>
                                                    </section>
                                                    <section classname="toggle">
                                                        <label>Curabitur eget leo at velit imperdiet varius iaculis
                                                            vitaes?</label>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Curabitur eget leo
                                                            at velit imperdiet varius. In eu ipsum vitae velit congue
                                                            iaculis vitae at
                                                            risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                                                            eget massa.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer
                                                            fringilla,
                                                            orci sit amet posuere auctor, orci eros pellentesque odio,
                                                            nec
                                                            pellentesque
                                                            erat ligula nec massa. Aenean consequat lorem ut felis
                                                            ullamcorper posuere
                                                            gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                                                            vehicula eu,
                                                            consequat et lacus. Duis et purus ipsum. In auctor mattis
                                                            ipsum
                                                            id molestie.
                                                            Donec risus nulla, fringilla a rhoncus vitae, semper a
                                                            massa.
                                                            Vivamus
                                                            ullamcorper, enim sit amet consequat laoreet, tortor tortor
                                                            dictum urna, ut
                                                            egestas urna ipsum nec libero. Nulla justo leo, molestie vel
                                                            tempor nec,
                                                            egestas at massa. Aenean pulvinar, felis porttitor iaculis
                                                            pulvinar, odio
                                                            orci sodales odio, ac pulvinar felis quam sit.</p>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section classname="section section-tertiary section-no-border m-0">
                                <div classname="container">
                                    <div classname="row align-items-center">
                                        <div classname="col-lg-3">
                                            <p classname="lead p-0 m-0 text-3 text-uppercase">Sign Up Now For</p>
                                            <h4 classname="mb-1 mt-0 text-light text-uppercase">Exclusive special
                                                offers:</h4>
                                        </div>
                                        <div classname="col-lg-9">
                                            <div classname="alert alert-success d-none" id="newsletterSuccess">
                                                <strong>Success!</strong> You've been added to our email list.
                                            </div>
                                            <div classname="alert alert-danger d-none" id="newsletterError"/>
                                            <form id="newsletterForm" action="php/newsletter-subscribe.php"
                                                  method="POST">
                                                <div classname="form-row">
                                                    <div classname="form-group col-md-5">
                                                        <div classname="form-control-custom">
                                                            <input type="text"
                                                                   classname="form-control form-control-lg text-uppercase text-2 mt-2"
                                                                   id="newsletterName" placeholder="Full Name *"
                                                                   required/>
                                                        </div>
                                                    </div>
                                                    <div classname="form-group col-md-4">
                                                        <div classname="form-control-custom">
                                                            <input type="email"
                                                                   classname="form-control form-control-lg text-uppercase text-2 mt-2"
                                                                   id="newsletterEmail" placeholder="Email Address *"
                                                                   required/>
                                                        </div>
                                                    </div>
                                                    <div classname="form-group col-md-3">
                                                        <button type="submit"
                                                                classname="btn btn-primary btn-lg btn-block text-2 text-uppercase mt-2">
                                                            Subscribe Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <footer id="footer" classname="color color-primary mt-0 pt-5 pb-5">
                                <div classname="container">
                                    <div classname="row pt-3 pb-3">
                                        <div classname="col-lg-3 mb-0">
                                            <img alt="Porto" classname="img-fluid logo" style={{maxWidth: 145}}
                                                 src="img/demos/hotel/logo-hotel-footer.png"/>
                                        </div>
                                        <div classname="col-lg-3 mb-0">
                                            <div classname="footer-info">
                                                <i classname="icon-location-pin icons"/>
                                                <label>address</label>
                                                <strong>1234 Street Name, Porto, Envato</strong>
                                            </div>
                                        </div>
                                        <div classname="col-lg-2 mb-0">
                                            <div classname="footer-info">
                                                <i classname="icon-phone icons"/>
                                                <label>call us</label>
                                                <strong>(800) 1234-5678</strong>
                                            </div>
                                        </div>
                                        <div classname="col-lg-4 mb-0">
                                            <div classname="footer-info">
                                                <i classname="icon-share icons"/>
                                                <label>follow us</label>
                                                <ul classname="social-icons">
                                                    <li classname="social-icons-instagram"><a
                                                        href="http://www.instagram.com/" target="_blank"
                                                        title="Instagram"><i classname="fab fa-instagram"/>
                                                        Instagram</a></li>
                                                    <li classname="social-icons-facebook"><a
                                                        href="http://www.facebook.com/" target="_blank"
                                                        title="Facebook"><i classname="fab fa-facebook-f"/> Facebook</a>
                                                    </li>
                                                    <li classname="social-icons-twitter"><a
                                                        href="http://www.twitter.com/" target="_blank"
                                                        title="Twitter"><i classname="fab fa-twitter"/>
                                                        Twitter</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <div classname="footer-copyright">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-lg-6">
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
                                <div classname="col-lg-6 text-right">
                                    <p>© Copyright 2018. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hotel;
