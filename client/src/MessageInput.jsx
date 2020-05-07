import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export function MessageInput(props) {

    const handleChange = (inputType, event) => {
        props.handleChange(inputType, event);
    };

    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={7}>
                    <TextField id="outlined-basic" label="Enter message here" variant="outlined" size="small" fullWidth onChange={e => handleChange('message', e)} />
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={() => props.sendMessage()}
                    >
                        Send
                </Button>
                </Grid>
            </Grid>
        </>
    );
}