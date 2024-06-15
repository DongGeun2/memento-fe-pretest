import React, { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getItems } from "../../utils";
import { DragDropItem, DragDropList } from "./DragDropTable.styled";

const DragDropTable = () => {
  const [items, setItems] = useState(getItems(10));

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }

      const newItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );

      setItems(newItems);
    },
    [items]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <DragDropList
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <DragDropItem
                    ref={provided.innerRef}
                    $isDragging={snapshot.isDragging}
                    $draggablePropsStyle={provided.draggableProps.style}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </DragDropItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </DragDropList>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropTable;
