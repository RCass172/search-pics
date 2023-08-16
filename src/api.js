import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:  {
            Authorization: process.env.REACT_APP_MYACCESSKEY
        },
        params: {
            query: 'trees'
        }
    });
    
    console.log(response);
    return response;
}

export default searchImages;