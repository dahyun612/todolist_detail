import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import todos, {getTodoByID } from "../redux/modules/todos.js";

const Detail = ()=> {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todo);
    console.log(todos);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTodoByID(id));    
    }, [dispatch,id]);

    return (
        <StContainer>
                <StDialog>  
                <>
                <StDialogHeader>
               <>ID : {id}</>
                <StButton
                boderColor="#fffff"
                onClick={() => {
                    navigate("/");
                }}
                >
                이전으로
                </StButton>
               </StDialogHeader>
               <StTitle>{todos.title}</StTitle>
              <StBody>{todos.body}</StBody>
               </>

             </StDialog>
            </StContainer>
    )}

    export default Detail;

    const StContainer = styled.div `
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    `;

const StDialog = styled.div`
width: 600px;
height: 400px;
border: 1px solid #eee;
display: flex;
color: gray;
flex-direction: column;
justify-content: space-between;
background-size: 600px;
background-repeat: no-repeat;
background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdTu0mt%2FbtrKlU2YPwR%2FqFZ9SBwOfOzJS2in6qjQE0%2Fimg.png);
`;

const StDialogHeader = styled.div`
display: flex;
height: 80px;
justify-content: space-between;
padding: 0 24px;
align-items: center;
`;

const StTitle = styled.h1`
padding: 0 24px;
`;

const StBody = styled.main`
padding: 0 24px;
`;

const StButton = styled.button`
border: 1px solid ${({ borderColor }) => borderColor};
height: 40px;
width: 120px;
background-color: #fff;
border-radius: 12px;
cursor: pointer;
`;