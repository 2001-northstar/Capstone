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
      {lessons.map(lesson => (
        <div key={lesson.id}>
          <div className="card mb-3">
            <img src="..." className="card-img-top" />
            <div className="card-body">
              <Link to={`/lesson/${lesson.id}`}>
                <div className="card-title">{lesson.name}</div>
              </Link>
              <p className="card-text">{lesson.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AllLessons
