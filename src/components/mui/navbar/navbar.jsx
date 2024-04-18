import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(!isMobile);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
