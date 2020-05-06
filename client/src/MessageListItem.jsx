import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

export function MessageListItem(props) {
    return (
        <ListItem divider> 
                    <ListItemAvatar>
                        <Avatar alt="user" src="https://www.selfstir.com/wp-content/uploads/2015/11/default-user.png" />
                    </ListItemAvatar>
                    <ListItemText>
                        {props.message.text}
                    </ListItemText>
        </ListItem>
    );
}