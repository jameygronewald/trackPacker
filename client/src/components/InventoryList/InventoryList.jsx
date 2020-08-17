import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { UserContext } from "../../utils/UserContext";

const useStyles = makeStyles(theme => ({
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

  const { userData } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" className={classes.title}>
            Inventory
          </Typography>
          <div className={classes.demo}>
            <List>
              {userData &&
                userData.items &&
                userData.items.length > 0 &&
                userData.items
                  .filter(item => item.status === "Inventory")
                  .map(item => (
                    <>
                      <ListItem key={item._id}>
                        <ListItemText primary={item.name} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="update"
                            onClick={() => {
                              props.updateItem(item);
                            }}
                          >
                            <FavoriteBorderIcon
                              style={{
                                color: "#832d33",
                                borderColor: "#13160e",
                              }}
                            />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              props.deleteItem(item._id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </>
                  ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" className={classes.title}>
            Wishlist
          </Typography>
          <div className={classes.demo}>
            <List>
              {userData &&
                userData.items &&
                userData.items.length > 0 &&
                userData.items
                  .filter(item => item.status === "Wishlist")
                  .map(item => (
                    <>
                      <ListItem key={item._id}>
                        <ListItemText primary={item.name} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="update"
                            onClick={() => {
                              props.updateItem(item);
                            }}
                          >
                            <FavoriteIcon
                              style={{
                                color: "#832d33",
                                borderColor: "#13160e",
                              }}
                            />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              props.deleteItem(item._id);
                            }}
                          >
                            <DeleteIcon />
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
