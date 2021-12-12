import React, { useState } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Instructor from "../kits/Instructor";
import { useMediaQuery, useTheme } from "@material-ui/core";
import transform from "../../utilities/transform";

const HomeInstructors = ({ categories }) => {
    console.log('categories', categories)
    const [selectedCat, setSelectedCat] = useState(0)
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down(1300));
    return (
        <div className={classes.instructorsContainer}>
            <h2 className={clsx(classes.sectionTitle, classes.instructorsTitle)}>Highly Skilled Instructors</h2>
            <div className={classes.categoriesContainer}>
                {
                    categories.map((cat, index) => (
                        <p onClick={() => setSelectedCat(index)} className={index == selectedCat && classes.activeCat}>{cat.name}</p>
                    ))
                }
            </div>
            <div className={classes.staffListContainer}>
                {
                    categories[selectedCat].packages.map((pack) => {
                        let resArr = [];
                        let i = 0;
                        pack.staff_packages.filter(function (item) {
                            var i = resArr.findIndex(x => (x.staff_id == item.staff_id));
                            if (i <= -1) {
                                resArr.push(item);
                            }
                            return null;
                        });
                        return resArr.map((staff) => {
                            let json = JSON.parse(staff.staff_user.json)
                            // let langArray = [];
                            // if (json.LanguagesSpoken) {
                            //     let parsed = json.LanguagesSpoken.replace(/[-_,&/]/g, ' ')
                            //     let arr = parsed.split(' ')
                            //     arr.map((a, index) => {
                            //         if (a != '') {
                            //             langArray.push(a.substring(0, 2));
                            //         }
                            //     })
                            // }
                            if (i < 5) {

                                i++;
                                return (
                                    <Link href={`privateLessons/${staff.staff_id}/${staff.package_id}`}>
                                        <a>
                                            <Instructor
                                                image={process.env.REACT_APP_IMAGE_URL + staff.staff_user.user.avatar}
                                                name={staff.staff_user.user.name}
                                                family={staff.staff_user.user.family}
                                                instrument={pack.name}
                                                languages={transform.staffLangs(staff.staff_user.json)}
                                            />
                                        </a>
                                    </Link>
                                )
                            }
                        })
                    })
                }
            </div>
            <Link href={"/privateLessons"}>
                <a className={clsx(classes.moreBtn, classes.moreStaffBtn)} title="all staffs">
                    <div></div><div></div><div></div>
                </a>
            </Link>
        </div>
    )
}

export default HomeInstructors;