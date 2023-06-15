import React, { useEffect } from "react";
import "./Home_page.css";
import Home_items from "./Home_item";
import { Link } from "react-router-dom";
import Image_Slider from "./Image_Slider";
import AOS from "aos";
import "aos/dist/aos.css";
const Home_page = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <>
      <Image_Slider />
      <div className="text-list-callout base-component">
        <div
          className="c-text-list-callout c-text-list-callout--vertical"
          id="body_text_list_callout"
        >
          <div
            className="c-text-list-callout__heading-panel c-text-list-callout__heading-panel--dark-green "
            data-aos="fade-down"
          >
            <h2 className="c-text-list-callout__heading">
              Type of Pollution in Nature
            </h2>
            <p className="c-text-list-callout__subheading">
              "Pollution is not an illusion, it needs our attention and
              prevention."
            </p>
          </div>
          <ul className="c-text-list-callout__items c-text-list-callout__items--first-image-right">
            {Home_items.map((value) => {
              return (
                <>
                  <li className="c-text-list-callout__item">
                    <div className="c-text-list-callout__content">
                      <picture>
                        
                        <iframe
                          className="c-text-list-callout__image  "
                          data-aos="fade-up"
                          src={value.video}
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                          title="video"
                        />
                      </picture>

                      <div
                        className="c-text-list-callout__text"
                        data-aos="fade-up"
                      >
                        <Link
                          className="c-text-list-callout__link-wrapper"
                          to={value.url}
                        >
                          <div className="c-text-list-callout__link">
                            <h3 className="c-text-list-callout__content-heading">
                              {value.heading}
                            </h3>
                            <p className="c-text-list-callout__content-subheading">
                              {value.info}
                            </p>
                            <span className="c-text-list-callout__content-button">
                              Learn More
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home_page;
