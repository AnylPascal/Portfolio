import React from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Link";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WorkIcon from '@material-ui/icons/Work';
// import HttpsIcon from '@material-ui/icons/Https';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import SecurityIcon from '@material-ui/icons/Security';
import { Nav } from 'react-bootstrap';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'black',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    backgroundColor: 'transparent',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));


// Using HighOrderFunctions 

// const styles = {
//   root: {
//     background: 'transparent',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     padding: '0 30px',

//   },
// };

// function HighOrderComponent(props) {
//   const { classes } = props;
//   return <AppBar className={classes.root}></AppBar>;
// }

// HighOrderComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HigherOrderComponent);





// // Using the Hook API method below..

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// export default function Hook() {
//   const classes = useStyles();
//   return <AppBar className={classes.root}>Hook</AppBar>;
// }

// href='https://superhero-battle-royale.herokuapp.com/' alt=""  






export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    


    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Anyl Pascal | Engineer
          </Typography>
       
        </Toolbar>
      </AppBar>
     
      <Drawer     
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <Router>
          <div>
          <Link component={RouterLink} to="/">
          
            <ListItem button key={''}>
              <ListItemIcon> <HomeIcon/>  </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            
          
           </Link>
          </div>
        </Router>
        <Router>
          <div>
          <Link component={RouterLink} to="/projects">
          
            <ListItem button key={''}>
              <ListItemIcon> <WorkIcon/>  </ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItem>
            
          
           </Link>
          </div>
        </Router>
        <Router>
          <div>
          <Link component={RouterLink} to="/cybersecurity">
         
            <ListItem button key={''}>
              <ListItemIcon>  <SecurityIcon /> </ListItemIcon>
              <ListItemText primary={'Cyber Security'} />
            </ListItem>
            
                   
        </Link>    
          </div>
        </Router>
        <Divider />
        <Router>
          <div>
          <Link underline="none" component={RouterLink} to="/contactme">
         
            <ListItem button key={''}>
              <ListItemIcon> <AlternateEmailIcon /></ListItemIcon>
              <ListItemText primary={'Contact Me/Resume'} />
            </ListItem>
          
        </Link >
          </div>
        </Router>       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
       
      </main>
    </div>
  );
}
