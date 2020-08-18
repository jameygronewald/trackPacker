import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { UserContext } from "../../utils/UserContext";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  root: {
    /* flexGrow: 1, */
    width: '100%'
    /* maxWidth: 752, */
  },
  demo: {
  
    backgroundColor: 'whitesmoke',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList(props) {
  const classes = useStyles();

  const { userData } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.demo}>
            <List >
              {userData.items && userData.items.map(item => (
                <div key={item._id}>
                  <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                  <ListItem>
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          props.addToExcursion(item._id);
                        }}
                      >
                        {item.status === "Wishlist" && (
                          <FavoriteIcon
                            style={{ paddingRight: "10px" }}
                          ></FavoriteIcon>
                        )}
                        <AddBoxIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  </Slide>
                </div>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
