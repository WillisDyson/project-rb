import HeroHeader from "components/hero-header/HeroHeader";

const Homepage = () => {
  return (
    <HeroHeader
      headerText={
        <>
          We make web accessibility simple, so your services work for
          <em> everyone</em>.
        </>
      }
    />
  );
};

export default Homepage;
