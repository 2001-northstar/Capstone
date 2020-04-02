import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchSongs} from '../store/songs'
import styled from 'styled-components'

const AllSongs = () => {
  const dispatch = useDispatch()

  const {songs} = useSelector(state => {
    return {songs: state.songs}
  })

  useEffect(() => {
    dispatch(fetchSongs())
  }, [])

  return (
    <div className="row">
      {songs.map(song => (
        <DefaultDiv key={song.id}>
          <div className="col">
            <div className="card text-center">
              <Link to={`/songs/${song.id}`}>
                <img
                  src="https://www.svgrepo.com/show/72278/piano.svg"
                  className="card-img mx-10 my-10"
                  height="100em"
                  width="100em"
                />
              </Link>
              <div className="card-body">
                <Link to={`/songs/${song.id}`}>
                  <h2 className="card-title">{song.title}</h2>
                </Link>
              </div>
            </div>
          </div>
        </DefaultDiv>
      ))}
    </div>
  )
}
export default AllSongs

const DefaultDiv = styled.div`
  width: 50%;
  height: 50%;
`
