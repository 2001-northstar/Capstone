import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchLessons, fetchUserProgress} from '../store'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const AllLessons = () => {
  const dispatch = useDispatch()

  const {lessons, user, progress} = useSelector(state => {
    return {lessons: state.lessons, user: state.user, progress: state.progress}
  })

  useEffect(() => {
    dispatch(fetchUserProgress())
    dispatch(fetchLessons())
  }, [])

  const progressArr = progress || [
    {completed: false},
    {completed: false},
    {completed: false}
  ]

  return (
    <div className="row">
      {lessons.map((lesson, i) => (
        <DefaultDiv key={lesson.id}>
          <Fade bottom>
            <div className="col mx-5">
              {/* <div className="card text-center">
              <Link to={`/lesson/${lesson.id}`}>
                <img
                  src="https://www.svgrepo.com/show/72278/piano.svg"
                  className="card-img mx-10 my-10"
                  height="100em"
                  width="100em"
                />
              </Link>
              <div className="card-body">
                <Link to={`/lesson/${lesson.id}`}>
                  <h2 className="card-title">{lesson.name}</h2>
                </Link>
                <p className="card-text">{lesson.overview}</p>
              </div>
            </div> */}
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <Link to={`/lesson/${lesson.id}`}>
                      <img
                        src="https://www.pngrepo.com/png/8331/180/sheet-music.png"
                        className="card-img px-3 py-5"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <Link to={`/lesson/${lesson.id}`}>
                        <h2 className="card-title">{lesson.name}</h2>
                      </Link>
                      <p className="card-text">{lesson.overview}</p>
                      {progressArr[i].completed ? (
                        <span>Complete!</span>
                      ) : (
                        <span>Incomplete</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </DefaultDiv>
      ))}
    </div>
  )
}
export default AllLessons

const DefaultDiv = styled.div`
  width: 50%;
  margin-bottom: 20px;
`
