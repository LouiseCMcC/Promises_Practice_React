import React, {useState, useEffect} from "react";
import StoryList from '../components/StoryList';

const MainContainer = () => {
    const[stories, setStories] = useState([])

    useEffect(()=> {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then((data) => {
                const newData = data.slice(0,20);
                const promises = newData.map((storyId) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                    .then(res => res.json() )
                });
        
                Promise.all(promises)
                    .then((data) => {
                        setStories(data);
                    });
                
                })
    }, [])

    // console.log("this is stories");
    // console.log(stories);
    return (
        <div>
            <h1>Stories</h1>
            {/* <StoryList stories={stories}/> */}
        </div>
    )
}

export default MainContainer;

// I've commented out the <StoryList line at the bottom cos something in there is breaking it. But the 2nd level of data is being pulled and you can see it  in the state.





