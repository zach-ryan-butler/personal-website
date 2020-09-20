import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import HeaderButtons from './HeaderButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    padding: "1em"
  }
}));

export default function Header() {
  let history = useHistory();

  const handleClick = pathURL => {
    history.push(pathURL);
  }

  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root} variant="dense">
          <Typography variant="h5" color="inherit">
            Zach Butler / software engineer
          </Typography>
        <HeaderButtons handleClick={handleClick}/>
      </Toolbar>
    </AppBar>
  )
}