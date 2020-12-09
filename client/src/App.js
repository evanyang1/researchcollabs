import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
