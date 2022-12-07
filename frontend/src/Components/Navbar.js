
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";
import {useNavigate,BrowserRouter,Router,Link, Route, Routes} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    function addRooms(){
        navigate('/Add');
    }
    function displayRooms(){
        navigate('/Display');
    }
    function editRooms(){
        navigate('/Edit');
    }
    function deleteRooms(){
        navigate('/Delete');
    }
    function addEmployees(){
        navigate('/add');
    }
    function viewEmployees(){
        navigate('/all');
    }

const Header = styled(AppBar)`
  background: #555555;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;
`;

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">Hotel Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link" href="/signup">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Login</a>
                        </li>



                    </ul>

                    <ul class="navbar-nav4">

                        <DropdownButton id="dropdown-basic-button" title="Manage Rooms">
                            <Dropdown.Item onClick={addRooms}>Add Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={displayRooms}>View Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={deleteRooms}>Delete Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={editRooms}>Edit Rooms</Dropdown.Item>
                        </DropdownButton>
                       
                        
                        <Header position="static">
     
    </Header>

                    </ul>
                    <ul class="navbar-nav4">


                        <DropdownButton id="dropdown-basic-button" title="Manage Employees">
                            <Dropdown.Item onClick={addEmployees}>Add Employee</Dropdown.Item>
                            <Dropdown.Item onClick={viewEmployees}>View Employee</Dropdown.Item>
                           
                        </DropdownButton>
                        
                        <Header position="static">
     
    </Header>

                    </ul>
                </div>



            </nav>

        </div>)
}

export default Navbar