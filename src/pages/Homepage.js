import Slice from "components/global/slice/Slice";
import HeroHeader from "components/header/hero-header/HeroHeader";
import TilesGrid from "components/global/tiles-grid/TilesGrid";
import Tile from "components/global/tiles-grid/tile/Tile";
import { whyAccessibilityGrid, theRightWayGrid, whatGoodAccessibilityBrings } from "data/homepageData";

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
      <Slice headerText={<>Why invest in Web Accessibility?</>}>
        <TilesGrid>
          {whyAccessibilityGrid.map((tile, idx) => (
            <Tile
              key={idx}
              imageUrl={tile.imageUrl}
              imageAlt={tile.imageAlt}
              header={tile.header}
              description={tile.description}
            />
          ))}
        </TilesGrid>
      </Slice>
      <Slice
        headerText={<>What good accessibility brings to your business</>}
        variant={"slice--alt"}
      >
        <TilesGrid variant="tiles-grid--tilted-ends">
          {whatGoodAccessibilityBrings.map((tile, idx) => (
            <Tile
              key={idx}
              imageUrl={tile.imageUrl}
              imageAlt={tile.imageAlt}
              header={tile.header}
              description={tile.description}
              variant="tile--blue"
            />
          ))}
        </TilesGrid>
      </Slice>
    </>
  );
};

export default Homepage;
