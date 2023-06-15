import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Soilcontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Soil Poluution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/Hnfdq2htoKU"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </picture>

                <div className="c-info-content__text-1">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Difination
                    </h3>
                    <p className="c-info-content__content-subheading">
                      Soil pollution refers to the contamination of soil by
                      various pollutants, which can have harmful effects on the
                      environment, plants, animals, and human health. It occurs
                      when harmful substances are introduced into the soil,
                      altering its natural composition and degrading its
                      quality.
                    </p>
                    <a
                      href={pollutionPDF}
                      download="Type of Pollution"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="downloade_PDF">Download .pdf file</button>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <img
                    src="https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Soil Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial Activities:</p>{" "}
                        Industrial processes often generate waste products that
                        contain toxic chemicals and heavy metals. Improper
                        disposal of these wastes can lead to soil pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Agricultural Practices:</p> The
                        use of pesticides, herbicides, and fertilizers in
                        agriculture can contribute to soil pollution. Excessive
                        or improper application of these chemicals can
                        contaminate the soil and affect its fertility.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Mining Activities:</p> Mining
                        operations extract valuable minerals from the Earth, but
                        they can also release harmful substances into the soil.
                        Mining waste, known as tailings, often contains toxic
                        materials that can pollute the surrounding soil.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Improper Waste Disposal:</p>{" "}
                        Dumping of untreated or poorly treated waste materials,
                        such as household garbage, sewage sludge, or industrial
                        waste, can contaminate the soil with various pollutants.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Accidental Spills and Leaks:
                        </p>{" "}
                        Accidents involving transportation or storage of
                        hazardous substances can result in spills or leaks,
                        leading to soil pollution if the pollutants seep into
                        the ground.
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
                    src="https://images.pexels.com/photos/3714904/pexels-photo-3714904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Soil Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Reduced Soil Fertility:</p>{" "}
                        Pollutants in the soil can disrupt the natural nutrient
                        balance, impairing the soil's fertility and
                        productivity. This can lead to decreased agricultural
                        yields and hinder the growth of plants.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Contaminated Food and Water:
                        </p>{" "}
                        When pollutants are absorbed by plants from polluted
                        soil, they can enter the food chain. Consuming
                        contaminated food can have adverse effects on human
                        health. Pollutants can also leach into groundwater,
                        contaminating drinking water sources.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Ecosystem Disruption:</p> Soil
                        pollution can harm soil-dwelling organisms such as
                        earthworms, microorganisms, and beneficial insects,
                        disturbing the ecological balance. This can have
                        cascading effects on other organisms in the food chain.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Soil Erosion:</p> Polluted soil
                        may lose its structural stability and become more
                        susceptible to erosion. This can lead to the loss of
                        topsoil, which is crucial for plant growth and can
                        result in desertification or land degradation.
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
                    src="https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Soil Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Proper Waste Management:</p>{" "}
                        Implementing effective waste management practices,
                        including recycling, proper disposal, and treatment of
                        hazardous materials, can help prevent soil pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Sustainable Agriculture:</p>{" "}
                        Promoting organic farming techniques, crop rotation, and
                        integrated pest management can reduce the use of harmful
                        chemicals and minimize soil pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Soil Testing and Monitoring:
                        </p>{" "}
                        Regular soil testing can identify contamination early
                        on, allowing for appropriate remediation measures to be
                        taken.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Soil Remediation Techniques:
                        </p>{" "}
                        Various techniques like phytoremediation (using plants
                        to remove pollutants), bioremediation (using
                        microorganisms to break down contaminants), and soil
                        washing (physically removing pollutants) can be employed
                        to restore polluted soil.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Environmental Regulations:</p>{" "}
                        Governments can enact and enforce regulations that
                        promote responsible industrial practices, waste
                        management, and pollution control to prevent soil
                        pollution.
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

export default Soilcontain;
