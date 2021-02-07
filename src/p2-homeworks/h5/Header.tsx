import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (value: boolean) => {
        setDrawerOpen(value);
    };
    return (
        <AppBar
            position="fixed"
            style={{
                "background": "#f13118",
                "padding": " 20px 0px",
                "width": "100px",
            }}
        >
            <Toolbar>
                {/*<div className="header_logo">*/}
                {/*    <div className="font_left header_logo_title">wmg</div>*/}
                {/*    <div className="font_left header_logo_caption">React mitting</div>*/}
                {/*</div>*/}
                <IconButton

                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer  open={drawerOpen} onClose={(value: boolean) => toggleDrawer(value)} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
