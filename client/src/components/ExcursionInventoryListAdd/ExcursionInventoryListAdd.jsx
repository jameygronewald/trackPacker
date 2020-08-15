import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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

export default function InteractiveList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.demo}>
            <List>
              {props.inventory
                .map((item) => (
                  <>
                    <ListItem>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                        {item.status === "Wishlist" && (<FavoriteIcon style={{paddingRight: "10px"}}></FavoriteIcon>)}
                          <AddBoxIcon
                            onClick={() => {
                              props.addToExcursion(item._id);
                            }}
                          />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}