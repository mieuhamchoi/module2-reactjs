import axios from "axios";

export default {
    findAll: async () => {
        return await axios.get(process.env.REACT_APP_JSON_HOST + "/doStatusList");
    },
}