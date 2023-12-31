import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h3 className="counter-title">Counter App</h3>
      <h4>Count : {count}</h4>
      <div className="btns">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterView;
