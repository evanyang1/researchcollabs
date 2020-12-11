import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";

import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
