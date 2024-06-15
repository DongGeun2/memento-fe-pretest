import React from "react";
import DragDropTable from "../../components/dragDrop/DragDropTable";

import { SHome } from "./Home.styled";

const Home = () => {
  const COLUMNS = 4;

  return (
    <SHome>
      {new Array(COLUMNS).fill("").map((_, index) => (
        <DragDropTable key={index} />
      ))}
    </SHome>
  );
};

export default Home;
