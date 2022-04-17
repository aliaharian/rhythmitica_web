import { Button } from '@material-ui/core';
import { useState } from 'react';
import classes from '../../assets/styleSheets/singleStaff.module.scss'
import YtPlayer from '../kits/YtPlayer';
import playIcon from '../../assets/images/icons/playIcon.svg'
import Image from 'next/image'

const SingleStaffVideos = ({ staffInfo }) => {
    const [play, setPlay] = useState(false)
    const [currVideo, setCurrVideo] = useState(staffInfo.staff_videos.length > 0 ? staffInfo.staff_videos[0] : null)
    const handlePlayVideo = () => {
        !play && setPlay(true)
    }
    const handleChangeVideo = (e) => {
        setPlay(false)
        setCurrVideo(e)
    }
    return (

        <div className={classes.staffVideo}>
            {
                staffInfo.staff_videos.length > 0 &&
                <>
                    <div className={classes.videoContainer} onClick={handlePlayVideo}>
                        {
                            play ?
                                <YtPlayer embedId={currVideo.link} />
                                :
                                <div className={classes.videoCover}>
                                    <Image layout='fill' objectFit='cover' alt='' src={`${process.env.REACT_APP_IMAGE_URL}${currVideo.cover}`} />
                                    <div className={classes.coverOverlay}>
                                        <div>
                                            <Image alt="" layout='fill' src={playIcon} />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className={classes.thumbsContainer}>
                        {staffInfo.staff_videos.map((video, index) => {
                            return (
                                <div key={index}>
                                    <Image
                                        layout='fill'
                                        objectFit='cover'
                                        alt=''
                                        onClick={() => handleChangeVideo(video)}
                                        src={`${process.env.REACT_APP_IMAGE_URL}${video.cover}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
};

export default SingleStaffVideos