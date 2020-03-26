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
}

export default AllLessons

const DefaultDiv = styled.div`
  max-width: 18rem;
  max-height: 25rem;
`
