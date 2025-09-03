import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/user-in-room');
      const data = await response.json();
      if (data.code) {
        this.setState({ roomCode: data.code });
      }
    } catch (err) {
      console.error("Error fetching room:", err);
    }
  }

  render() {
    // Redirect if user is already in a room
    if (this.state.roomCode) {
      return <Navigate to={`/room/${this.state.roomCode}`} />;
    }

    // Otherwise show the homepage UI
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h3">Soirée</Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup variant="contained" color="primary">
              <Button color="primary" to='/join' component={Link}>
                Join a Room
              </Button>
              <Button color="secondary" to="/create" component={Link}>
                Create a Room
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
    );
  }
}