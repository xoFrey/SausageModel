import { useRef } from "react";
import Draggable from "react-draggable";

const GalleryItem = ({ src, alt, func, onStart }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable
      axis='both'
      handle='.handle'
      defaultPosition={{ x: 10, y: 10 }}
      bounds='.container'
      onStart={onStart}
      onStop={func}>
      <div
        className='handle'
        ref={nodeRef}>
        <img
          className='icons'
          draggable={false}
          src={src}
          alt={alt}
        />
      </div>
    </Draggable>
  );
};

export default GalleryItem;
