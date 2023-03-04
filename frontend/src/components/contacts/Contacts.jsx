import React from "react";
import "./Contacts.css";

const contacts = () => {
  return (
    <>
      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <h1 class="sub-title">Contact us</h1>
              <p>
                <i class="fa-solid fa-paper-plane"></i>comp.database054
              </p>
              <p>
                <i class="fa-sharp fa-solid fa-square-phone"></i> 8425990154
              </p>
              <div class="social-icons">
                <a href="https://twitter.com/icesick___">
                  <i class="fa-brands fa-square-twitter"></i>
                </a>
                <a href="https://www.instagram.com/karannn________/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>

              {/* <a href="/images/my-cv.pdf" download="" class="btn btn2"
              >Download CV</a> */}
            </div>
            <div class="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="text"
                  name="Email"
                  placeholder="Your E-mail"
                  required
                />
                <textarea
                  name="Message"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" class="btn btn2">
                  Submit
                </button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>
            Copyright &copy; AppBetaClan. Made by AppBetaClan
            <i class="fa-solid fa-heart"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default contacts;
