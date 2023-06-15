import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Thermalcontain = ({ embedId }) => {
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
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-thermal">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Thermal Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/_fAyvHPBj3I" 
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
                    Thermal pollution refers to the detrimental alteration of
                    water temperature in a natural environment, such as rivers,
                    lakes, or oceans, due to human activities. It occurs when
                    there is a significant increase or decrease in the
                    temperature of a water body beyond its normal range, which
                    can have adverse effects on aquatic ecosystems and
                    organisms.
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
                    src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Thermal Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Power Plants:</p> Industrial
                        facilities and power plants that use water for cooling
                        purposes release heated water back into water bodies,
                        raising the overall temperature.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial Processes:</p>{" "}
                        Certain manufacturing processes, such as steel
                        production, chemical manufacturing, and oil refining,
                        generate heat that is discharged into nearby water
                        bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Deforestation:</p> Clearing
                        large areas of forests reduces shade and vegetation
                        cover, leading to increased exposure of water bodies to
                        sunlight and subsequent temperature rise.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Urbanization:</p> Urban areas
                        with extensive concrete and asphalt surfaces absorb and
                        retain heat, contributing to elevated temperatures in
                        nearby water bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Agricultural Practices:</p>{" "}
                        Some agricultural activities, like irrigation and the
                        use of pesticides, can lead to water runoff that
                        increases the water temperature.{" "}
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
                    src="https://images.pexels.com/photos/11531839/pexels-photo-11531839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Thermal Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Cooling Technologies:</p>{" "}
                        Implementing advanced cooling technologies in power
                        plants and industrial facilities, such as cooling towers
                        and closed-loop systems, can significantly reduce the
                        amount of heated water discharged into water bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Effluent Regulations:</p>{" "}
                        Governments can enforce strict regulations on
                        industries, setting limits on the maximum allowable
                        temperature of effluent released into water bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Reforestation:</p> Planting
                        trees and preserving forests near water bodies helps
                        provide shade and prevent excessive heating of the
                        water.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Urban Planning:</p> Urban areas
                        can incorporate green spaces, parks, and reflective
                        surfaces to minimize the urban heat island effect,
                        reducing the impact of thermal pollution on nearby water
                        bodies.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Water Conservation:</p>{" "}
                        Promoting water conservation practices in agriculture
                        and other sectors can reduce the need for excessive
                        water use, thus minimizing the amount of heated water
                        entering natural bodies of water.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                          Public Awareness and Education:
                        </p>{" "}
                        Educating the public about the importance of preventing
                        thermal pollution and promoting responsible water usage
                        can encourage individuals to take actions to reduce
                        their impact.{" "}
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
                    src="https://images.pexels.com/photos/3105242/pexels-photo-3105242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Thermal Pollution
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

export default Thermalcontain;
