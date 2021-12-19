
import './App.css';
import Goal from './components/GoalPage/Goal';
import { LandingPage } from './components/Landing/LandingPage';
import {Cbsc12} from './components/class12/Cbsc12'
import { Route, Switch } from 'react-router-dom';
import { LiveClass } from './components/LiveClassPage/LiveClass';
import { Session } from './components/WatchSessionPage/Session';
import {LoadingScreen} from './components/loadingscreen/LoadingScreen'
import { Video } from './components/video/Video';
import { OtherClass } from './components/otherCourses/OtherClass';
import {IndiviusalSubject} from './components/otherCourses/indivdiualSubject/IndiviusalSubject'
import {IndividualTopic} from './components/otherCourses/individualTopic/IndividualTopic'
import {Precorded} from './components/PrerecordedPage/Precorded'
import { IndividualPage } from './components/IndividualPage/IndividualPage';
import { PreLecture } from './components/PrerecordedPage/PreLecture';
import { Subscription } from './components/class12/footer/Subscription';
import { SubscriptionPage } from './components/subscription/SubscriptionPage';
import {SubIconicPage} from './components/subscription/SubIconicPage'

function App() {
  return (
    <div className='App'>
      {/* <OtherClass/> */}
      {/* <IndiviusalSubject/> */}
      {/* <IndividualTopic/> */}
      {/* <Precorded/>   */}
      {/* <SubscriptionPage/> */}
      {/* <SubIconicPage/> */}
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
            <Session/>
          </Route>
          <Route exact path="/loading" >
            <LoadingScreen/>
          </Route>
          <Route exact path="/video" >
            <Video/>
          </Route>
          <Route exact path="/other-courses">
            <OtherClass/>
          </Route>
          <Route exact path="/individual-subject">
            <IndiviusalSubject/>
          </Route>
          <Route exact path="/individual-topic">
            <IndividualTopic/>
          </Route>
          <Route exact path="/pre-recorded" >
            <Precorded/>  
          </Route>
          <Route exact path="/individual-subtopic">
            <IndividualPage/>
          </Route>
          <Route exact path="/plus">
            <SubIconicPage/>
          </Route>
          <Route exact path="/iconic" >
            <SubscriptionPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
