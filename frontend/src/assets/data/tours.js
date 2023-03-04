import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpeg";
import logo5 from "../images/logo5.jpeg";
import logo6 from "../images/logo6.gif";
import logo7 from "../images/logo7.jpg";

const tours = [
  {
    id: "01",
    title: "Indian Farmers",
    city: "Punjab",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: logo1,
    featured: true,
  },
  {
    id: "02",
    title: "The Nawal Org",
    city: "Lucknow",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: logo2,
    featured: true,
  },
  {
    id: "03",
    title: "Farmers Hut",
    city: "Pune",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: logo3,
    featured: true,
  },
  {
    id: "04",
    title: "Yash Foundation",
    city: "Mumbai",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: logo4,
    featured: true,
  },
  {
    id: "05",
    title: "Agrisetu, India",
    city: "Jaunpur",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: logo5,
    featured: false,
  },
  {
    id: "06",
    title: "HIRDS",
    city: "Mumbai",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: logo6,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: logo7,
    featured: false,
  },
  {
    id: "08",
    title: "WOTR , India",
    city: "Pune",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: logo3,
    featured: false,
  },
];

export default tours;
