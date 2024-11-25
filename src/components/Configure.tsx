import { FunctionComponent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addTodo, removeTodo } from "../redux/todoSlice";
import { RootState } from "../redux/store/store";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`;
const Area = styled.textarea`
  border: 2px solid #42aaff;
  border-radius: 8px;
  padding: 15px;
  &:focus {
    outline: none;
  }
`;
const AddButton = styled.button`
  padding: 20px 40px;
  border-radius: 16px;
  cursor: pointer;
  background-color: #80bd68;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  transition: 0.3s all;
  &:hover {
    opacity: 0.7;
  }
`;
const RemoveButton = styled.button`
  padding: 10px 5px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #f0899d;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  transition: 0.3s all;
  &:hover {
    opacity: 0.7;
  }
`;  
const ConfiguringItem = styled.li`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  column-gap: 30px;
  align-items: center;
  border: 1px solid #42aaff;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
`;
const ConfiguringContainer = styled.ul`
  display: flex;
  column-gap: 15px;
  padding: 0;
  margin: 0;
`;

const Configure: FunctionComponent = () => {
  const todoList = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [todoDescription, setTodoDescription] = useState("");
  return (
    <Wrapper>
      <Area
        rows={10}
        cols={50}
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      ></Area>
      <AddButton
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add task
      </AddButton>
      <ConfiguringContainer>
        {todoList.map((todos: any) => (
          <ConfiguringItem key={todos.id}>
            {todos.text}
            <RemoveButton
              onClick={() => {
                dispatch(removeTodo(todos.id));
              }}
            >
              Remove task
            </RemoveButton>
          </ConfiguringItem>
        ))}
      </ConfiguringContainer>
    </Wrapper>
  );
};

export default Configure;
