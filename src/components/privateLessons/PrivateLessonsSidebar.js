import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/privateLessons.module.scss'
import earthIcon from '../../assets/images/icons/earthAlt.svg'
import RhCheckbox from "../kits/RhCheckbox";
const PrivateLessonsSidebar = ({ packages, handleSelectPackage, selectedPackages }) => {
    console.log('packages', packages)
    return (
        <div className={classes.privateLessonsSidebarContainer}>
            <div className={classes.privateLessonsSidebar}>
                <Button className={classes.openMapBtn}>
                    <img src={earthIcon} />
                    <p>Click to See  <br/> All Musical Instruments</p>
                </Button>
                <div className={classes.packagesContainer}>
                    <div className={classes.packagesTitle}>
                        <p>Filters</p>
                    </div>
                    <div className={classes.packagesBody}>
                        <p>Category</p>
                        {packages.data.map((pkg) => (
                            <div className={classes.packageItem}>
                                <RhCheckbox
                                    label={pkg.name}
                                    checked={selectedPackages.indexOf(pkg.id) != -1}
                                    key={pkg.id}
                                    onChange={() => { handleSelectPackage(pkg.id) }}
                                />
                            </div>
                        ))}
                        <div className={classes.packageItem}>
                            <RhCheckbox
                                label={'santoor'}
                                checked={selectedPackages.indexOf(0) != -1}
                                key={0}
                                onChange={() => { handleSelectPackage(0) }}
                            />
                        </div>
                        <div className={classes.packageItem}>
                            <RhCheckbox
                                label={'santoor'}
                                checked={selectedPackages.indexOf(0) != -1}
                                key={0}
                                onChange={() => { handleSelectPackage(0) }}
                            />
                        </div>
                        <div className={classes.packageItem}>
                            <RhCheckbox
                                label={'santoor'}
                                checked={selectedPackages.indexOf(0) != -1}
                                key={0}
                                onChange={() => { handleSelectPackage(0) }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default PrivateLessonsSidebar;