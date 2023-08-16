import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImgs = images.map((image) => {
      return <ImageShow key={image.id} image={image} />;
    })

    return (
      <div>
        {renderedImgs}
      </div>
    );
  }
  
  export default ImageList;
  