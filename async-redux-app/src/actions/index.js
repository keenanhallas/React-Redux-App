import axios from "axios";

export const getGenre = () => dispatch => {
    dispatch({
        type: "FETCHING_GENRE_START"
    })
    axios.get("https://binaryjazz.us/wp-json/genrenator/v1")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: "FETCHING_GENRE_SUCCESS",
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: "FETCHING_GENRE_FAILURE",
                payload: err
            });
        });
}