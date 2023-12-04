import React from 'react'
import { CssBaseline } from '@mui/material'
import {Route, Switch} from 'react-router-dom'

import { Actors , Movies, MovieInformation, Profile, NavBar } from './'

import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
          <Movies />
          </Route>
          <Route path="/profile/:id">
          <Profile />
          </Route>
          <Route exact path="/movie/:id">
          <MovieInformation />
          </Route>
          <Route path="/actors/:id">
          <Actors />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App