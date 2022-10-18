import React, {useState, useEffect} from "react";
import StoryList from '../components/StoryList';

const MainContainer = () => {
    const[stories, setStories] = useState([])

    useEffect(()=> {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(
                id => getTitleById(id)
            )
    }, [])

//     const handleSelectChange = ( character ) => {
//         const episodePromises = character.episode.map((episode) => {
//             return fetch (episode).then(res => res.json());
//         })
//         Promise.all(episodePromises)
//         .then((data) => {
//             setEpisodes(data);
//             setSelectedCharacter(character);
//         })
    
//         setSelectedCharacter( character );
//     }

//     return (
//         <div>
//             <h1>Characters</h1>
//             <CharacterSelect characters={ characters } handleSelectChange={ handleSelectChange } />
//             { selectedCharacter ? <CharacterDetail character={ selectedCharacter } episodes ={episodes}/> : null }
//         </div>
//     )
// }

// export default MainContainer


    
    const getTitleById = ( storyId ) => {
        const storyPromises = (storyId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.json() )
        }

        Promise.all(storyPromises)
            .then((data) => {setStories(data.title)  });
        

    }



    // console.log("this is stories");
    // console.log(stories);
    return (
        <div>
            <h1>Stories</h1>
            <StoryList stories={stories}/>
        </div>
    )
}

export default MainContainer

