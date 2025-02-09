import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Marquee from "react-fast-marquee";
import { SvgIcon } from "../../common/SvgIcon";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
        <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0} autoFill={true}>
        <div className="marquee-container" style={{display:"flex"}}>
          <div className="marquee-item">
            <SvgIcon src="ekdant-02.svg" width="200px" height="120px" />
            {/* <span>Web Designing</span> */}
          </div>

          <div className="marquee-item">
          <SvgIcon src="ekdant-02.svg" width="200px" height="120px" />
            {/* <span>Digital Marketing</span> */}
          </div>

          <div className="marquee-item">
          <SvgIcon src="ekdant-02.svg" width="200px" height="120px" />
            {/* <span>SEO Optimization</span> */}
          </div>

          <div className="marquee-item">
          <SvgIcon src="ekdant-02.svg" width="200px" height="120px" />
            {/* <span>Branding</span> */}
          </div>
        </div>
      </Marquee>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
