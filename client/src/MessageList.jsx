import React from 'react';
import List from '@material-ui/core/List';
import { MessageListItem } from './MessageListItem';
import Typography from '@material-ui/core/Typography';

export function MessageList(props) {
    console.log(props.messages);
    return (
        <List className={'message-list'}>
            {
                props.messages.length > 0 ?
                    props.messages.map((message, index) =>
                        <MessageListItem key={index} bottomMessageRef={props.bottomMessageRef} message={message} nickNameColor={message.name === props.nickname ? props.nickNameColor : 'orange'} />
                    )
                    : <Typography color="secondary" variant="h5" align="center">No Messages to Display!</Typography>
            }
        </List>
    );

}