import React from "react";
import { useSelector } from "react-redux";

const DoneList = () => {
  const lists = useSelector((state) => state.rootReducer.list).filter(
    (item) => item.done !== false
  );

  return (
    <section>
      {lists.length > 0 && <h1>Completed list</h1>}
      <ul>
        {lists.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default DoneList;
