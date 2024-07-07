
import useMovieTrailer from '../hooks/useMovieTrailer'
import {  useSelector } from 'react-redux'


const VideoTitle = ({id}) => {

  useMovieTrailer(id)


  

  const trailerVideo = useSelector((store)=>
   store?.movies?.trailerVideo
   )



  return (
    <div className='right-0  w-full absolute '>
     <iframe
        className=' w-full aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=infinite`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />


    </div>
  )
}

export default VideoTitle