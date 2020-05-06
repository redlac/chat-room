import React from 'react';
import List from '@material-ui/core/List';
import {MessageListItem} from './MessageListItem';

export function MessageList(props){
    console.log(props.messages);
    return(
        <List className={'message-list'}>
            {
                props.messages && 
                props.messages.map((message, index) => 
                <MessageListItem key={index} message={message} nickNameColor={message.name === props.nickname ? props.nickNameColor : 'black'}/>
                )
            }
        </List>
    );

}