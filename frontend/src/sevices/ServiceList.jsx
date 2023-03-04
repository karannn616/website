import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Nature",
    desc: "Farmers are not just cultivators, they are the stewards of nature's bounty,they are the guardians of nature's balance",
  },
  {
    imgUrl: guideImg,
    title: "Technology",
    desc: "Modern farmers don't just work with seeds and soil, they work with sensors and software.",
  },
  {
    imgUrl: customizationImg,
    title: "Community Services",
    desc: "Community service is not just a responsibility, it's a privilege to support and empower local farmers.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
