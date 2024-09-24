import React from 'react';

function Chart() {
    return (
        <section className="chart-con">
        <div className="chart-con__text-content">
          <h1 className="text-center text-dtheme">
            Never miss <span className="an-egg">
            <img alt = "aday" className="text-image" src="https://cdn.inito.com/inito_website/an_egg.png"/>a day
            <img alt='strike' className="strike-through" src="https://cdn.inito.com/inito_website/strike_through.png"/></span>
            again with Inito
          </h1>
          <p className="description">
            Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones
            in just 10 minutes:
          </p>
          <div className="chart-con__text-content__about">
            <ul>
              <li>
                Estrogen, which rises 3-4 days before ovulation
              </li>
              <li>
                LH, which surges 24-36 hours before ovulation
              </li>
              <li>
                PdG, which rises after ovulation
              </li>
              <li>
                FSH, to track follicle growth
              </li>
            </ul>
          </div>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcset="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg"/>
          <source media="(min-width: 769px)" srcset="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"/>
          <img alt="desk" className="v2-homepage-chart" src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"/>
        </picture>
        </section>
    );
}

export default Chart;