/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/actions/TodosAction";

function Todos() {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div className="todos">
      <h3>Todos App</h3>

      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error.message}</h4>}
      <section className="sect">
        {todos &&
          todos.map((todo) => {
            return (
              <div key={todo.id} className="todo">
                <h4>{todo.id}</h4>
                <p>{todo.title}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Todos;

//1. state - count : 0
//2. actions - increament, decrement, reset
//3. reducer -
//4. store - create store
//5. provide store
//6. use store
