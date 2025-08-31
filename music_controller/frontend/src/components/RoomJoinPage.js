import React, { Component } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";




class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            roomCode: "",
            error: "",
        }
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.roomButtonPressed = this.roomButtonPressed.bind(this);
    }
    

     render() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <TextField
                error={this.state.error}
                label="Code"
                placeholder="Enter a Room Code"
                value={this.state.roomCode}
                helperText={this.state.error}
                variant="outlined"
                onChange={this.handleTextFieldChange}
                />
            </Grid>
             <Grid item xs={12} align="center">
                  <Button variant='contained' color="primary" onClick={this.roomButtonPressed}>
                    Enter Room
                  </Button>
             </Grid>
              <Grid item xs={12} align="center">
                <Button variant='contained' color="secondary" to="/" component={Link}>Back
                </Button>
              </Grid>
        </Grid>
        
    );
  }

  handleTextFieldChange(e) {
    this.setState({
        roomCode: e.target.value,
    })
  }
  //post request to backend to check if room exists
  roomButtonPressed() {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            code: this.state.roomCode
        })
    };
    fetch('/api/join', requestOptions).then((response) => {
        if (response.ok){
            this.props.navigate(`/room/${this.state.roomCode}`)
        } else {
            this.setState({error: "Room not found."})
        }
    }).catch((error) => {
        console.log(error);
    });
  }
}

//copied straight from my CreateRoomPage
// Wrapper to inject navigate
//  might change to function as inject wrappers for my classes is a bit redundant
function WithNavigate(props) {
  let navigate = useNavigate();
  return <RoomJoinPage {...props} navigate={navigate} />;
}

export default WithNavigate;

