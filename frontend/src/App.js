import "./App.css";
import { Route } from "react-router-dom";
import { Chatpage, Homepage } from "./pages";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
