import React from 'react';

function Trusted() {
    return (
        <section className="main-hero ">
        <div className="container">
          <div className="tagline-text">
            <div className="main-hero-stars">
                <img className="img-star" alt="star" src="https://cdn.inito.com/inito_website/star.png"/>
                <img className="img-star" alt="star" src="https://cdn.inito.com/inito_website/star.png"/>
                <img className="img-star" alt="star" src="https://cdn.inito.com/inito_website/star.png"/>
                <img className="img-star" alt="star" src="https://cdn.inito.com/inito_website/star.png"/>
                <img className="img-star" alt="star" src="https://cdn.inito.com/inito_website/star.png"/>
              <span className="text">TRUSTED BY 20,000+ COUPLES</span>
            </div>
            <h1 className="font-bold">Track your fertility hormones at home, in 10 minutes</h1>
            <h6>Get accurate results of <strong>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</strong> with
              Inito, the all-in-one fertility monitor.</h6>
            <div className="main-hero__button">
              <a className="button font-semi-bold tex fertility-kit-slidedown" href="#only-fertility-kit">How does Inito work?</a>
            </div>
          </div>
          <div className="main-hero__img">
            <img className="small-view" alt="mobiel" src="https://cdn.inito.com/inito_website/v2_main_hero_mobile.png"/>
            <img className="large-view" alt="desktop" src="https://cdn.inito.com/inito_website/v2_main_hero_desktop.png"/>
          </div>
        </div>
        <div className="main-hero__button">
          <a className="button font-semi-bold tex fertility-kit-slidedown" href="#only-fertility-kit">HOW DOES INITO WORK?</a>
        </div>
        </section>
    );
}

export default Trusted;