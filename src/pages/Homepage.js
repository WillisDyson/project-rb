import Slice from "components/generic/slice/Slice";
import HeroHeader from "components/header/hero-header/HeroHeader";
import TilesGrid from "components/generic/tiles-grid/TilesGrid";
import Tile from "components/generic/tiles-grid/tile/Tile";
import { whyAccessibility, helpingOtherBusinesses, whatGoodAccessibilityBrings } from "data/homepageData";
import ArticleSection from "components/generic/article-section/ArticleSection";
import ArticlePromo from "components/generic/article-section/article-promo/ArticlePromo";

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
          {whyAccessibility.map((tile, idx) => (
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
        headerText={<>How are already helping other businesses</>}
      >
        <ArticleSection variant="tiles-grid--tilted-ends">
          {helpingOtherBusinesses.map((article, idx) => (
            <ArticlePromo
              key={idx}
              articleUrl={article.articleUrl}
              header={article.header}
              description={article.description}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              linkText={article.linkText}
            />
          ))}
        </ArticleSection>
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
