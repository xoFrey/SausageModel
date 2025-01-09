import Draggable from "react-draggable";

const GalleryItem = ({ src, alt }) => {
  return (
    <>
      <Draggable
        axis='both'
        handle='.handle'
        defaultPosition={{ x: 10, y: 10 }}
        bounds='parent'>
        <div className='handle'>
          <img
            draggable={false}
            src={src}
            alt={alt}
          />
        </div>
      </Draggable>
    </>
  );
};

export default GalleryItem;
