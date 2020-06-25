import axios from "axios";

export const getGenre = () => dispatch => {
    console.log("thunk running");
    dispatch({
        type: "FETCHING_GENRE_START"
    })
    axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
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