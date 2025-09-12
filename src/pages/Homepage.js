import Slice from "components/global/slice/Slice";
import HeroHeader from "components/header/hero-header/HeroHeader";

const Homepage = () => {
  return (
    <>
      <HeroHeader
        headerText={
          <>
            We make web accessibility simple, so your services work for
            <em> everyone</em>.
          </>
        }
      />
      <Slice headerText={<>Why invest in Web Accessibility?</>} />
      <Slice
        headerText={<>How other businesses are already benefitting</>}
        variant={"slice--alt"}
      />
    </>
  );
};

export default Homepage;
