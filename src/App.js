import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ToDoTask from './components/ToDoTask';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDoTask></ToDoTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
