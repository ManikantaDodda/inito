import React from 'react';

function Brands(props) {
    return (
        <main>

        <section className="press-section">
        <span className="text">AS SEEN ON</span>
        <div className="press-section__logo-container">
          <div className="press-section__logo-container__img">
            <img className="press-logo" alt="press-logo" srcset="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@2x.png 2x" src="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@1x.png"/>
          </div>
          <div className="press-section__logo-container__img">
            <img className="press-logo" alt="press-logo" srcset="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@2x.png 2x" src="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@1x.png"/>
          </div>
          <div className="press-section__logo-container__img" id="only-fertility-kit">
            <img className="press-logo" alt="press-logo"srcset="https://cdn.inito.com/inito_website/press/Logo_The_Week@2x.png 2x" src="https://cdn.inito.com/inito_website/press/Logo_The_Week@1x.png"/>
          </div>
          <div className="press-section__logo-container__img">
            <img className="press-logo" alt="press-logo" srcset="https://cdn.inito.com/inito_website/press/Logo_Washington@2x.png 2x" src="https://cdn.inito.com/inito_website/press/Logo_Washington@1x.png"/>
          </div>
          <div className="press-section__logo-container__img">
            <img className="press-logo" alt="press-logo" srcset="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@2x.png 2x" src="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@1x.png"/>
          </div>
        </div>
        </section>
        
        
        </main>
    );
}

export default Brands;