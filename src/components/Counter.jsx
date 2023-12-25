import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/CounterActions";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch(incrementCounter());
  };
  const handleDecreament = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="counter">
      <h2>Counter App</h2>
      <h4>Count : {count}</h4>
      <div className="btns">
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

//1. state - count : 0
//2. actions - increament, decrement, reset
//3. reducer -
//4. store - create store
//5. provide store
//6. use store
