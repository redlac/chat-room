import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import {SetNickname} from './SetNickname';
import Grid from '@material-ui/core/Grid';
import './scss/chat-window-styles.scss';

export function ChatWindow(props) {
    console.log(props.messages);
    return (
        <>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid container item xs>
                    <SetNickname handleChange={props.handleChange} />
                </Grid>
                <Grid container justify="center">
                    <MessageList  messages={props.messages} nickNameColor={props.nickNameColor} nickname={props.nickname}/>
                </Grid>
                <Grid container item xs>
                    <MessageInput handleChange={props.handleChange} sendMessage={props.sendMessage}/>
                </Grid>
            </Grid>
        </>
    );
}