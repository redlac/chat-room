import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './scss/chat-window-styles.scss';


export function MessageListItem(props) {

    const useStyles = makeStyles((theme) => ({

        nickname: {
            color: props.nickNameColor, 
        },
    }));

    const classes = useStyles();

    return (
        <ListItem divider ref={props.bottomMessageRef}> 
                    <ListItemAvatar>
                        <Avatar alt="user" src="https://www.selfstir.com/wp-content/uploads/2015/11/default-user.png" />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography
                            className={classes.nickname}
                            component="span">
                        {props.message.name} says 
                        </Typography>
                        {' ' + props.message.text}
                    </ListItemText>
        </ListItem>
    );
}