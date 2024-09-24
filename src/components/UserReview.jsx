import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './userreview.css';
const UserReviewsCarousel = () => {
  const reviews = [
    {
      name: "Brooke",
      text: "This product is worth every penny!! I was using only LH strips to track my ovulation and we would “baby make” on each peak day and did not get pregnant. After receiving this device and trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.",
      rating: 5,
      right : 52
    },
    {
      name: "Nancy",
      text: "I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more successful on my next IUI. Highly recommend this if you are looking for guaranteed results!",
      rating: 5,
      right : 102,
    },
    {
      name: "Gonzales",
      text: "I wish I had used this sooner. Don’t waste your money on other OPK tests. This system is more accurate and monitors 4 key hormones that affect ovulation. The other cheaper brands cannot do this. It gives you better insight into your body’s hormone fluctuations during a cycle and where any possible problems with conception could be coming from. It is worth the investment and can save you time on identifying fertility issues and help you get pregnant faster.",
      rating: 5,
      right:130
    },
    {
      name: "MJ",
      text: "My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that. I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. Also love that it measures PdG because I never really was able to get real spikes to confirm ovulation when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.",
      rating: 5,
      right:180,
    },
    {
      name: "Ashley",
      text: "I have PCOS and have been on letrozole and using LH tests to time intercourse. I was hesitant to buy this because there are so many different things but I liked the added hormones it tracks. I just used it with my last cycle and it was so great! Showed me my estrogen rising so I knew I was in my fertile window two days before my LH rise. I just got the 'confirmed ovulation' because my PdG increased. It’s so great to have a little more insight into what is going on!",
      rating: 5,
      right:221,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="user-reviews">
      <div className="review-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="user-review">
              <div className="user-review__card" style={{right:`${review.right}px`}}>
                <div className="user-review__rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <img key={i} className="user-rating" src="https://cdn.inito.com/inito_website/star.png" alt="Star" />
                  ))}
                </div>
                <div className="user-review__data">
                  <p className="text font-reg">{review.text}</p>
                  <div className="card-username">{review.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserReviewsCarousel;
