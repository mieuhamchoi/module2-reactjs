import axios from "axios";

export default {
    create: (newPost) => {
        return axios.post(process.env.REACT_APP_JSON_HOST + "/posts", newPost);
    },
    findAll: () => {
        return axios.get(process.env.REACT_APP_JSON_HOST + "/posts");
    },
    findById: (postId) => {
        return axios.get(process.env.REACT_APP_JSON_HOST + "/posts/" + postId);
    },
    deleteById: (postId) => {
        return axios.delete(process.env.REACT_APP_JSON_HOST + "/posts/" + postId);
    },
    updateById: (postId, postEdited) => {
        return axios.put(process.env.REACT_APP_JSON_HOST + "/posts/" + postId, postEdited);
    },
    updatePathById: (postId, patchData) => {
        return axios.patch(process.env.REACT_APP_JSON_HOST + "/posts/" + postId, patchData);
    },
}