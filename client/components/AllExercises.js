import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchExercises} from '../store/exercises'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const AllExercises = () => {
  const dispatch = useDispatch()

  const {exercises} = useSelector(state => {
    return {exercises: state.exercises}
  })

  useEffect(() => {
    dispatch(fetchExercises())
  }, [])

  return (
    <div className="row">
      {exercises.map(exercise => (
        <DefaultDiv key={exercise.id}>
          <Fade bottom>
            <div className="col mx-5">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <Link to={`/exercise/${exercise.id}`}>
                      <img
                        src="/assets/exercise-notes-big.svg"
                        className="card-img px-3 py-5"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <Link to={`/exercise/${exercise.id}`}>
                        <h2 className="card-title">{exercise.name}</h2>
                      </Link>
                      <p className="card-text">{exercise.overview}</p>
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
export default AllExercises

const DefaultDiv = styled.div`
  width: 50%;
  margin-bottom: 20px;
`
