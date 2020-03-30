import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchLessons} from '../store/lessons'
import styled from 'styled-components'

const AllLessons = () => {
  const dispatch = useDispatch()

  const {lessons, user} = useSelector(state => {
    return {lessons: state.lessons, user: state.user}
  })

  useEffect(() => {
    dispatch(fetchLessons())
  }, [])

  return (
    <div className="lessons-container">
      <ul className="list-group">
        {lessons.map(lesson => (
          <div key={lesson.id}>
            <Link to={`/lesson/${lesson.id}`}>
              <li className="list-group-item">{lesson.name}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default AllLessons
