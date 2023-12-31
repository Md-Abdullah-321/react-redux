import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";

function App() {
  return (
    <div className="App">
      <h3 className="title">Welcome to react-toolkit</h3>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
