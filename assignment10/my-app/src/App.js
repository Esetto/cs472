import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './containers/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <h1> Assignment 10 </h1>
        <Dashboard />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
