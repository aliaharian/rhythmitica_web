import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaffList } from "../../../redux/privateLessons/Actions";
import classes from '../../assets/styleSheets/privateLessons.module.scss'
import PrivateLessonsHeader from "./PrivateLessonsHeader";
import PrivateLessonsSidebar from "./PrivateLessonsSidebar";
import StaffsList from "./StaffsList";
import staffsList from "./StaffsList";
const PrivateLessons = ({ packages, params }) => {
    const staffs = useSelector((state) => state.privateLessons.staffs);
    const [selectedPackages, setSelectedPackages] = useState(params ? params.split(",") : []);
    const [filter, setFilter] = useState();
    const [q, setQ] = useState('')
    const Dispatch = useDispatch();
    console.log('staffs', staffs)
    console.log('params', params)
    console.log('selectedPackages', selectedPackages)
    useEffect(() => {
        if (params) {
            var items = params.split(',').map(function (item) {
                return parseInt(item);
            });
            setSelectedPackages([...items]);
        }
    }, [])
    const handleSelectPackage = (id) => {
        let index = selectedPackages.indexOf(id);
        let packagesTmp;
        if (index == -1) {
            setSelectedPackages([...selectedPackages, id]);
            packagesTmp = [...selectedPackages, id]

        } else {
            let tmp = selectedPackages;
            tmp.splice(index, 1);
            setSelectedPackages([...tmp]);
            packagesTmp = [...tmp];
        }

        Dispatch(getStaffList(false, null, { q: q, sort: filter, package_ids: packagesTmp.toString() }, 0))

    }
    const handleSearch = (force = false) => {
        if (force == true) {
            console.log('force')
            Dispatch(getStaffList(false, null, { q: '', sort: filter, package_ids: selectedPackages.toString() }, 0))
        } else {
            console.log('no force')

            handlePaginate()
        }
    }
    const handleChangeFilter = (filterp) => {

        if (filterp === filter) {
            setFilter(null)
        } else {
            setFilter(filterp)
        }
        Dispatch(getStaffList(false, null, { q: q, sort: filterp === filter ? null : filterp, package_ids: selectedPackages.toString() }, 0))
    }

    // useEffect(() => {
    //     handlePaginate()
    // }, [filter, selectedPackages])


    const handlePaginate = (page = 0) => {
        Dispatch(getStaffList(false, null, { q: q, sort: filter, package_ids: selectedPackages.toString() }, page))
    }
    return (
        <div className={classes.privateLessonsMainContainer}>
            <PrivateLessonsSidebar
                packages={packages}
                handleSelectPackage={handleSelectPackage}
                selectedPackages={selectedPackages}
            />
            <div className={classes.staffsContainer}>
                <PrivateLessonsHeader
                    handleChangeFilter={handleChangeFilter}
                    filter={filter}
                    _handleSearch={handleSearch}
                    q={q}
                    setQ={setQ}
                />
                <StaffsList handlePaginate={handlePaginate} />
            </div>
        </div>
    )
}
export default PrivateLessons;