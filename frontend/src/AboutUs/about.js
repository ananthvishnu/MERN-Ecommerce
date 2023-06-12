import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './bootstrap.min.css';
import './style.css';
import './animate.css';
import './animate.min.css';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import MapContainer from './Map';




// import 'bootstrap/dist/css/bootstrap.min.css';

const PageHeader = () => {
  return (
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="display-3 mb-3 animated slideInDown">About Us</h1>
        <nav >
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a className="text-body" href="/">Home</a></li>
            <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}




function Foody(){
  return (
    <div>
      {/* Navbar Start */}
      {/* Your navbar code here */}
      {/* Navbar End */}

      {/* About Start */}
      {<div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img position-relative overflow-hidden p-5 pe-0">
            <img className="img-fluid w-100 imagev1" src="images/products/imageV1.jpg" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="display-5 mb-4">Best Herbal Products And Medicines</h1>
          <p className="mb-4">
          Herbal products and medicines, derived from plants and herbs, are gaining popularity for their natural healing properties. Echinacea, turmeric, ginger, garlic, peppermint, St. John's Wort, chamomile, valerian root, ginseng, and milk thistle are commonly recognized herbal remedies. However, it's important to consult with a healthcare professional before using them, as they can still have side effects and interactions with medications.

          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Tempor erat elitr rebum at clita
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Aliqu diam amet diam et eos
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Clita duo justo magna dolore erat amet
          </p>
          {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
            Read More
          </a> */}
        </div>
      </div>
    </div>
  </div>}
      {/* About End */}

      {/* Firm Visit Start */}
      {/* { <div className="container-fluid bg-primary bg-icon mt-5 py-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
          <p className="text-white mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet. Diam dolor diam
            ipsum sit. Aliqu diam amet diam et eos.
          </p>
        </div> */}
        {/* <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
          <a
            className="btn btn-lg btn-secondary rounded-pill py-3 px-5"
            href=""
          >
            Visit Now
          </a>
        </div> */}
      {/* </div>
    </div>
  </div>} */}
      {/* Firm Visit End */}

      {/* Feature Start */}
      {
  <div className="container-fluid bg-light bg-icon py-6">
    <div className="container">
      <div
        className="section-header text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h1 className="display-5 mb-3">Our Features</h1>
        <p>
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
          justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-white text-center h-100 p-4 p-xl-5">
            <img className="img-fluid mb-4" src="images/products/imagev3.jpg" alt="" />
            <h4 className="mb-3">Natural Process</h4>
            <p className="mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="bg-white text-center h-100 p-4 p-xl-5">
            <img className="img-fluid mb-4" src="images/products/imagev3.jpg" alt="" />
            <h4 className="mb-3">Organic Products</h4>
            <p className="mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
            {/* <a
              className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
              href=""
            >
              Read More
            </a> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-white text-center h-100 p-4 p-xl-5">
            <img className="img-fluid mb-4" src="images/products/imagev3.jpg" alt="" />
            <h4 className="mb-3">Biologically Safe</h4>
            <p className="mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
            {/* <a
              className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
              href=""
            >
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>}
      {/* Feature End */}
<br></br>
<br></br>
      {/* contact Start */}
      { <div className="container-xxl py-6">
    <div className="container">
      <div
        className="section-header text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h1 className="display-5 mb-3">Contact Us</h1>
        <p>
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
          justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="row g-5 justify-content-center">
        <div className="col-lg-5 col-md-12 wow fadeInUp " data-wow-delay="0.1s">
          <div className="callus text-white d-flex flex-column justify-content-center h-100 p-5">
            <h5 className="text-white">Call Us</h5>
            <p className="mb-5">
              <i className="fa fa-phone-alt me-3" />
              +947 7644 3471
            </p>
            <h5 className="text-white">Email Us</h5>
            <p className="mb-5">
              <i className="fa fa-envelope me-3" />
              auwshiherbs@gmail.com
            </p>
            <h5 className="text-white">Office Address</h5>
            <p className="mb-5">
              <i className="fa fa-map-marker-alt me-3" />
             Vikneshwara road,  Chankanai , Jaffna 
            </p>
            <h5 className="text-white">Follow Us</h5>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-0"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          {/* <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
?          </p> */}
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 200 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-warning rounded-pill py-3 px-5 submit-btn"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>}
      {/* contact End */}

      
      <>
  {/* Google Map Start */}
  <div
    className="container-xxl px-0 wow fadeIn"
    data-wow-delay="0.1s"
    style={{ marginBottom: "-6px" }}
  >
    <iframe
      className="w-100"
      style={{ height: 450 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameBorder={0}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  {/* Google Map End */}
</>

  <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
        {/* Footer Start */}
        {/* {<div
    className="container-fluid bg-dark footer pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h1 className="fw-bold text-primary mb-4">
            F<span className="text-secondary">oo</span>dy
          </h1>
          <p>
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-0"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p>
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p>
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope me-3" />
            info@example.comgit 
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Quick Links</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a href="#">Your Site Name</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            <br />
            Distributed By:{" "}
            <a href="https://themewagon.com" target="_blank">
              ThemeWagon
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>} */}
      {/* Footer End */}
    </div>
  );
};




// function FluidExample() {
  
//   return <div class="aboutusimg1">
//     <h1 align="center">Profile</h1>
//     <Image src="/images/Auwshi.gif" fluid/>
//     </div>;
// }
// export default FluidExample;



// function AutoLayoutExample() {
//   return (
//     <div class="container">
//       <h1 align="center">Contact Us</h1>

//   <div class="row">
//     <div class="col border border-dark">
//       1 of 2
//     </div>
//     <div class="col border border-dark">
//       2 of 3
//     </div>
//   </div>
//   </div>
//   );
// }

// export default AutoLayoutExample;
function About() {
  return (
    <div>
      <PageHeader />
      <br></br>
      {/* <AutoLayoutExample/> */}
      <br></br>
      <Foody/>
    </div>
  )
  
};
export default About;