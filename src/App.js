
import Banner from './components/Banner'
import Boxy from './components/Boxy'
import Footer from './components/Footer'
import WeatherHour from './components/weatherhour'
import Calendar from './components/Calendar'
import Settings from './components/Settings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  //Calendar in components is for the calendar page
  return (
    <Router>
      <>
      <Switch>
        <Route exact path="/">
          <Banner />
          <Boxy />
          <WeatherHour />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <Footer />
      </>
    </Router>
  );
}
export default App;
