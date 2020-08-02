import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "./Footer";
import YouTube from "react-youtube";
import Carousel from "react-bootstrap/Carousel";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import firebase from "../../firebase SDK/firebase";

import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      ImagesUrl: "",
      newUrlobj: null,
    };
  }

  componentWillMount = async () => {
    let Data = await localStorage.getItem("URL");
    let transformed = JSON.parse(Data);
    this.setState({ ImagesUrl: transformed });
    console.log(this.state.ImagesUrl);
  };

  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <Header />
        <section className="section_img">
          <Carousel className="Carousel-RMK">
            <Carousel.Item>
              <img
                className="d-block RMK-img"
                src={this.state.ImagesUrl[0]}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block RMK-img "
                src={this.state.ImagesUrl[1]}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block RMK-img"
                src={this.state.ImagesUrl[2]}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="section-video">
          <Container fluid>
            <Row>
              <Col lg={6}>
                <h1 className="video_h1">Mission</h1>
                <h2 className="video_h2">See how we works</h2>
                <p className="video_p">
                  To be a single window facilitator for provision of financial
                  services with backward and forward linkages for women in the
                  unorganized sector through Intermediary Micro Finance
                  Organizations (IMOs) and Women Self Help Groups (SHGs) and to
                  augment their capacities through multi-pronged efforts.
                </p>
              </Col>
              <Col>
                <YouTube
                  className="RMK-video"
                  videoId="mNKbcp8dmiQ"
                  opts={opts}
                  onReady={this._onReady}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <div class="sticky-social">
          <ul class="social">
            <li class="fb">
              <a href="https://chat.whatsapp.com/Dr9dgZSkRkQ9vcm0HOrMXM">
              <i class="fab fa-whatsapp" style={{ color: "white"}}><WhatsAppIcon style={{height: "28px", width: "28px"}}/></i>
              </a>
            </li>
          </ul>
        </div>
        <section className="AboutRMK">
          <Container className="AboutRMKUS1">
            <Row>
              <Col className="AboutRMKUS">
                <h1 style={{ fontWeight: "bold" }} className="introRMK">
                  Why RMK?
                </h1>
                <p
                  style={{ fontSize: 18, textAlign: "left", color: "#8a8a8a" }}
                >
                  Rashtriya Mahila Kosh (RMK) was established by the Government
                  of India in March, 1993 as an autonomous body under the
                  Ministry of Women & Child Development. It was registered under
                  the Societies Registration Act 1860.
                </p>
              </Col>
              <Col>
                <div className="features text-center">
                  <img
                    className="homepageicon"
                    style={{ marginLeft: "4rem", marginTop: "4rem" }}
                    src={require("../Images/personalised-offers.svg")}
                    alt="Personal"
                  />
                  <div className="RMKIntro-Div">
                    <h3
                      style={{
                        marginTop: "4rem",
                        fontWeight: "bold",
                        marginLeft: "2vh",
                      }}
                      className="Personalised"
                    >
                      Personalised Offers
                    </h3>
                    <p className="PersonalP">
                      Personalised Offers on Personal loan and to start an
                      business
                    </p>
                  </div>
                </div>
                <div className="features text-center">
                  <img
                    className="homepageicon"
                    style={{ marginLeft: "4rem", marginTop: "3rem" }}
                    src={require("../Images/fast-disbursals.svg")}
                    alt="Personal"
                  />
                  <div className="RMKIntro-Div">
                    <h3
                      className="homeheading"
                      style={{
                        marginTop: "3rem",
                        marginRight: "6vh",
                        fontWeight: "bold",
                      }}
                      className="Personalised"
                    >
                      Fast Disbursals
                    </h3>
                    <p className="PersonalP">
                      Money credited in your account in just 24 hours
                    </p>
                  </div>
                </div>
                <div className="features text-center">
                  <img
                    className="homepageicon"
                    style={{ marginLeft: "4rem", marginTop: "2rem" }}
                    src={require("../Images/safe-secure.svg")}
                    alt="Personal"
                  />
                  <div className="RMKIntro-Div">
                    <h3
                      style={{
                        marginTop: "2rem",
                        marginRight: "9vh",
                        fontWeight: "bold",
                      }}
                      className="Personalised"
                    >
                      Safe & Secure
                    </h3>
                    <p className="PersonalP">
                      Your information and privacy are most concern for us
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="MFWCD">
          <div>
            <h3 className="headingMFWCD">
              Ministry of Women & Child Development
            </h3>
            <img
              className="MFCH-logo"
              src={require("../Images/MFWCD logo.png")}
              alt="MFCH logo"
            />
          </div>
          <div>
            <h4 style={{ textAlign: "center", color: "white" }}>
              Associated Organisations of Ministry of Women And Child
              Development
            </h4>
            <div className="ImagesLogo">
              <img
                className="ncpcrImg linkImg"
                src={require("../Images/ncpcr.png")}
                alt="National comission"
              />
              <img
                className="CARAImg Imagemargin"
                src={require("../Images/CARA-logo.png")}
                alt="CARA"
              />
              <img
                className="cswb Imagemargin"
                src={require("../Images/cswb.png")}
                alt="CSWB"
              />
              <img
                className="National Imagemargin"
                src={require("../Images/unnamed.png")}
                alt="National Women"
              />
              <img
                className="nipccd Imagemargin"
                src={require("../Images/nipccd.png")}
                alt="National child"
              />
            </div>
          </div>
        </section>
        <footer className="footer">
          <div>
            <h5 className="Contact-US"> Contact us</h5>
            <h3 className="darkColor">Find Us By Below Details</h3>
          </div>
          <div>
            <Container style={{ marginTop: "3vh" }}>
              <Row>
                <Col xs={4}>
                  <div className="footer-box">
                    <div className="Div-Style">
                      <FaMapMarkerAlt className="Icon" />
                    </div>
                    <p className="Address">
                      Rashtriya Mahila Kosh, Samaj Kalyan Bhawan, B-12, 4th
                      Floor Qutab Institutional Area, New Delhi - 110016
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="footer-box">
                    <div className="Div-Style">
                      <FaPhoneAlt className="Icon" />
                    </div>
                    <p className="Address Phone">
                      +91-11-26567187,
                      <br />
                      26567188
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="footer-box">
                    <div className="Div-Style">
                      <FiMail className="Icon" />
                    </div>
                    <Link to="/">
                      {" "}
                      <p className="Address Phone">ed_rmk@nic.in</p>{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
        <Footer />
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Home;
