import React from "react";
import "../styles/firebase.css";

const Blog = () => {
  return (
    <>
      <header id="fb1">
        <h1>Farmers and Local Communities</h1>
      </header>
      <main id="fb">
        <section>
          <h2>The Importance of Farmers</h2>
          <p>
            Farmers are the backbone of our communities. They provide us with
            fresh, healthy food and contribute to the local economy. By
            supporting local farmers, we can help ensure the long-term viability
            of our food system.
          </p>
        </section>
        <section>
          <h2>How Farmers Benefit Local Communities</h2>
          <ul>
            <li>Provide fresh, healthy food</li>
            <li>Create local jobs</li>
            <li>Strengthen the local economy</li>
            <li>Promote sustainable farming practices</li>
            <li>Support community events and initiatives</li>
          </ul>
        </section>
        <section>
          <h2>Ways to Support Local Farmers</h2>
          <ul>
            <li>Shop at local farmers markets</li>
            <li>Join a community-supported agriculture (CSA) program</li>
            <li>Buy from local farms and farm stands</li>
            <li>Support local restaurants that source from local farms</li>
            <li>Advocate for policies that support local agriculture</li>
          </ul>
        </section>
      </main>
      <footer id="foot">
        <p>&copy; 2023 Farmers and Local Communities</p>
      </footer>
    </>
  );
};

export default Blog;
