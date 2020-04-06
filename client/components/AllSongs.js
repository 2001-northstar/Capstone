import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSongs} from '../store/songs'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import useSound from 'use-sound'
import boopSfx from '../assets/boop.mp3'

const AllSongs = () => {
  const [play] = useSound(boopSfx, {volume: 0.05})

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
          <Fade top>
            <div className="col mx-5">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <Link to={`/songs/${song.id}`} onClick={play}>
                      <img
                        src="https://www.svgrepo.com/show/72278/piano.svg"
                        className="card-img px-3 py-5"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <Link to={`/songs/${song.id}`} onClick={play}>
                        <h2 className="card-title">{song.title}</h2>
                      </Link>
                      <h4 className="card-text">{song.artist}</h4>
                      <p className="card-text">Difficulty: {song.level}</p>
                      <p className="card-text">{song.description}</p>
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
