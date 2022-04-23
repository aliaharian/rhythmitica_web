import React, { useEffect, useState } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Instructor from "../kits/Instructor";
import { useMediaQuery, useTheme } from "@material-ui/core";
import transform from "../../utilities/transform";

const HomeInstructors = ({ categories }) => {
    const [selectedCat, setSelectedCat] = useState(0)
    const [selectedCatPackages, setSelectedCatPackages] = useState()

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down(1300));
    useEffect(() => {
        if (categories) {
            let tmp = []
            categories[0].packages.map((pack) => {
                tmp.push(pack.id);
            })
            setSelectedCatPackages([...tmp])
        }
    }, [])
    const handleChangeCategory = (cat, index) => {
        setSelectedCat(index);
        let tmp = []
        cat.packages.map((pack) => {
            tmp.push(pack.id);
        })
        setSelectedCatPackages([...tmp])
    }

    const handleGetCatInstructors = () => {
        let resArr = [];
        categories[selectedCat].packages.map((pack) => {
            pack.staff_packages.filter(function (item) {
                var i = resArr.findIndex(x => (x.staff_id == item.staff_id));
                if (i <= -1) {
                    resArr.push({ ...item, packName: pack.name });
                }
                return null;
            });
        });
        console.log('res', resArr)
        return resArr;
    }
    return (
        <div className={classes.instructorsContainer}>
            <h2 className={clsx(classes.sectionTitle, classes.instructorsTitle)}>Highly Skilled Instructors</h2>
            <div className={classes.categoriesContainer}>
                {
                    categories.map((cat, index) => (
                        <p key={index} onClick={() => handleChangeCategory(cat, index)} className={index == selectedCat ? classes.activeCat : ''}>{cat.name}</p>
                    ))
                }
            </div>
            <div className={classes.staffListContainer}>
                {

                    handleGetCatInstructors()?.map((staff, index) => {
                        // if (i < 5) {
                        // i++;
                        return (
                            <Link key={staff.staff_id} href={`/privateLessons/${staff.package_id}/${staff.staff_id}/${staff?.staff_user?.user?.name?.replace(/\s+/g, '-')}-${staff?.staff_user?.user?.family?.replace(/\s+/g, '-')}`}>
                                <a>
                                    <Instructor
                                        image={process.env.REACT_APP_IMAGE_URL + staff.staff_user.user.avatar}
                                        name={staff.staff_user.user.name}
                                        family={staff.staff_user.user.family}
                                        instrument={staff.packName}
                                        languages={transform.staffLangs(staff.staff_user.json)}
                                    />
                                </a>
                            </Link>
                        )
                        // }
                    })
                }
            </div>
            <Link href={`/privateLessons?packages=${selectedCatPackages?.toString()}`}>
                <a className={clsx(classes.moreBtn, classes.moreStaffBtn)} title="all staffs">
                    <div></div><div></div><div></div>
                </a>
            </Link>
        </div>
    )
}

export default HomeInstructors;