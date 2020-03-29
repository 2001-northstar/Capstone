import React from 'react'
// import {editUser, deleteUser} from '../store/users'
import {useSelector} from 'react-redux' // import redux hooks
const UserPage = props => {
  const {user} = useSelector(state => {
    return {
      user: state.user
    }
  })

  if (!user) return <div>Loading...</div>
  console.log('user: ', user)

  return (
    <div>
      <h3>Name: {props.user.name}</h3>
    </div>
  )
}

export default UserPage
