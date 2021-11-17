import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/events.module.scss'
import earthIcon from '../../assets/images/icons/earthAlt.svg'
import RhCheckbox from "../kits/RhCheckbox";
import RhRadioButton from "../kits/RhRadioButton";
const EventsSidebar = ({
    packages,
    handleSelectPackage,
    selectedPackages,
    eventTypes,
    selectedEventType,
    handleSelectEventType
}) => {
    console.log('packages', packages)
    return (
        <div className={classes.eventsSidebarContainer}>
            <div className={classes.eventsSidebar}>
                <div className={classes.packagesContainer}>
                    <div className={classes.packagesTitle}>
                        <p>Filters</p>
                    </div>
                    <div className={classes.packagesBody}>
                        <div className={classes.packageItem}>
                            <RhRadioButton
                                label={'All Events'}
                                checked={selectedEventType == 0}
                                key={0}
                                onChange={() => { handleSelectEventType(0) }}
                                color={'green'}
                            />
                        </div>
                        {eventTypes.data.map((et) => (
                            <div className={classes.packageItem}>
                                <RhRadioButton
                                    label={et.event_type_name}
                                    checked={selectedEventType == et.id}
                                    key={et.id}
                                    onChange={() => { handleSelectEventType(et.id) }}
                                    color={'green'}
                                />
                            </div>
                        ))}

                        <p className={classes.bt}>Category</p>
                        {packages.data.map((pkg) => (
                            <div className={classes.packageItem}>
                                <RhCheckbox
                                    label={pkg.name}
                                    checked={selectedPackages.indexOf(pkg.id) != -1}
                                    key={pkg.id}
                                    color={'green'}
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
export default EventsSidebar;