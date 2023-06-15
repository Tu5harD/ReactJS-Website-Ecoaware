import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pollutionPDF from "./pollutionPDF.pdf";
const Aircontain = ({ embedId }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="info-content base-component">
        <div
          className="c-info-content c-info-content--vertical"
          id="body_text_list_callout"
        >
          <div className="c-info-content__heading-panel c-info-content__heading-panel--dark-green-air">
            <h2 className="c-info-content__heading" data-aos="fade-down">
              What’s Air Pollution
            </h2>
          </div>

          <ul className="c-info-content__items c-info-content__items--first-image-right">
            <li className="c-info-content__item" data-aos="fade-up">
              <div className="c-info-content__content">
                <picture>
                  <iframe
                    className="c-info-content__image-1 "
                    data-aos="fade-up"
                    src="https://www.youtube.com/embed/fephtrPt6wk"
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
                      Air pollution refers to the presence of harmful substances
                      in the Earth's atmosphere that can pose risks to human
                      health, the environment, and the overall well-being of
                      living organisms. These substances, known as pollutants,
                      can be either in the form of gases, particulate matter, or
                      biological molecules.
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
                    src="https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Causes of Air Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Industrial Emissions:</p>{" "}
                        Manufacturing processes, power generation, and
                        industrial activities release pollutants such as
                        particulate matter, sulfur dioxide (SO2), nitrogen
                        oxides (NOx), and volatile organic compounds (VOCs) into
                        the air.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Vehicle Emissions:</p> Burning
                        fossil fuels in vehicles, including cars, trucks, and
                        planes, emits pollutants like carbon monoxide (CO),
                        nitrogen dioxide (NO2), and fine particulate matter
                        (PM2.5). Residential and Commercial Emissions: The use
                        of fossil fuels for heating, cooking, and energy in
                        residential and commercial buildings can release
                        pollutants into the air.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Agricultural Activities: </p>{" "}
                        Crop burning, livestock farming, and the use of chemical
                        fertilizers and pesticides contribute to air pollution
                        through the release of ammonia (NH3), methane (CH4), and
                        agricultural dust. Deforestation and Biomass Burning:
                        Clearing land through deforestation and burning biomass,
                        such as forests or agricultural waste, releases
                        significant amounts of carbon dioxide (CO2) and
                        particulate matter into the atmosphere.
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
                    src="https://images.pexels.com/photos/3387159/pexels-photo-3387159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Effects of Air Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Health Impacts:</p> Exposure to
                        air pollutants can lead to respiratory issues, such as
                        asthma, bronchitis, and lung cancer. It can also cause
                        cardiovascular problems, allergies, and skin
                        irritations. Certain pollutants, like fine particulate
                        matter (PM2.5) and nitrogen dioxide (NO2), have been
                        linked to increased mortality rates.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Environmental Damage:</p> Air
                        pollution can harm ecosystems, vegetation, and wildlife.
                        Acid rain, caused by sulfur dioxide (SO2) and nitrogen
                        oxides (NOx) reacting with atmospheric moisture, damages
                        forests, bodies of water, and soil. Ozone depletion in
                        the upper atmosphere leads to harmful ultraviolet (UV)
                        radiation reaching the Earth's surface.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Climate Change:</p> Air
                        pollutants, particularly greenhouse gases like carbon
                        dioxide (CO2), contribute to global warming and climate
                        change. The increased concentration of these gases in
                        the atmosphere leads to rising temperatures, altered
                        weather patterns, and negative impacts on ecosystems.
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
                    src="https://images.pexels.com/photos/1591252/pexels-photo-1591252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="c-info-content__image"
                    data-aos="fade-up"
                  />
                </picture>

                <div className="c-info-content__text">
                  <div className="c-info-content__link">
                    <h3 className="c-info-content__content-heading">
                      Prevention of Air Pollution
                    </h3>
                    <ol className="c-info-content__content-subheading">
                      <li data-aos="fade-right">
                        <p className="info-head">Use Renewable Energy Sources: </p>{" "}
                        Transitioning to clean and renewable energy sources, such as solar and wind power, can reduce reliance on fossil fuels and decrease air pollution from power generation.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Improve Industrial Processes: </p>{" "}
                        Implementing stricter regulations and advanced technologies in industries can minimize pollutant emissions. This includes adopting cleaner fuels, optimizing production methods, and employing effective air pollution control measures.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                        Promote Sustainable Transportation: 
                        </p>{" "}
                        Encouraging the use of electric vehicles, developing public transportation systems, and implementing cycling and walking infrastructure can reduce vehicle emissions and improve air quality in urban areas.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">
                        Enhance Waste Management:
                        </p>{" "}
                        Proper waste disposal and recycling practices help prevent the release of harmful substances into the air through incineration or landfill emissions.
                      </li>
                      <li data-aos="fade-right">
                        <p className="info-head">Plant Trees and Preserve Green Spaces:</p>{" "}
                        Afforestation and reforestation initiatives help absorb carbon dioxide and filter air pollutants. Preserving green spaces within cities also improves air quality by reducing the concentration of pollutants.
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

export default Aircontain;
