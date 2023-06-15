import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Lightcontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-light">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Light Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/5gYIeT6GrkA"
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
                      Light pollution refers to the excessive or misdirected
                      artificial light produced by human activities that
                      disrupts the natural darkness of the night sky and
                      negatively affects the environment, wildlife, and human
                      health. It is the result of the inefficient or unnecessary
                      use of artificial lighting.
                    </p>
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
                    src="https://cdn.pixabay.com/photo/2018/01/29/09/14/lamp-3115623_1280.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Light Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Urbanization:</p> The growth of
                        cities leads to an increased demand for artificial
                        lighting, resulting in more lights being installed and
                        used.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Poorly Designed Lighting:</p>{" "}
                        Inefficient lighting fixtures that emit light in all
                        directions or upward contribute to light pollution. This
                        includes unshielded streetlights and floodlights.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Excessive Outdoor Lighting:</p>{" "}
                        Over-illumination occurs when more light is used than
                        necessary, such as brightly lit buildings, billboards,
                        and sports facilities.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Industrial and Commercial Facilities:
                        </p>{" "}
                        Manufacturing plants, warehouses, and other industrial
                        facilities often require intense lighting for security
                        or operational purposes, which can contribute to light
                        pollution.
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
                    src="https://cdn.pixabay.com/photo/2021/08/03/11/13/science-fiction-6519097_1280.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Light Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Disrupted Sleep Patterns: </p>{" "}
                        Excessive nighttime lighting can interfere with natural
                        sleep patterns, leading to insomnia and other
                        sleep-related disorders.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Impact on Wildlife:</p> Many
                        animals rely on natural light cues for navigation,
                        reproduction, and feeding. Artificial lighting can
                        disrupt these patterns, affecting migratory birds,
                        insects, turtles, and other wildlife.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Ecological Disruption:</p>{" "}
                        Light pollution can disrupt ecosystems by altering the
                        behaviors of plants, animals, and microorganisms,
                        potentially affecting pollination, predator-prey
                        relationships, and plant growth.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Astronomical Interference:</p>{" "}
                        Artificial lights scatter and reflect in the atmosphere,
                        leading to skyglow that hampers visibility for
                        astronomers and limits our ability to observe stars,
                        galaxies, and other celestial objects.
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
                    src="https://cdn.pixabay.com/photo/2022/12/28/00/47/ai-generated-7682001_1280.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Light Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Use Proper Lighting Techniques:
                        </p>{" "}
                        Employ lighting fixtures that direct light downward and
                        shield the light source to reduce light trespass and
                        glare. This ensures that light is focused on the
                        intended area and minimizes upward light spill.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Implement Lighting Regulations:
                        </p>{" "}
                        Develop and enforce lighting ordinances or regulations
                        that promote responsible lighting practices, including
                        limitations on outdoor lighting intensity, specific
                        color temperatures, and appropriate shielding.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Promote Energy Efficiency:</p>{" "}
                        Switch to energy-efficient lighting technologies, such
                        as LED lights, which not only reduce energy consumption
                        but can also be designed to minimize light pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Raise Awareness and Education:
                        </p>{" "}
                        Educate the public about the negative impacts of light
                        pollution and the benefits of responsible lighting
                        practices. Encourage individuals, businesses, and
                        municipalities to make informed choices regarding
                        outdoor lighting.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Preserve Dark-Sky Areas:</p>{" "}
                        Establish and protect designated dark-sky areas where
                        lighting is minimized to preserve the natural beauty of
                        the night sky and facilitate astronomical observation.
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

export default Lightcontain;
