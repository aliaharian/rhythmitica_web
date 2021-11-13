import classes from '../../assets/styleSheets/kits/instructor.module.scss';
import clsx from 'clsx';
const Instructor = ({

    image,
    name,
    instrument,
    languages,
    sm
}) => {
    return (
        <div className={clsx(classes.instructorContainer, sm && classes.instructorContainerSm)}>
            <div className={classes.imageContainer}>
                <img src={image} />
                <div className={classes.languagesContainer}>
                    {
                        languages.map((lang) => (
                            <div className={classes.language}>{lang}</div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.dataContainer}>
                <h3>{name}</h3>
                <p>{instrument}</p>
            </div>
        </div>
    )
}
export default Instructor;