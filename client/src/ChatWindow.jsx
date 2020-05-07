import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import {SetNickname} from './SetNickname';
import Grid from '@material-ui/core/Grid';
import './scss/chat-window-styles.scss';
import { Divider } from '@material-ui/core';

export function ChatWindow(props) {
    console.log(props.messages);
    return (
        <>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid container item xs>
                    <h1>Amazing Real-Time Chat</h1>
                </Grid>
                <Grid container item xs={6}>
                    <SetNickname handleChange={props.handleChange} />
                </Grid>
                <Divider className={'chat-divider'}/>
                <Grid container justify="center">
                    {
                            <MessageList  messages={props.messages} nickNameColor={props.nickNameColor} nickname={props.nickname} bottomMessageRef={props.bottomMessageRef}/>
                    }
                </Grid>
                <Grid className={"message-input"} container item xs>
                    <MessageInput  handleChange={props.handleChange} sendMessage={props.sendMessage}/>
                </Grid>
            </Grid>
        </>
    );
}