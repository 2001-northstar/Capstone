import React, {useEffect} from 'react'
// import {editUser, deleteUser} from '../store/users'
import {useSelector, useDispatch} from 'react-redux' // import redux hooks
import {fetchScores} from '../store/score'

const Scores = props => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => {
    return {
      user: state.user,
      scores: state.scores
    }
  })

  useEffect(() => {
    dispatch(fetchScores(user.id))
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h3>Name</h3>
    </div>
  )
}

export default Scores
