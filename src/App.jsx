import { Home } from "./components/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JobRegister } from "./components/JobRegister";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/cadastro-de-vaga" exact>
          <JobRegister />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
