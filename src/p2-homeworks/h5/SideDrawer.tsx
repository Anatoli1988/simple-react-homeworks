import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";

const SideDrawer = (props: any) => {
    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List  className='navbar' component="nav">
                <div><NavLink to='/hw1'> Home Work 1 </NavLink></div>
                <div><NavLink to='/hw2'> Home Work 2 </NavLink></div>
                <div><NavLink to='/hw3'> Home Work 3</NavLink></div>
                <div><NavLink to='/hw4'> Home Work 4 </NavLink></div>


            </List>
        </Drawer>
    );
};

export default SideDrawer;