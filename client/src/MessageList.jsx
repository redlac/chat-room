import React from 'react';
import List from '@material-ui/core/List';
import { MessageListItem } from './MessageListItem';
import Typography from '@material-ui/core/Typography';

/**
 * Component to display all of the chat messages. 
 * @param {props} props from ChatWindow.jsx 
 */
export function MessageList(props) {
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