import { useState, useEffect } from "react";


export const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error(error));
    }, [API])

    return videos;
}