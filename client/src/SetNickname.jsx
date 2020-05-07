import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './scss/chat-window-styles.scss';

/**
 * Holds the text input to set the user's nickname. 
 * @param {props} props from ChatWindow.jsx 
 */
export function SetNickname(props) {

    const handleChange = (inputType, event) => {
        props.handleChange(inputType, event);
    };

    return (
        <>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={4}
                  >
                  <Grid container item justify="center">
                <TextField className={"nickname-field"} label="Enter a nickname here" variant="outlined" size="small" onChange={e => handleChange('nickname', e)} />
                </Grid>
                  <Grid item >
                </Grid>
            </Grid>
        </>
    );
}