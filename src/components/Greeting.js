import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from '../redux/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(message());
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
      <p>
        {greeting}
      </p>
    </div>
  );
};

export default Greeting;
