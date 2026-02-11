import Header from "components/header/Header";
import Slice from "components/generic/slice/Slice";
import FullWidthImage from "components/generic/fullWidthImage/FullWidthImage";
import aboutImage1 from "assets/about/about-image-1.jpg";

const AboutUs = () => {
  return (
    <>
      <Header
        headerText={<>About Rolling Block</>}
        descriptionText={
          <>
            We're a team of passionate Web Accessibility experts, based in Leeds, UK.
          </>
        }
      />
      <Slice
          headerText={<>Header text</>}
          descriptionText={<>Lorem ipsum</>}
        >
      </Slice>
      <FullWidthImage imageUrl={aboutImage1} altText="Abc" />
    </>
  );
};

export default AboutUs;
