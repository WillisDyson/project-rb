import Header from "components/header/Header";
import Slice from "components/generic/slice/Slice";

const Blog = () => {
  return (
    <>
      <Header
        headerText={<>Web Accessibility Blog</>}
        descText={
          <>
            Web Accessibility is a evolving faster than ever – keep up to date by
            reading our articles.
          </>
        }
      />
      <Slice headerText={<>Latest articles</>}>
      </Slice>
    </>
  );
};

export default Blog;
