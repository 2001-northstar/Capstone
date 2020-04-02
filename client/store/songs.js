import axios from 'axios'

// action-types
const SET_SONGS = 'SET_SONGS'

// action-creators
const setSongs = songs => {
  return {
    type: SET_SONGS,
    songs
  }
}

// thunk-creators
export const fetchSongs = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/songs')
      dispatch(setSongs(data))
    } catch (err) {
      console.log('fetchSongs error', err)
    }
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.songs
    default:
      return state
  }
}
