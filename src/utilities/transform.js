import React from "react";

const staffLangs = (input) => {
    try {
        let json = JSON.parse(input)
        let langArray = [];
        if (json.LanguagesSpoken) {
            let parsed = json.LanguagesSpoken.replace(/[-_,&/]/g, ' ')
            let arr = parsed.split(' ')
            arr.map((a, index) => {
                if (a != '') {
                    langArray.push(a.substring(0, 2));
                }
            })
            return langArray;
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
}

export default {
    staffLangs

};
