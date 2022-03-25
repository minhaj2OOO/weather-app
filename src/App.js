import Banner from './components/Home/Banner'
import TodayForcast from './components/Home/TodayForcast'
import Footer from './components/Footer'
import WeekForcast from './components/Home/WeekForecast'
import Calendar from './components/Calendar'
import Settings from './components/Settings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path="/">
          <Banner />
          <TodayForcast />
          <WeekForcast />
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
