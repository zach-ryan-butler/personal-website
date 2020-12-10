import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import MyImg from './IMG_4884 copy.png';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  gridItem: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: '10vh',
    marginBottom: '10vh'
  },
  media: {
    height: '250px',
    width: '250px',
    borderRadius: '50%',
    marginTop: '20px'
  },
  divider: {
    margin: '.8em'
  },
  iconButtons: {
    justifyContent: 'center'
  }
});

export default function Home() {
  const classes = useStyles();

  let history = useHistory();

  const handleClick = pathURL => {
    history.push(pathURL);
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={3} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            className={classes.media}
            src={MyImg}
          />
          <CardContent>
            <Typography variant="h6" align="center">
              Zach
            </Typography>
            <Typography variant="h6" align="center">
              Butler
            </Typography>
            <Divider variant="middle" className={classes.divider}/>
            <Typography align="center">
              Software Engineer
            </Typography>
          </CardContent>
          <CardActions className={classes.iconButtons}>
            <Link href="https://github.com/zach-ryan-butler">
              <IconButton aria-label="github link">
                <GitHubIcon/>
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/zach-ryan-butler/">
              <IconButton aria-label="Linkedin link">
                <LinkedInIcon/>
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={3} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h2" gutterBottom align="center">
              Hello
            </Typography>
            <Typography variant="h6" align="center">
              this is who i am & what i do
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={() => handleClick('/experience')}>Experience</Button>
            <Button variant="contained" color="secondary" onClick={() => handleClick('/contact')}>Contact</Button>
          </CardActions>
          <CardContent>
            <Typography align="center">
              I am a full stack javascript engineer with experience building user focused, data driven web applications and microservices by writing clean, thoroughly tested code.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}