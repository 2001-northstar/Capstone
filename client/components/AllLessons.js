import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchLessons} from '../store'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import useSound from 'use-sound'
import boopSfx from '../assets/boop.mp3'

const AllLessons = () => {
  const dispatch = useDispatch()

  const [play] = useSound(boopSfx, {volume: 0.05})

  const {lessons, user, progress} = useSelector(state => {
    return {lessons: state.lessons, user: state.user, progress: state.progress}
  })

  useEffect(() => {
    dispatch(fetchLessons())
  }, [])

  const progressArr = progress || []

  return (
    <div className="row">
      {lessons.map((lesson, i) => (
        <DefaultDiv key={lesson.id}>
          <Fade bottom>
            <div className="col mx-5">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <Link to={`/lesson/${lesson.id}`} onClick={play}>
                      <img
                        src="https://www.pngrepo.com/png/8331/180/sheet-music.png"
                        className="card-img px-3 py-5"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <Link to={`/lesson/${lesson.id}`} onClick={play}>
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
