import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Watercontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-water">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Water Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/MEb7nnMLcaA"
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
                      Water pollution refers to the contamination or degradation
                      of water bodies, such as lakes, rivers, oceans,
                      groundwater, and even smaller bodies like ponds and
                      wetlands, by the introduction of harmful substances or
                      pollutants. These pollutants can be of various types and
                      originate from natural sources or human activities.
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
                    src="https://images.pexels.com/photos/7795371/pexels-photo-7795371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Water Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial Discharges:</p>{" "}
                        Industries release a variety of pollutants, including
                        chemicals, heavy metals, and toxic substances, directly
                        into water bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Municipal and Domestic Waste:
                        </p>{" "}
                        Improper disposal of household waste, sewage, and
                        wastewater without proper treatment can contaminate
                        water sources.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Agricultural Activities:</p>{" "}
                        The use of pesticides, fertilizers, and herbicides in
                        farming can lead to runoff, which carries pollutants
                        into nearby water bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Oil Spills:</p> Accidental or
                        deliberate release of oil into water bodies due to
                        transportation accidents, offshore drilling, or illegal
                        activities can have severe impacts on aquatic
                        ecosystems.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Mining Activities:</p> Mining
                        operations generate waste materials, such as heavy
                        metals and sediments, which can contaminate nearby water
                        sources.{" "}
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
                    src="https://images.pexels.com/photos/16195415/pexels-photo-16195415/free-photo-of-trash-left-among-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Water Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Impact on Aquatic Life:</p>{" "}
                        Pollutants can lead to reduced oxygen levels in the
                        water, making it difficult for aquatic organisms to
                        survive. It can also disrupt the natural balance of
                        ecosystems and result in the loss of biodiversity.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Human Health Risks:</p>{" "}
                        Contaminated water can cause various waterborne
                        diseases, such as cholera, typhoid, hepatitis, and
                        gastrointestinal illnesses. Consumption of contaminated
                        fish and seafood can also pose risks to human health due
                        to bioaccumulation of toxins.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Economic Consequences:</p>{" "}
                        Water pollution can adversely affect industries such as
                        fishing and tourism, leading to economic losses for
                        communities that rely on these sectors.
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
                    src="https://images.pexels.com/photos/9324305/pexels-photo-9324305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Water Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Waste Management:</p>{" "}
                        Implementing proper waste disposal and recycling
                        practices can help reduce the amount of pollutants
                        entering water bodies. Municipalities should establish
                        efficient sewage treatment systems to treat wastewater
                        before it is discharged.{" "}
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial Regulations:</p>{" "}
                        Governments should enforce strict regulations on
                        industrial waste discharge and promote the use of
                        cleaner production techniques. Industries should adopt
                        sustainable practices and treat their effluents before
                        releasing them into water bodies.{" "}
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Agricultural Best Practices:
                        </p>{" "}
                        Promoting the use of organic farming methods, proper
                        pesticide and fertilizer management, and implementing
                        buffer zones near water bodies can help minimize
                        agricultural runoff.{" "}
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Oil Spill Prevention:</p>{" "}
                        Strengthening regulations and monitoring systems for
                        transportation and offshore drilling operations can help
                        prevent oil spills. Adequate response plans and cleanup
                        measures should be in place in case of an accident.{" "}
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Public Awareness and Education:
                        </p>{" "}
                        Educating the public about the importance of water
                        conservation, responsible water use, and the impacts of
                        pollution can help foster a sense of responsibility and
                        encourage individual actions to prevent water pollution.{" "}
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

export default Watercontain;
