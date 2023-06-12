import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';



export  default function Footer (){
    return (
        <>
  {/* Footer Start */}
  <div
    className=" footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <h1 className="fw-bold text-primary mb-4">
            A<span className="text-secondary">uw</span>shi
          </h1>
          <p className="auwshi">
          Auwshi, a leading herbal business, blends nature's wisdom with modern innovation. We craft premium herbal products that inspire well-being and vitality. Experience the transformative power of Auwshi and embrace a natural approach to health.
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href="https://www.instagram.com/auwshiherbs" target="_blank"
            >
              <i class="fab fa-instagram"></i>              
</a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href="https://www.facebook.com/profile.php?id=100091527062973" target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href="https://www.youtube.com/auwshiherbs" target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-0"
              href="https://www.linkedin.com/auwshiherbs" target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 address">
          <h4 className="text-dark mb-4 ">Address</h4>
          <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />

          Chankanai, Vikneshwara road,No:09
          </p>
          <p>
          <FontAwesomeIcon icon={faPhoneAlt} className="me-3" />

            +94 706443471
          </p>
          <p>
            <i className="fa fa-envelope me-3" />
            auwshiherbs@gmai
          </p>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-dark mb-4">Quick Links</h4>
          <a className="btn btn-link" href="/aboutus">
            About Us
          </a>
         
          <a className="btn btn-link" href="">
            Our Services
          </a>
          
        </div>
       
      </div>
    </div>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-dark mb-3 mb-md-0">
            ©Auwshi Herbs, All Right Reserved.2023
          </div>
         
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
    {/* back to Top */}

  <a
  href="#"
  className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
>
  <i className="bi bi-arrow-up" />
</a>

</>

    )
}