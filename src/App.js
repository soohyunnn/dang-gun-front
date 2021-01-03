import './App.css';
import MainContainer from './components/main/MainContainer';
import { Route } from 'react-router-dom';
import DetatilContainer from './components/detail/DetatilContainer';


function App() {
  return (
    <>
    <div className="App">
      <Route path="/" component={MainContainer} exact></Route>
      <Route path="/detail" component={DetatilContainer} exact></Route>
    </div>
    
    </>
  );
}

export default App;
