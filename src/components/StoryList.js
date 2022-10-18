import React from "react";
import ListItem from './ListItem';

const StoryList = (({stories}) => {

    const storyItems = stories.map((story, index) => {
        return (
            <ListItem key={index} story={story}/>
        )
    })

    return (
        <div>
            <h3>Story List</h3>
            <ul>
                {storyItems}
            </ul>
        </div>
    )
})

export default StoryList