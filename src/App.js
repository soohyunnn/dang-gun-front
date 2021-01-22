import "./App.css";
import MainContainer from "./components/main/MainContainer";
import { Route } from "react-router-dom";
import DetatilContainer from "./components/detail/DetatilContainer";
import AddPostContainer from "./components/detail/AddPostContainer";

function App() {
  return (
    <>
      <div className="App">
        <Route path="/" component={MainContainer} exact></Route>
        <Route path="/posts/:id" component={DetatilContainer} exact></Route>
        <Route path="/post/create" component={AddPostContainer} exact></Route>
      </div>
    </>
  );
}

export default App;
