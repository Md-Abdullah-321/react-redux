import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter App</h3>
      <div>
        <h4>Count : {count}</h4>
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
