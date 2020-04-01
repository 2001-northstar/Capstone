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
    <div className="row">
      {lessons.map(lesson => (
        <DefaultDiv key={lesson.id}>
          <div className="col-md">
            <div className="card mb-3">
              <img src="..." className="card-img-top" />
              <div className="card-body">
                <Link to={`/lesson/${lesson.id}`}>
                  <h5 className="card-title">{lesson.name}</h5>
                </Link>
                <p className="card-text">{lesson.overview}</p>
              </div>
            </div>
          </div>
        </DefaultDiv>
      ))}
    </div>
  )
}
export default AllLessons

const DefaultDiv = styled.div`
  width: 50%;
  height: 50%;
`
