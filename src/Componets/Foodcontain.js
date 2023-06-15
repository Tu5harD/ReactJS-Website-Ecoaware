import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Foodcontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-noise">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Noise Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/OQWmaYjyolE"
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
                      Noise pollution refers to the excessive or disturbing
                      noise that disrupts the natural environment and negatively
                      affects human health and well-being. It is characterized
                      by the presence of loud, unwanted, or harmful sounds in
                      the environment.
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
                    src="https://t4.ftcdn.net/jpg/03/37/25/33/360_F_337253306_KDrKwVYpJUErRQ301URJd7k4yyOvcTfm.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Noise Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Transportation:</p> Road
                        traffic is a major contributor to noise pollution,
                        including cars, motorcycles, trucks, and buses.
                        Additionally, noise from airplanes taking off and
                        landing, as well as trains and subway systems, can
                        contribute to noise pollution near transportation
                        routes.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial activities:</p>{" "}
                        Industries such as manufacturing plants, power plants,
                        construction sites, and factories often generate high
                        levels of noise. Heavy machinery, equipment, and
                        processes involved in these activities can produce
                        continuous or intermittent noise.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Construction and demolition:
                        </p>{" "}
                        Construction sites are known for generating loud and
                        persistent noise due to activities like drilling,
                        hammering, excavating, and heavy equipment operation.
                        Demolition of buildings or structures also creates
                        significant noise.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Urbanization and human activities:
                        </p>{" "}
                        Urban areas with high population densities often
                        experience increased noise pollution due to human
                        activities. These can include traffic, honking horns,
                        sirens, construction, loud music, public events, and
                        recreational activities like concerts, sporting events,
                        and parties.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Infrastructure and equipment:
                        </p>
                        Noise pollution can be caused by infrastructure elements
                        such as generators, air conditioners, ventilation
                        systems, and large-scale cooling units, especially if
                        they are not properly designed or maintained.
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
                    src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/07/27/817e1224d6572a6901c98338febe2d21.jpg?fit=2000%2C1335&quality=80&zoom=1&ssl=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Noise Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Health Issues:</p> Prolonged
                        exposure to high levels of noise can lead to several
                        health problems, including hearing loss, increased
                        stress levels, hypertension, sleep disturbances, and
                        even cardiovascular issues.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Communication Interference:</p>{" "}
                        Excessive noise can hamper communication by making it
                        difficult to hear or understand each other, leading to
                        misunderstandings and decreased productivity.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Learning and Concentration Impairment:
                        </p>{" "}
                        Noise pollution can affect learning environments by
                        hindering concentration, reducing cognitive performance,
                        and impairing students' ability to understand and retain
                        information.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Wildlife Disruption:</p> Loud
                        noises from urban areas, industries, and transportation
                        can disturb wildlife, affecting their feeding patterns,
                        mating rituals, and overall behavior. This disturbance
                        can lead to a decline in certain species or disrupt
                        ecosystems.{" "}
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
                    src="https://assets.telegraphindia.com/abp/2020/2/18/1606328976_5fbea29053f99_anti-horn-poster.jpg"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Noise Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Urban Planning:</p> Proper
                        urban planning should include zoning regulations that
                        separate noisy industrial or commercial areas from
                        residential areas, schools, and hospitals. This helps to
                        reduce the exposure of sensitive locations to high noise
                        levels.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Noise Barriers:</p>{" "}
                        Constructing physical barriers like walls or green
                        spaces can help reduce noise transmission from noisy
                        sources to residential areas. These barriers can absorb,
                        reflect, or diffract sound waves, effectively reducing
                        the noise level.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Traffic Management:</p>{" "}
                        Implementing traffic management strategies like
                        constructing quieter road surfaces, reducing speed
                        limits, enforcing traffic rules, and using
                        noise-reducing techniques in vehicles can significantly
                        reduce noise pollution caused by traffic.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Noise Reduction Technology:</p>{" "}
                        Advancements in technology have led to the development
                        of quieter machinery, equipment, and transportation
                        systems. Using noise-reducing technologies and
                        implementing noise control measures in industries and
                        construction sites can help minimize noise pollution.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Public Awareness:</p> Raising
                        awareness about the harmful effects of noise pollution
                        is crucial. Educating the public about responsible use
                        of audio devices, promoting noise-reducing practices,
                        and encouraging individuals to report excessive noise to
                        authorities can contribute to noise pollution
                        prevention.
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

export default Foodcontain;
