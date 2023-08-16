import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
    const renderedImgs = images.map((image) => {
      return <ImageShow key={image.id} image={image} />;
    })

    return (
      <div className="image-list">
        {renderedImgs}
      </div>
    );
  }
  
  export default ImageList;
  