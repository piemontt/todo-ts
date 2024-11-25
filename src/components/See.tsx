import { FunctionComponent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store/store";

const See: FunctionComponent = () => {
  const todoList = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul>
        {todoList.length > 0 ? todoList.map((todos: any) => (
          <li key={todos.id}>{todos.text}</li>
        )) : (<p>No todos yet.</p>)}
      </ul>
    </>
  );
};

export default See;
