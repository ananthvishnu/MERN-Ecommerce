import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';
import './bootstrap.min.css';
import './style.css';
import './animate.css';
import './animate.min.css';
// page loader starts
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};


//page loader ends


// import './Carousel.css';
//jathu courousel starts
const CarouselComponent = () => {
  return (
    <div className='homecaro'>
    <div className="container-fluid p-2 mb-5 wow fadeIn carousel-wrapper " data-wow-delay="0.1s" >
      <Carousel id="header-carousel" style = {{}}>
        <Carousel.Item>
          <img className="w-100" src="images/products/imagev3.jpg" alt="Image" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  {/* <h1 className="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1> */}
                  {/* <a href="/product" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a> */}
                  <a href="/product" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Products</a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src="images/products/imagev3.jpg" alt="Image" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  {/* <h1 className="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1> */}
                  {/* <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a> */}
                  <a href="/product" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Products</a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};
//jathu courousel ends

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center same">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="images/products/imageV1.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-5 mb-4">Best Herbal Products And Medicines</h1>
            <p className="mb-4">
            Herbal products and medicines, derived from plants and herbs, are gaining popularity for their natural healing properties. Echinacea, turmeric, ginger, garlic, peppermint, St. John's Wort, chamomile, valerian root, ginseng, and milk thistle are commonly recognized herbal remedies. However, it's important to consult with a healthcare professional before using them, as they can still have side effects and interactions with medications.
            </p>
            {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="container-fluid ourfeature bg-icon my-5 py-6">
      <div className="container">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-5 mb-3">Our Features</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="images/products/imageV1.jpg" alt="Feature 1" />
              <h4 className="mb-3">Natural Process</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              {/* <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="images/products/imageV1.jpg" alt="Feature 2" />
              <h4 className="mb-3">Organic Products</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              {/* <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="images/products/imageV1.jpg" alt="Feature 3" />
              <h4 className="mb-3">Biologically Safe</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              {/* <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function ProductSection() {
return (
  
  <div className="container-xxl py-5 Hprodut">
    <div className="container">
      <div className="row g-0 gx-5 align-items-end">
        <div className="col-lg-6">
          <div
            className="section-header text-start mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-5 mb-3">Our Products</h1>
            <p>
Some of Auwshi's Products            
            </p>
          </div>
        </div>
        
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Dry-Ginger
                  </a>
                 
                </div>
                <div className="d-flex border-top">
                  <small className="w-100 text-center border-end py-2">
                    <a className="text-body" href="/product">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="/product">
                    Tooth Powder
                  </a>
                  {/* <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span> */}
                </div>
                <div className="d-flex border-top">
                  <small className="w-100 text-center border-end py-2">
                    <a className="text-body" href="/product">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Hair Oil
                  </a>
                  
                </div>
                <div className="d-flex border-top">
                  <small className="w-100 text-center border-end py-2">
                    <a className="text-body" href="/product">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Sikaikai Powder
                  </a>
                  
                </div>
                <div className="d-flex border-top">
                  <small className="w-100 text-center border-end py-2">
                    <a className="text-body" href="/product">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
            
                </div>
              </div>
            </div>
           
          </div>
        </div>
        {/* <div id="tab-2" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imagev4.jpeg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="images/products/imageV1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>)
}










function App() {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <br></br>
      {<About></About>}
      <br></br>
      {<Feature></Feature>}
      <br></br><br></br><br></br>
      {<ProductSection></ProductSection>}
      <br></br><br></br>
      
      
      

    </div>
  );
}

export default App;
