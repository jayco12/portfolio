import joseph from "../assets/img/joseph.jpg";
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";

export const About = () => {


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
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <div class="lg:flex lg:justify-between lg:gap-4">
                <Row size={12} sm={8} md={2}>
                  <img className="profile" src={joseph}></img>
                  <div>
                    <h3>Joseph Oduyebo</h3>
                    <h6>Flutter/Web developer</h6>
                    <p>I build accessible, inclusive products and digital experiences for the mobile and web applications.</p>
                    <div className="experiences">
                    {/* <Col className="Column mb-2gggg">
                      <p>
                        I am a Vice President of OAU Campuns Ambassadors at Boundlesspay, a leading cryptocurrency and blockchain platform in Africa. I lead a team of passionate students who promote the use of digital currency on campus, organizing events, workshops, and campaigns to educate and engage our peers.

                        I am also an App Developer at Balablue, a startup that creates innnnovative solutions for e-commerce and social media platforms. I use Flutter and Firebase to design, develop, and maintain mobile applications that enhance user experience and functionality. I have contributed to several projects, such as a chatbot that provides customer support, a loyalty program that rewards users for referrals, and a gamified interface that boosts user engagement. I am always eager to learn new skills and technologies that can help me create better products and services.

                      I am pursuing a Bachelor of Engineering degree in Mechanical Engineering at Obafemi Awolowo University, where I also explore my interests in robotics and artificial intelligence. I am a self-taught programmer who enjoys building apps and websites with Flutter, React JS, and other frameworks. I am motivated by the challenge and the opportunity to solve real-world problems with technology.
                      </p> */}
                      {/* <h4>Experiences</h4>
                      <p>
                        Mobile Developer HAYSTER LAUNDROMAT
                        SKILLS AND EXPERTISE
                         Wordpress
                         Flutter and Dart  Blockchain
                        WORK EXPERIENCE
                         Developed and maintaining the Hayster laundromat mobile application.
                         Released the mobile application to the google playstore.
                         Applied best practices to ensure product meets optimal production standard.
                         Support with the installation and maintenance of the application, help with the user guide and credentials.
                        Mobile Developer (Intern) Nov 2022– FEB 2023 SYSQBIT
                         Designed, implemented and monitored prototype (Screen UIs) for the mobile application project.
                         Troubleshot 20% of technical issues within the development cycle.
                         Researched trends on emerging mobile software technology necessary for the mobile product.
                         Increased team performance by 5% using stacked state management library and MVVM architecture.
                        March 2022 – May 2022
                        1
                        Mobile Developer (Trainee) Jan 2022– June 2022
                        Flutter interns
                         Exercised mobile development learning using dart language and flutter framework.
                         Wrote codes and designed interface for a mobile application focused on event planning in a team.
                         Improved team collaboration by 5% by utilising Github.
                         Optimized performance by 10% through debugging of technical issues concerning the development cycle.
                        Wordpress Web Developer
                        Designed, implemented and evaluated web pages and sites for continuous improvement in a fast-paced environment.
                        Oversaw troubleshooting of technical issues on web projects
                        Utilized programming capabilities in HTML, CSS, and JavaScript and other libraries as needed. Curated project goals and milestones as discussed at team meetings with executives. Implemented 25% of Google campaigns and SEO for various types of websites.
                      </p> */}
                      
                    {/* </Col> */}
                    </div>
                  </div>
                </Row>

              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
