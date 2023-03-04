import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import far1 from "../assets/images/far1.jpg";
import far2 from "../assets/images/far2.jpeg";
import farvid from "../assets/images/farvid.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import exper from "../assets/images/exper.png";

// import Searchbar from "../shared/Searchbar";
import ServiceList from "../sevices/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* ============================Hero section start==================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hro__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"We eat because they grow"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Farmers are the ones who cure{" "}
                  <span className="highlight">Hunger</span>
                </h1>
                <p>
                  Farmers play a crucial role in curing hunger around the world.
                  They are responsible for growing the crops and raising the
                  livestock that provide the food we need to survive. By
                  providing access to fresh, healthy food, farmers help ensure
                  that people have the nourishment they need to live healthy,
                  productive lives. In addition, farmers can help address food
                  insecurity by increasing the availability of food in
                  underserved areas and by growing crops that are well-suited to
                  local environments. Through their hard work and dedication,
                  farmers help to ensure that everyone has access to the food
                  they need to thrive.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={far1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={farvid} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={far2} alt="" />
              </div>
            </Col>

            {/* <Searchbar /> */}
          </Row>
        </Container>
      </section>
      {/* ============================Hero section end==================== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">
                Check out the following{" "}
                <span className="highlight">Fields</span>
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===================== featured tour section start================ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">
                Some established <span className="highlight">NGOs</span>
              </h2>
            </Col>

            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ===================== featured tour section end================ */}

      {/* ===================== experience section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  Contribute all you can <br /> to help{" "}
                  <span className="highlight">others</span>
                </h2>
                <p>
                  Helping local communities is an essential part of creating a
                  sustainable and vibrant society. By supporting local
                  businesses, volunteering time and resources to community
                  initiatives, and engaging with our neighbors, we can build
                  stronger, more connected communities. Local farmers, in
                  particular, play a crucial role in helping their communities
                  thrive by providing fresh, healthy food, creating local jobs,
                  and promoting sustainable farming practices.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Small Communities</h6>
                </div>
                <div className="counter__box">
                  <span>500+</span>
                  <h6>Affiliated NGOs</h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>States</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={exper} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================== experience section end================ */}

      {/* ===================== gallery section start================ */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our Community <span className="highlight">gallery</span>
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================== gallery section end================ */}

      {/* ===================== testimonial section start================ */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Community comments"}>
                <h2 className="testimonial__title">
                  What our fans say about us!
                </h2>
              </Subtitle>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================== testimonial section end================ */}

      {/* ===================== Contact section start================ */}

      {/* ===================== contact section end================ */}
    </>
  );
};

export default Home;
