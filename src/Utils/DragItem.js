import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DragItem = memo(({ id, onMoveItem, children }) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    type: "CARD",
    item: { id, type: "CARD" },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const [, connectDrop] = useDrop({
    accept: "CARD",
    hover(hoveredOverItem) {
      if (hoveredOverItem.id !== id) {
        onMoveItem(hoveredOverItem.id, id);
      }
    },
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      forwardedRef: ref,
      style: containerStyle,
    })
  );
});

export default DragItem;
