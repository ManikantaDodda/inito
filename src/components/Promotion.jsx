import React from 'react';
import free from "../assets/promotion/free.svg";
import trusted2000 from "../assets/promotion/trusted2000.svg";
import eligible from "../assets/promotion/eligible.svg";
function Promotion() {
    return (
        <>
            <div class="promotion">
                <h1>The <span class="image_as_underline">only</span> fertility kit you will ever need</h1>
                <p class="description">
                    Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH),
                    but fail to measure the hormone that actually confirms your ovulation: <strong>PdG (urine metabolite of progesterone).</strong>
                </p>
            </div>

            <div class="makes-inito-different">
                <h1>What makes Inito different?</h1>
                <p class="description">
                    Inito is the only fertility monitor that measures all <strong>4 hormones</strong> on a <strong>single test strip</strong>,
                    showing you a full picture of your cycles with results unique to your body.
                </p>
            </div>

            <div class="images-in-small-view">
                <div class="content">
                    <img alt="trusted-pic" src={trusted2000} />
                    <span class="img-text">TRUSTED BY 20,000+ COUPLES</span>
                </div>
                <div class="content"> 
                    <img alt="eligible" src={free} />
                    <span class="img-text">Free Us Shipping</span>
                </div>
                <div class="content">
                    <img alt="eligible" src={eligible}/>
                    <span class="img-text">HSA/FSA ELIGIBLE</span>
                </div>
            </div>
        </>
    );
}

export default Promotion;