import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.gainsboro,
            '& $primary, & $icon': {
              color: theme.palette.common.white,
            },
        },
    },
    primary: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "1.2857142857142858rem",
        fontWeight: 700,
        fontFamily: "ThaiSansNeue",
        lineHeight: "1.5em",
    },
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
            <ListItemText disableTypography={true} className={classes.primary}>{text}</ListItemText>
        </ListItem>
    );
};

export default withStyles(styles)(DrawerMenu);
