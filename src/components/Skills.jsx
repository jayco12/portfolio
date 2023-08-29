import meter1 from "../assets/img/meter1.svg";
import flutter from "../assets/img/flutter.svg";
import shopify from "../assets/img/shopify.svg";
import robotics from "../assets/img/robotics.png";
import react from "../assets/img/react.svg";
import dart from "../assets/img/dart.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am skilled in a diversity of areas.<br></br> Here are some of them</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter Developer</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React Developer</h5>
                            </div>
                            <div className="item">
                                <img src={dart} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={shopify} alt="Image" />
                                <h5>shopify developer</h5>
                            </div>
                            <div className="item">
                                <img src={robotics} alt="Image" />
                                <h5>Robotics enthusiast</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}