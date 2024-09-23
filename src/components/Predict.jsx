import React from 'react';

function Predict() {
    return (
        <section class="predict-with-actual-data">
            <div class="content">
                <h1>Predict and confirm your ovulation with <span class="image_as_underline">actual</span> data</h1>
                <p class="description">
                    Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your
                    fertility hormones.<br/><br/>
                        If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
                </p>
                        <a class="button" href="/buy-now">
                            <span class="button__small-view">
                                GET THE INITO KIT
                            </span>
                            <span class="button__large-view">
                                Get the Inito Kit
                            </span>
                        </a>  </div>
                    <div class="iphone slick-initialized slick-slider">
                        <div class="slick-list draggable">
                            <div class="slick-track" style={{opacity: 1, width: "1020px"}}>
                                <img alt="chart" src="https://cdn.inito.com/inito_website/ovulation_confirmed.png" class="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1"
                                 style={{width: "286px", position: "relative", left: "0px", top: "0px", zIndex: 998,  transition: "opacity 500ms"}}/>
                                <img alt="chart" src="https://cdn.inito.com/inito_website/hormone_chart.png" class="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style={{width: "286px", position: "relative", left: "-340px", top: "0px", zIndex: 999,opacity: 1}}/>
                                <img alt="chart" src="https://cdn.inito.com/inito_website/cycle_day_view.png" class="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width: "286px", position: "relative", left: "-680px", top: "0px", zIndex: 998, opacity: 0, transition: "opacity 500ms"}}/>
                            </div>
                        </div>

                    </div>
            </section>
                        );
}

export default Predict;