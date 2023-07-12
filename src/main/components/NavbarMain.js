import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";

import logo from "../../images/logo.png";

const drawerWidth = 240;

function NavbarMain(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="Schrodingers Equation" />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                <a href="https://github.com/Durtyburd/PhysicsInMotion">
                  GitHub
                </a>
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                Particle Motion
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                Wave Motion
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                Electron Motion
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ backgroundColor: "#000000" }}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
          >
            <span className="material-symbols-outlined">menu</span>
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="Schrodingers Equation" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "white", textTransform: "none" }}>
              <Typography variant="h5">Particle Motion</Typography>
            </Button>{" "}
            <Button sx={{ color: "white", textTransform: "none" }}>
              <Typography variant="h5">Wave Motion</Typography>
            </Button>{" "}
            <Button sx={{ color: "white", textTransform: "none" }}>
              <Typography variant="h5">Electron Motion</Typography>
            </Button>{" "}
            <a href="https://github.com/Durtyburd/PhysicsInMotion">
              <Button sx={{ color: "white", textTransform: "none" }}>
                <Typography variant="h5">GitHub</Typography>
              </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#000000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export { NavbarMain };
