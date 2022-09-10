import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {NavLink} from "react-router-dom";


const Header = () => {
  const [value, setValue] = React.useState();

  return (
    <>
      <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
        <Toolbar>
          <Typography variant="h6">
            <LibraryBooksIcon />
          </Typography>

          <Tabs
          sx={{ml: "auto"}}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Books" />
            <Tab LinkComponent={NavLink} to="/books"  label="Books" />
            <Tab LinkComponent={NavLink} to="/about"  label="About" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
