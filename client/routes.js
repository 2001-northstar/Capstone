import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Keyboard,
  Lesson,
  AllLessons,
  AllSongs,
  UserAnalytics,
  NoteContainer,
  AllExercises,
  SingleExercise
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/songs" component={AllSongs} />
        <Route exact path="/songs/:id" component={NoteContainer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          exact
          path="/"
          render={props => <Keyboard {...props} highlightedNotes={[]} />}
        />
        <Route exact path="/exercise" component={AllExercises} />
        <Route exact path="/exercise/:id" component={SingleExercise} />
        <Route exact path="/lesson" component={AllLessons} />
        <Route exact path="/lesson/:id" component={Lesson} />
        <Route path="/exercise/:id" component={SingleExercise} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route
              exact
              path="/"
              render={props => <Keyboard {...props} highlightedNotes={[]} />}
            />
            <Route exact path="/exercise" component={AllExercises} />
            <Route exact path="/exercise/:id" component={SingleExercise} />
            <Route exact path="/lesson" component={AllLessons} />
            <Route exact path="/lesson/:id" component={Lesson} />
            <Route path="/exercise/:id" component={SingleExercise} />
            <Route exact path="/songs" component={AllSongs} />
            <Route exact path="/songs/:id" component={NoteContainer} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
