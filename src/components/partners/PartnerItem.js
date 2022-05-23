import classes from '../../assets/styleSheets/partners.module.scss'
import Link from 'next/link';
import { Button } from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image'

const PartnerItem = ({
    partner
}) => {
    return (
        <div className={classes.partnerItemContainer}>
            <div className={classes.partnerItem}>
                <div className={classes.partnerItemImage}>
                    <Image loading="eager" layout="fill" alt="" src={partner.image} />
                </div>
                <div className={classes.partnerInfo}>
                    <div>
                        <h3>{partner.title}</h3>
                        <p>{partner.desc}</p>
                    </div>
                    <Link href={partner.link}>
                        <a>
                            <Button>
                                <ChevronRightIcon />
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PartnerItem;
