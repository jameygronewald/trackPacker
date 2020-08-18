import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
export default function InteractiveList({ itemName, itemId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div className={classes.demo} >
            <List style={{opacity: '0.8'}}>
              
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <ListItem>
                  <ListItemText primary={itemName} />
                  <ListItemSecondaryAction>
                    {/* <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        deleteFromExcursion(itemId);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton> */}
                  </ListItemSecondaryAction>
                </ListItem>
                </Slide>
             
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
