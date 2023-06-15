import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Radioactivecontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-radioactive">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Radioactive Pollution
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
                    Radioactive pollution, also known as nuclear pollution, refers to the contamination of the environment by radioactive materials or radiation. It occurs when radioactive substances are released into the air, water, or soil, leading to potential health hazards and environmental damage.
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
                    src="https://authorsunilsir.com/wp-content/uploads/2022/12/image-5.png"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Radioactive Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Nuclear accidents:</p>{" "}
                        Accidents like the Chernobyl disaster and Fukushima
                        nuclear meltdown released a significant amount of
                        radioactive materials into the environment.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Nuclear weapons testing:</p>{" "}
                        Historical nuclear weapons testing has led to the
                        release of radioactive materials into the atmosphere and
                        soil.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Improper nuclear waste disposal:
                        </p>{" "}
                        Inadequate management and disposal of radioactive waste
                        can result in its leakage and contamination of
                        surrounding areas.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Uranium mining and processing:
                        </p>{" "}
                        Activities related to uranium mining and processing can
                        release radioactive materials into the environment.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Industrial and medical applications:
                        </p>{" "}
                        Certain industries and medical procedures use
                        radioactive materials, and if not handled properly, they
                        can contribute to pollution.
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
                    src="https://t3.ftcdn.net/jpg/03/14/16/84/360_F_314168442_CRsdzlB8NlhUJZYpepgvqL2T2mDv3kB5.webp"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Radioactive Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Health risks:</p> Exposure to
                        high levels of ionizing radiation can cause various
                        health issues, including cancer, genetic mutations, and
                        radiation sickness.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Environmental impact:</p>{" "}
                        Radioactive pollution can harm ecosystems, affecting
                        plants, animals, and microorganisms. It can disrupt
                        natural habitats and cause long-term ecological damage.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Soil and water contamination:
                        </p>{" "}
                        Radioactive substances can contaminate soil and water
                        sources, affecting agriculture, food chains, and water
                        supplies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Longevity of radiation:</p>{" "}
                        Some radioactive materials can remain hazardous for
                        thousands of years, leading to long-term environmental
                        and health concerns.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Economic and social consequences:
                        </p>{" "}
                        Nuclear accidents and radioactive pollution incidents
                        can have significant economic and social impacts,
                        including displacement of communities, loss of
                        livelihoods, and costly cleanup and recovery efforts.
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
                    src="https://17f037e476.cbaul-cdnwnd.com/2544c80611a3244aca5739bfaa14654f/200000009-0076b0076d/image-crop-200000008.jpeg?ph=17f037e476"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Radioactive Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Stringent regulations:</p>{" "}
                        Governments should enforce strict regulations and
                        guidelines for the safe operation of nuclear power
                        plants, handling of radioactive materials, and disposal
                        of radioactive waste.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Proper waste management:</p>{" "}
                        Establishing secure and well-monitored facilities for
                        the storage and disposal of radioactive waste is
                        crucial.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Improved nuclear safety:</p>{" "}
                        Regular inspections, maintenance, and upgrades of
                        nuclear facilities can minimize the risk of accidents
                        and leakage of radioactive materials.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Development of clean energy alternatives:
                        </p>{" "}
                        Investing in renewable and sustainable energy sources
                        can reduce the reliance on nuclear power, thereby
                        minimizing the potential for radioactive pollution
                        incidents.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Public awareness and education:
                        </p>{" "}
                        Educating the public about the risks associated with
                        radioactive pollution and promoting responsible
                        practices can help prevent incidents and encourage
                        responsible decision-making.
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

export default Radioactivecontain;
