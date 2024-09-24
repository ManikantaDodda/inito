import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./whyisit.css";

function WhyIsIt() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <section className="why-inito-is-smarter-way">
            <section className="why-measure-progesterone">
                <img alt="calender" className="blue-calendar" src="https://cdn.inito.com/inito_website/blue_calendar.png" />
                <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
                <p>
                    <strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br /><br />
                    If ovulation occurs, the levels of Progesterone and its urine metabolite PdG rise after a few days
                    and stay elevated. Sustained, elevated PdG levels after peak fertility indicate a successful ovulation.<br /><br />
                </p>
                <div className="doctor-review-source">
                    <span className="source">* Source: National Institutes of Health</span>
                    <span className="quote">“Inito is all that you need to give you the best chance of conception."</span>

                    <div className="doctor">
                        <img alt="doctor" className="doctor-image" src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" />
                        <div className="doctor-info">
                            <strong className="doctor-name">Dr. Rachel Wagner</strong>
                            <em className="doctor-qualification">MD</em>
                            <div>

                            </div>
                        </div></div></div>
            </section>

            <section className="blue-background">
                <h1>Why Inito is the smarter way to get <span className="image_as_underline">pregnant</span></h1>

                <section className="left-card">
                    <div className="text-content">
                        <h1>Get charts and actual <span className="image_as_underline">values</span> of your <span className="inline-image">hormones
                            <img alt="star" className="homepage-4-star" src="https://cdn.inito.com/inito_website/homepage_4_star.png" /></span></h1>
                        <div>
                            Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br /><br />
                            Inito measures real values of your hormones to personalize results to the unique you.
                        </div>
                        <a className="small-view-button" href="/buy-now">GET THE INITO KIT</a>
                    </div>
                    <picture className="card-image">
                        <source media="(min-width:769px)" srcset="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png" />
                        <source media="(max-width:768px)" srcset="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values.png" />
                        <img alt="whysmarter" src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png" />
                    </picture>
                </section>

                <section className="right-card">
                    <div className="text-content">
                        <h1>Inito tracks everything so you don’t have to</h1>
                        <div>
                            The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly
                            when you ovulate.<br /><br />
                            Our App notifies you for everything:
                            <ul className="blue-bullet-list">
                                <li>Your fertility levels</li>
                                <li>When to test on the right days</li>
                                <li>When you’ve successfully ovulated</li>
                                <li>And when to roll into bed!</li>
                            </ul>
                        </div>
                        <a className="button" href="/buy-now">Get the Inito Kit</a>
                    </div>

                    <picture className="card-image">
                        <source media="(min-width:769px)" srcset="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg" />
                        <source media="(max-width:768px)" srcset="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything.jpg" />
                        <img alt="smart" src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg" />
                    </picture>

                    <div className="fertility-card-carousel slick-initialized slick-slider">
                        <Slider {...settings} className="slick-track" style={{ opacity: 1, width: '2404px' }}>
                        <div>
                            <img
                                className="whyits_carousel1"
                                alt="smart"
                                src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg"
                                style={{
                                    width: '321px',
                                    position: 'relative',
                                    left : "-50px",
                                    right : "0px"
                                }}
                                   
                            />
                        </div>
                        <div>
                            <img
                             className="whyits_carousel2"
                                alt="smart"
                                src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/peak_fertility-21ac68f7f91f18f7e76b83c05e0eefec17e26037a254311312b59c3606bb952a.svg"
                                style={{
                                    width: '321px',
                                    position: 'relative',
                                    left:"-107px"
                                }}
                                />
                        </div>
                        <div>
                            <img
                             className="whyits_carousel3"
                                alt="smart"
                                src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/ovulation_confirmed-1af13f574905b54b0614d422f2161aebbdebd85d6cd39cb6ae2078706ba42642.svg"
                                style={{
                                    width: '321px',
                                    position: 'relative',
                                    left:"-157px"
                                }}
                                />
                        </div>
                        <div>
                            <img
                             className="whyits_carousel4"
                                alt="smart"
                                src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/low_fertility-51402a5906afd6879626e776235fbb7cbbe84d94529366f7266c51f4d3b406ab.svg"
                                style={{
                                    width: '321px',
                                    position: 'relative',
                                    left:"-215px"
                                }}
                                />
                        </div>
                    </Slider>
                    </div>
                </section>

            </section>
        </section>
    );
}

export default WhyIsIt;