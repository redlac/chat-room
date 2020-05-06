import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';

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
                  <Grid item xs={6}>
                <TextField id="outlined-basic" label="Enter a nickname here" variant="outlined" size="small" fullWidth onChange={e => handleChange('nickname', e)} />
                </Grid>
                  <Grid item >
                </Grid>
            </Grid>
        </>
    );
}

/*
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<FaceIcon/>}
                    onClick={() => props.setNickname()}
                >
                   Set Nickname
                </Button>
                */