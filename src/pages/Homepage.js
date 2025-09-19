import Slice from "components/global/slice/Slice";
import HeroHeader from "components/header/hero-header/HeroHeader";
import TilesGrid from "components/global/tiles-grid/TilesGrid";
import Tile from "components/global/tiles-grid/tile/Tile";
import { whyAccessibilityGrid, theRightWayGrid } from "data/tilesData";

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
        headerText={<>How other businesses are already benefitting</>}
        variant={"slice--alt"}
      >
        <TilesGrid>
          {theRightWayGrid.map((tile, idx) => (
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
    </>
  );
};

export default Homepage;
