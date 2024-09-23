import React, { useState, useEffect } from 'react';

function Predict() {
    const imagesArr = [
        "https://cdn.inito.com/inito_website/ovulation_confirmed.png", 
        "https://cdn.inito.com/inito_website/hormone_chart.png", 
        "https://cdn.inito.com/inito_website/cycle_day_view.png"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % imagesArr.length);
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [imagesArr.length]);

    return (
        <section className="predict-with-actual-data">
            <div className="content">
                <h1>Predict and confirm your ovulation with <span className="image_as_underline">actual</span> data</h1>
                <p className="description">
                    Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your
                    fertility hormones.<br/><br/>
                    If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
                </p>
                <a className="button" href="/buy-now">
                    <span className="button__small-view">GET THE INITO KIT</span>
                    <span className="button__large-view">Get the Inito Kit</span>
                </a>
            </div>

            <div className="iphone slick-initialized slick-slider">
                <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: "1020px" }}>
                        <img 
                            alt="chart" 
                            src={imagesArr[index]}  
                            className="slick-slide slick-current slick-active"
                            style={{ width: "286px", position: "relative", left: "0px", top: "0px" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Predict;
