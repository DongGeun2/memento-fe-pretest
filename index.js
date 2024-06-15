import React from "react";
import ReactDOM from "react-dom";
import DragDropTable from "./src/components/dragDrop/DragDropTable";

function App() {
  const COLUMNS = 4;

  return (
    <div style={appStyle()}>
      {new Array(COLUMNS).fill("").map((_, index) => (
        <DragDropTable key={index} />
      ))}
    </div>
  );
}

const appStyle = () => ({
  display: "flex",
  gap: "10px",
});

ReactDOM.render(<App />, document.getElementById("root"));
