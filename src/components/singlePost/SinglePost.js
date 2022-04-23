import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import classes from '../../assets/styleSheets/singlePost.module.scss';
import ShareIcon from '@mui/icons-material/Share';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import DateRangeIcon from '@mui/icons-material/DateRange';
import moment from 'moment'
import Image from 'next/image'

const SinglePost = ({ postInfo }) => {
    console.log(postInfo)
    const [banner, setBanner] = useState(process.env.REACT_APP_IMAGE_URL + postInfo.banner)
    useEffect(() => {
        if (postInfo.json) {
            let json = JSON.parse(postInfo.json)
            if (json.main_banner) {
                setBanner(process.env.REACT_APP_IMAGE_URL + json.main_banner)
            } else {
                setBanner(process.env.REACT_APP_IMAGE_URL + postInfo.banner)
            }
        } else {
            setBanner(process.env.REACT_APP_IMAGE_URL + postInfo.banner)
        }
    }, [])
    return (<>
        <div className={classes.singlePostHeader}>
            <Image layout="fill" objectFit='cover' src={banner} />

        </div>
        <div className={classes.singlePostBody}>
            <div className={classes.shareFloatBtn}>
                <Button>
                    <ShareIcon />
                </Button>
                <div className={classes.shareList}>
                    <Button>
                        <TelegramIcon />
                    </Button>
                    <Button>
                        <PinterestIcon />
                    </Button>
                    <Button>
                        <FacebookIcon />
                    </Button>
                    <Button>
                        <TwitterIcon />
                    </Button>
                </div>
            </div>
            <h2>{postInfo.title}</h2>
            <div className={classes.postDate}>
                <DateRangeIcon />
                <p>{moment(postInfo.created_at).format('d MMMM yy')}</p>
            </div>
            <div className={classes.postDesc} dangerouslySetInnerHTML={{ __html: postInfo.body }} ></div>
        </div>
    </>
    )
}


export default SinglePost;