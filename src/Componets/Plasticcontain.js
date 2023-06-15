import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Plasticcontain = ({ embedId }) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <>
      <div className="info-content base-component">
        <div
          className="c-info-content c-info-content--vertical"
          id="body_text_list_callout"
        >
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-plastic">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Plastic Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/GPux33UVG_c"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </picture>

                <div className="c-info-content__text-1">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Defination
                    </h3>
                    <p className="c-info-content__content-subheading">
                      Plastic pollution refers to the accumulation of plastic
                      waste in the environment, particularly in oceans, rivers,
                      lakes, and landfills, resulting in detrimental effects on
                      ecosystems, wildlife, and human health. It occurs when
                      plastic materials are irresponsibly discarded and not
                      properly managed or recycled.
                    </p>
                    <p className="c-info-content__content-subheading"></p>
                    <a
                      href={pollutionPDF}
                      download="Type of Pollution"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="downloade_PDF">
                        Download .pdf file
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <img
                    src="https://static.dw.com/image/55661035_804.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Plastic Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Excessive plastic production:
                        </p>{" "}
                        The high demand for plastic products and packaging has
                        led to an increase in production, resulting in greater
                        plastic waste generation.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Improper waste disposal:</p>{" "}
                        Inadequate waste management systems and improper
                        disposal practices, such as littering and illegal
                        dumping, contribute to plastic pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Single-use plastics:</p> The
                        use of disposable plastic items like bags, bottles,
                        straws, and packaging contributes significantly to
                        plastic waste accumulation.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Lack of recycling infrastructure:
                        </p>{" "}
                        Insufficient recycling facilities and limited recycling
                        rates result in a large portion of plastic waste ending
                        up in landfills or the environment.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <img
                    src="https://prod.static9.net.au/_/media/Images/2018/2018/02/28/11/07/2802_bird_plastic.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Plastic Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Harm to wildlife:</p> Marine
                        animals, birds, and land animals often mistake plastic
                        debris for food or become entangled in it, leading to
                        injuries, suffocation, and death.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Habitat destruction:</p>{" "}
                        Plastic pollution disrupts ecosystems, including coral
                        reefs, wetlands, and forests, by altering habitats and
                        negatively impacting the flora and fauna.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Water pollution:</p> Plastics
                        can release toxic chemicals and microplastics into water
                        bodies, contaminating drinking water sources and
                        affecting aquatic organisms.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Human health risks:</p>{" "}
                        Microplastics have been found in food, water, and even
                        air, raising concerns about potential health effects
                        such as hormonal disruptions and organ damage.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <img
                    src="https://www.undp.org/sites/g/files/zskgke326/files/styles/banner_image_desktop/public/migration/vn/1488-resize.jpg?h=1d18de3c&itok=v7Kmwchr"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Plastic Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Reduce plastic consumption:</p>{" "}
                        Opt for reusable alternatives like cloth bags, stainless
                        steel water bottles, and glass containers to minimize
                        the use of single-use plastics.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Proper waste management:</p>{" "}
                        Implement effective waste management systems, including
                        recycling programs, to ensure proper disposal and
                        minimize plastic leakage into the environment.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Plastic recycling:</p> Promote
                        recycling initiatives and support the development of
                        recycling infrastructure to increase plastic waste
                        recycling rates.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Raise awareness:</p> Educate
                        communities about the impact of plastic pollution
                        through campaigns, workshops, and educational programs
                        to encourage responsible plastic use.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Government regulations:</p>{" "}
                        Enact and enforce policies to restrict the production
                        and use of single-use plastics, promote sustainable
                        alternatives, and encourage manufacturers to adopt
                        eco-friendly practices.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Plasticcontain;
