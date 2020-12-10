import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";

import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
