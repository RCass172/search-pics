import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImgs = images.map((image) => {
      return <ImageShow image={image} />;
    })

    return (
      <div>
        {renderedImgs}
      </div>
    );
  }
  
  export default ImageList;
  