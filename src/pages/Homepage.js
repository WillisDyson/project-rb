import Slice from "components/generic/slice/Slice";
import HeroHeader from "components/header/hero-header/HeroHeader";
import TilesGrid from "components/generic/tiles-grid/TilesGrid";
import Tile from "components/generic/tiles-grid/tile/Tile";
import { whyAccessibility, helpingOtherBusinesses, whatGoodAccessibilityBrings, didYouKnow, whyRollingBlock, heroInfo, getStarted } from "data/homepageData";
import ArticleSection from "components/generic/article-section/ArticleSection";
import ArticlePromo from "components/generic/article-section/article-promo/ArticlePromo";
import InfoInsert from "components/generic/info-insert/InfoInsert";
import { ourServices } from "data/homepageData";
import CtaTile from "components/generic/tiles-grid/cta-tile/CtaTile";

const Homepage = () => {
  return (
    <>
      <HeroHeader
        headerText={<>{heroInfo.headerText}</>}
        buttonText={<>{heroInfo.buttonText}</>}
        buttonUrl={heroInfo.buttonUrl}
      />
      <Slice headerText={<>Why invest in Web Accessibility?</>}>
        <TilesGrid noOfColumns={2}>
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
        headerText={<>How other businesses are benefitting</>}
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
      >
        <TilesGrid variant="tiles-grid--tilted-ends" noOfColumns={3}>
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
      <Slice variant={"slice--insert"}>      
        <InfoInsert variant="tiles-grid--tilted-ends"
          headerText={<>{didYouKnow.headerText}</>}
          mainText={<>{didYouKnow.mainText}</>}
          buttonText={<>{didYouKnow.buttonText}</>}
          buttonUrl={didYouKnow.buttonUrl}
        />
      </Slice>
      <Slice
        headerText={<>Why choose Rolling Block?</>}
      >
        <TilesGrid noOfColumns={4} variant="tiles-grid--tilted-alternate">
          {whyRollingBlock.map((tile, idx) => (
            <Tile
              key={idx}
              imageUrl={tile.imageUrl}
              imageAlt={tile.imageAlt}
              header={tile.header}
              description={tile.description}
              variant="tile--stacked-content"
            />
          ))}
        </TilesGrid>
      </Slice>
      <Slice
        headerText={<>Our services</>}
      >
        <TilesGrid noOfColumns={2}>
          {ourServices.map((tile, idx) => (
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
        <CtaTile
          headerText={<>{getStarted.headerText}</>}
          buttonText={<>{getStarted.buttonText}</>}
          buttonUrl={getStarted.buttonUrl}>
        </CtaTile>
      </Slice>
    </>
  );
};

export default Homepage;
