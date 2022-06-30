import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ToDoTask from './components/ToDoTask';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDoTask></ToDoTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
