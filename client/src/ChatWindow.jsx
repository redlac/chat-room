import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import {SetNickname} from './SetNickname';
import Grid from '@material-ui/core/Grid';
import './scss/chat-window-styles.scss';
import { Divider } from '@material-ui/core';

/**
 * Contains chat window UI 
 * @param {props} props from App.js 
 */
export function ChatWindow(props) {
    return (
        <>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid container item xs={8}>
                    <SetNickname handleChange={props.handleChange} />
                </Grid>
                <Divider className={'chat-divider'}/>
                <Grid container justify="center">
                    {
                            <MessageList  messages={props.messages} nickNameColor={props.nickNameColor} nickname={props.nickname} bottomMessageRef={props.bottomMessageRef}/>
                    }
                </Grid>
                <Grid className={"message-input"} container item xs={12}>
                    <MessageInput  handleChange={props.handleChange} sendMessage={props.sendMessage}/>
                </Grid>
            </Grid>
        </>
    );
}