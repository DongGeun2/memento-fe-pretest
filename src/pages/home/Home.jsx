import React from "react";
import DragDropTable from "../../components/dragDrop/DragDropTable";

const Home = () => {
  const COLUMNS = 4;

  return (
    <div style={appStyle()}>
      {new Array(COLUMNS).fill("").map((_, index) => (
        <DragDropTable key={index} />
      ))}
    </div>
  );
};

const appStyle = () => ({
  display: "flex",
  gap: "10px",
});

export default Home;
