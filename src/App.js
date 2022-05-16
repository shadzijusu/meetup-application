import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation"
function App() {
  return (
    <div>

    <Router>
    <MainNavigation/>
      <Routes>
      <Route path="/" element={<AllMeetups />}>
      </Route>
      </Routes>
      <Routes>
      <Route path="/new-meetup" element={<NewMeetup />}>
      </Route>
      </Routes>
      <Routes>
      <Route path="/favorites" element={<Favorites />}>
      </Route>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
