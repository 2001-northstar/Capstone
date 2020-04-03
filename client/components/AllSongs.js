import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchSongs} from '../store/songs'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

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
          <Fade bottom>
            <div className="col mx-5">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <Link to={`/songs/${song.id}`}>
                      <img
                        src="https://www.svgrepo.com/show/72278/piano.svg"
                        className="card-img px-3 py-5"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <Link to={`/songs/${song.id}`}>
                        <h2 className="card-title">{song.title}</h2>
                      </Link>
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
export default AllSongs

const DefaultDiv = styled.div`
  width: 50%;
  margin-bottom: 20px;
`
