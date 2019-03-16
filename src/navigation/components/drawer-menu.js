import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            // backgroundColor: theme.palette.gainsboro,
            // '& $primary, & $icon': {
            //   color: theme.palette.common.white,
            // },
        },
    },
    primary: {},
    icon: {},
});

const DrawerMenu = ({ text, path, is_md_up, icon: Icon, onClick, classes }) => {
    return (
        <ListItem
            className={classes.menuItem}
            button
            onClick={() => {
                onClick(path, is_md_up);
            }}
        >
            <ListItemIcon>
                <FontAwesomeIcon icon={Icon} fixedWidth />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};

export default withStyles(styles)(DrawerMenu);
