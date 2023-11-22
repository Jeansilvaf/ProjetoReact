import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" flexGrow={1}></Box>
                <Button color="inherit" component={NavLink} to ="/login"></Button>
                <Button color="inherit" component={NavLink} to ="/cadastro"></Button>
            </Toolbar>
        </AppBar>
    );

}