import { FunctionComponent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store/store";
const See: FunctionComponent = () => {
  const todoList = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const ConfiguringItem = styled.li`
    display: flex;
    padding: 20px;
    justify-content: center;
    column-gap: 30px;
    align-items: center;
    border: 1px solid #42aaff;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    min-width: 200px;
  `;
  const ConfiguringContainer = styled.ul`
    display: flex;
    gap: 15px;
    padding: 32px;
    margin: 0;
    flex-wrap: wrap;
  `;

  return (
    <>
      <ConfiguringContainer>
        {todoList.length > 0 ? (
          todoList.map((todos: any) => (
            <ConfiguringItem key={todos.id}>{todos.text}</ConfiguringItem>
          ))
        ) : (
          <p>No todos yet.</p>
        )}
      </ConfiguringContainer>
    </>
  );
};

export default See;
