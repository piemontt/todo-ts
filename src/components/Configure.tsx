import { FunctionComponent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addTodo, removeTodo, setTodoStatus } from "../redux/todoSlice";
import { RootState } from "../redux/store/store";
import { useState } from "react";

const InputWrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const Area = styled.textarea`
  border: 2px solid #42aaff;
  border-radius: 8px;
  padding: 16px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 576px) {
    width: 91%;
  }
`;
const AddButton = styled.button`
  padding: 24px 40px;
  border-radius: 16px;
  cursor: pointer;
  background-color: #80bd68;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  transition: 0.3s all;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const RemoveButton = styled.button`
  padding: 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #f0899d;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  transition: 0.3s all;
  min-width: 91px;
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 1200px) {
    padding: 10px 5px;
    font-size: 14px;
  }
  @media screen and (max-width: 991px) {
    white-space: normal;
    padding: 5px;
    font-size: 12px;
  }
`;
const DoneButton = styled(RemoveButton)`
  background-color: #80bd68;
`;
const ConfiguringItem = styled.li<{ $doned?: boolean }>`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => (props.$doned ? "#8c767652" : "#ffffff")};
  row-gap: 30px;
  border: 1px solid #42aaff;
  border-radius: 8px;
  width: 21%;
  @media screen and (max-width: 991px) {
    padding: 16px;
    width: 41%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ConfiguringItemText = styled.span<{ $doned?: boolean }>`
  text-decoration: ${(props) => (props.$doned ? "line-through;" : "none")};
  font-family: "Roboto", sans-serif;
`;
const ConfiguringContainer = styled.ul`
  padding: 0 16px 16px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  @media screen and (max-width: 576px) {
    gap: 16px;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
  @media screen and (max-width: 991px) {
    column-gap: 8px;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Configure: FunctionComponent = () => {
  const todoList = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [todoDescription, setTodoDescription] = useState("");

  return (
    <>
      <InputWrap>
        <Area
          rows={10}
          cols={50}
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        ></Area>
        <AddButton
          onClick={function () {
            if (todoDescription) {
              dispatch(addTodo(todoDescription));
              setTodoDescription("");
            }
          }}
        >
          Add task
        </AddButton>
      </InputWrap>
      <ConfiguringContainer>
        {todoList.map((todos: any) => (
          <ConfiguringItem $doned={todos.doned} key={todos.id}>
            <ConfiguringItemText $doned={todos.doned}>
              {todos.text}
            </ConfiguringItemText>
            <ButtonsWrapper>
              <RemoveButton
                onClick={() => {
                  dispatch(removeTodo(todos.id));
                }}
              >
                Remove task
              </RemoveButton>
              <DoneButton
                onClick={() => {
                  dispatch(
                    setTodoStatus({ id: todos.id, doned: !todos.doned })
                  );
                }}
              >
                {todos.doned ? "Undo" : "Completed"}
              </DoneButton>
            </ButtonsWrapper>
          </ConfiguringItem>
        ))}
      </ConfiguringContainer>
    </>
  );
};

export default Configure;
