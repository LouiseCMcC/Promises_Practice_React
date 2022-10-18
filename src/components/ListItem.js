import React from "react";

const ListItem = (({key, story}) => {

    return (
        <li>
            {story}
        </li>
    )

})

export default ListItem