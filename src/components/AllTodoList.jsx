import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../redux/actions/action";

const AllTodoList = () => {
  const lists = useSelector((state) => state.rootReducer.list);
  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Todo-list</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(
              create({ id: lists.length, text: inputRef.current.value })
            );
          }}
        >
          SUBMIT
        </button>
      </div>
      <ul>
        {lists.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => {
                dispatch(done(item.id));
              }}
            >
              complete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllTodoList;
