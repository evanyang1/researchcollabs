import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
