import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMessage } from "../redux/message";

const Greeting = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMessage())
  }, [dispatch])
  
  const { message: { message } } = useSelector(state => state.messagesReducer)

  return (
    <p>{message}</p>
  );
}

export default Greeting
