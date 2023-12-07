
import './App.css';
// import Home from './Home';
import LoginButton from './loginbutton';
import Homefunction from './Homefunction';
import Loginfunction from './loginfunctionbutton';

import User from './user';
import Input from './input';
import Student from './student';
import StudnetList from './studentlist';
import EventHandling from './EventHandling';
import StudentForm from './studentform';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Header from './Pages/Header';
import Course from './Pages/Course';
import Counter from './Pages/Counter';
import LifeCycleEx from './Pages/LifeCycleEx';
import CounterFunction from './Pages/CounterFunction';
import Allhooks from './hooks/Allhooks'
import Employee from './Employee';
import NestedComment from './Task_NestedComment';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <div>
      {/* <h1>hello Mahesh</h1>  */}
      
      {/* <NestedComment/> */}
      <WeatherApp/>
      {/* <Home/>
      <LoginButton/>
      <LoginButton/>
      <Homefunction/>
      <Loginfunction/>
      
      {/* <User/> */}
      {/* <Input type="text" placeholder="enter name"/> */}
      {/* <Student/> */}
      {/* <StudnetList/> */}
      {/* <EventHandling/> */}
      {/* <StudentForm/>

      {/* <BrowserRouter>
      <Header/>
      <Routes>
       <Route  path="/" element={<Home/>}> </Route>
        <Route  path="/aboutus" element={<Aboutus/>}> </Route>
        <Route  path="/contactus" element={<Contactus/>}> </Route>
        <Route  path="/course" element={<Course/>}> </Route>
        <Route  path="/counter" element={<Counter/>}> </Route>
        <Route  path="/lifecycleex" element={<LifeCycleEx/>}> </Route>
        <Route  path="/counterfunciton" element={<CounterFunction/>}> </Route>
        <Route  path="/allhooks" element={<Allhooks/>}> </Route>
        <Route  path="/emp-react-node-express" element={<Employee/>}> </Route>
        <Route  path="/emp-react-node-express" element={<Employee/>}> </Route>
      
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
