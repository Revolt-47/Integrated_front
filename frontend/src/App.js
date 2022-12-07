import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Room from './Rooms';
import Form from './Bookingform';
import Bookings from './bookings';
import Navbar from './Components/Navbar';
import AdminScreen from './Screens/Admin';
import DisplayRoom from './Screens/DisplayRooms';
import AddRooms from './Screens/AddRooms';
import DeleteRoom from './Screens/DeleteRooms';
import EditRoom from './Screens/EditRooms';
import BMS from "./components/Manager";
import AllBanks from "./components/Allusers";
import AddBank from "./components/Adduser";
//import Navbar from "./components/Navbar.js";
import EditBranch from "./components/Edituser";

function App() {

  const [activeuser,setactiveuser] = useState({});
  const [room,setroom] = useState('');
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login setactiveuser={setactiveuser}/>}/>
      <Route path = 'signup' element={<Signup/>}/>
      <Route path = 'dashboard' element={<Dashboard/>}/>
      <Route path = 'room' element={<Room setroom = {setroom} />}/>
      <Route path = 'book' element={<Form room = {room} user = {activeuser} />}/>
      <Route path = 'booked' element={<Bookings user = {activeuser}/>}/>
      <Route path="/Display" element={<DisplayRoom/>}/>
      <Route path="/Add" element={<AddRooms/>}/>
      <Route path="/Delete" element={<DeleteRoom/>}/>
      <Route path="/Edit" element={<EditRoom/>}/>
      <Route path="/" element={<BMS />} />
      <Route path="/add" element={<AddBank />} />
      <Route path="/all" element={<AllBanks />} />
      <Route path="/edit/:id" element={<EditBranch />} />
    </Routes>  
   </BrowserRouter>
    
  );
}

export default App;
