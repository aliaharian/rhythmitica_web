import { Button, Checkbox, FormControlLabel, useMediaQuery, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/privateLessons.module.scss'
import earthIcon from '../../assets/images/icons/earthAlt.svg'
import RhCheckbox from "../kits/RhCheckbox";
const PrivateLessonsSidebar = ({ packages, handleSelectPackage, selectedPackages }) => {
    console.log('packages', packages)
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down(1300));
    return (
        <div className={classes.privateLessonsSidebarContainer}>
            <div className={classes.privateLessonsSidebar}>
                <Button className={classes.openMapBtn} href={'/globe'}>
                    <img src={earthIcon} />
                    <p>{!isTablet && <>Click to See  <br /></>} All Musical Instruments</p>
                </Button>
                <div className={classes.packagesContainer}>
                    <div className={classes.packagesTitle}>
                        <p>Filters</p>
                    </div>
                    <div className={classes.packagesBody}>
                        <p>Category</p>
                        {packages.data.map((pkg) => (
                            <div key={pkg.id} className={classes.packageItem}>
                                <RhCheckbox
                                    label={pkg.name}
                                    checked={selectedPackages.indexOf(pkg.id) != -1}
                                    key={pkg.id}
                                    onChange={() => { handleSelectPackage(pkg.id) }}
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}
export default PrivateLessonsSidebar;