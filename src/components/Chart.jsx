import React from 'react';

function Chart() {
    return (
        <section class="chart-con">
        <div class="chart-con__text-content">
          <h1 class="text-center text-dtheme">
            Never miss <span class="an-egg">
            <img alt = "aday" class="text-image" src="https://cdn.inito.com/inito_website/an_egg.png"/>a day
            <img alt='strike' class="strike-through" src="https://cdn.inito.com/inito_website/strike_through.png"/></span>
            again with Inito
          </h1>
          <p class="description">
            Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones
            in just 10 minutes:
          </p>
          <div class="chart-con__text-content__about">
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
          <img alt="desk" class="v2-homepage-chart" src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"/>
        </picture>
        </section>
    );
}

export default Chart;