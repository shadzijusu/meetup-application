import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>

    <Router>
    <Switch>
      <Route path="/" exact>
        <AllMeetups></AllMeetups>
      </Route>
 
  
      <Route path="/new-meetup">
        <NewMeetup></NewMeetup>
      </Route>

    
      <Route path="/favorites">
        <Favorites></Favorites>
      </Route>
      </Switch>
    </Router>
    </Layout>

  );
}

export default App;
