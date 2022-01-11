import classes from '../../assets/styleSheets/kits/instructor.module.scss';
import clsx from 'clsx';
import { useMediaQuery, useTheme } from '@material-ui/core';
const Instructor = ({

    image,
    name,
    instrument,
    languages,
    family,
    sm,
    disableLangs,
    imageBorder,
    nameBgColorTransparent
}) => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down(1300));
    return (
        <div className={clsx(classes.instructorContainer, sm && classes.instructorContainerSm)}>
            <div className={classes.imageContainer} style={imageBorder?{borderColor:imageBorder}:{}}>
                <img src={image} />
                {!disableLangs &&
                    <div className={classes.languagesContainer}>
                        {
                            languages.map((lang) => (
                                <div className={classes.language}>{lang}</div>
                            ))
                        }
                    </div>}
            </div>
            <div className={clsx(classes.dataContainer , nameBgColorTransparent&&classes.nameBgColorTransparent)}>
                {
                    // md ?
                    //     <h3>{name}<br /> {family}</h3>

                    //     :
                    <h3>{name} {family}</h3>

                }
                <p>{instrument}</p>
            </div>
        </div>
    )
}
export default Instructor;