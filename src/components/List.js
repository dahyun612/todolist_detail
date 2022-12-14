import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos.js";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";



const List = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const todos = useSelector ((state)=>state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  
  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };


console.log(todos);
  return (
    <StListContainer>
      <h2>π₯π₯ν΄μΌλ§ νλ€. κΈ°νμ½π₯π₯</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key= {todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>

                  <>μμΈλ³΄κΈ°</>
                </StLink>
                <>
                <h2 className="todos-title">{todo.title}</h2>
                <>{todo.body}</>
                </>
                <StDialogFooter>
                  
                  <StButton
                  onClick={() => onDeleteTodo(todo.id)}>
                    μ­μ νκΈ° </StButton>
                   
                   
                   <StButton
                  onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "μ·¨μ":"μλ£"} </StButton>

                </StDialogFooter>
              </StTodoContainer>
               
            
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      
      <h2>ππ€ΈββοΈν΄λμ΄!ν΄λλ€κ΅¬!!π€ΈββοΈπ</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key= {todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <>μμΈλ³΄κΈ°</>
                </StLink>
                <>
                <h2 className="todo-title">{todo.title}</h2>
                <>{todo.body}</>
                </>
                <StDialogFooter>
                  
                  <StButton
                  onClick={() => onDeleteTodo(todo.id)}>
                    μ­μ νκΈ° </StButton>
                    
                    <StButton
                  onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "μ·¨μ":"μλ£"} </StButton>

                    </StDialogFooter>
              </StTodoContainer>
               
            
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      </StListContainer>

  )
      }
export default List;

const StListContainer = styled.div `
   padding: 0 24px;
`;
const StListWrapper = styled.div `
  display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
const StTodoContainer = styled.div`
  width: 270px;
    /* height: 150px; */
    border: 4px solid palevioletred;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
  
`;
const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer `
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border-Color : palevioletred;
  border: 1px;
  height: 40px;
  width: 120px;
  background-color: palevioletred;
  border-radius: 12px;
  cursor: pointer;
`;

