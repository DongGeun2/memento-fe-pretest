import styled from "styled-components";

const GRID = 8;

export const DragDropList = styled.div`
  background: ${(props) => (props.$isDraggingOver ? "lightblue" : "lightgrey")};
  padding: ${GRID};
  width: 250;
`;

export const DragDropItem = styled.div`
  user-select: none;
  padding: ${GRID * 2};
  margin: 0 0 ${GRID}px 0;
  background: ${(props) => (props.$isDragging ? "lightgreen" : "grey")};

  ${(props) => ({
    ...props.$draggablePropsStyle,
  })}
`;
