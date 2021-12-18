
import './App.css';
import Goal from './components/GoalPage/Goal';
import { LandingPage } from './components/Landing/LandingPage';
import {Cbsc12} from './components/class12/Cbsc12'
import { Route, Switch } from 'react-router-dom';
import { LiveClass } from './components/LiveClassPage/LiveClass';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
            <LandingPage/>
        </Route>
        <Route exact path="/goal">
          <Goal/> 
        </Route>
        <Route exact path="/cbse12">
          <Cbsc12/>
        </Route>
        <Route exact path="/live-classes">
          <LiveClass/>
        </Route>
        <Route exact path="/session">
          
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
