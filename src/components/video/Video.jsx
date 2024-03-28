import React, { useEffect, useRef } from 'react'
import Footer from '../footerLeft/FooterLeft'
import FooterRight from '../footerRight/FooterRight'
import './video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)

	const onVideoPress = () => {
		if (videoRef.current.paused) {
			videoRef.current.play()
		} else {
			videoRef.current.pause()
		}
	}

	return (
		<div className="video">
			<video
				className="player"
				onClick={onVideoPress}
				
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
