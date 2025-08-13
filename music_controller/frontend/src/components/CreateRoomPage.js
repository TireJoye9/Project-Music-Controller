import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes
        };

        //- binded method to this class -just so inside of this method we have access to "this" keyword
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
    }

    handleVotesChange(e) {
        this.setState({
            votesToSkip: e.target.value
        });
    }
    handleGuestCanPauseChange(e) {
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false,
        });
    }
    handleRoomButtonPressed()
    {
        console.log(this.state)
    }

    render() {
    return (
        <div>
       <Grid container spacing ={1}>
         <Grid item xs={12} align="center">
            <Typography component='h4' variant ='h4'>
                Create A Room
            </Typography>
         </Grid>
         <Grid item xs={12} align="center">
            <FormControl component ="fieldset">
                <FormHelperText>
                    <div align='center'>
                        Guest Control of Playback State
                    </div>
                </FormHelperText>
                <RadioGroup row defaultValue="True" onChange={this.handleGuestCanPauseChange}>
                    <FormControlLabel 
                    value="true" 
                    control={<Radio color="primary"/>}
                    label="Play/Pause"
                    LabelPlacement="Bottom"/>
                
                    <FormControlLabel 
                    value="false" 
                    control={<Radio color="secondary"/>}
                    label="No control"
                    LabelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
         </Grid>
         <Grid item xs={12} align="center">
            <FormControl >
                <TextField 
                required={true} 
                type ="number" 
                onChange={this.handleVotesChange}
                defaultValue={this.defaultVotes} 
                inputProps=  {{
                    min:1,
                }}/>
                <FormHelperText>
                    <div align="center">
                        Votes Requried To Skip Songs
                    </div>
                </FormHelperText>
            </FormControl>
         </Grid>
         <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" onClick={this.handleRoomButtonPressed}>
                Create a room
                </Button>
         </Grid>
          <Grid item xs={12} align="center">
            <Button color="primary" variant='contained' to="/" component={Link}>
             Back
             </Button>
          </Grid>
        </Grid>

       </div>
    );
  }
}
