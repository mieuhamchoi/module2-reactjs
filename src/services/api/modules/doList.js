import axios from "axios";

export default {
    findAll: async () => {
        return await axios.get(process.env.REACT_APP_JSON_HOST + "/doList");
    },
    create: async (newDo) => {
        return await axios.post(process.env.REACT_APP_JSON_HOST + "/doList/", newDo);
    },
    delete: async (doId) => {
        return await axios.delete(process.env.REACT_APP_JSON_HOST + "/doList/" +  doId);
    },
    update: async (doId, doEdited) => {
        return await axios.put(process.env.REACT_APP_JSON_HOST + "/doList/" +  doId, doEdited);
    },
    updatePatch: async (doId, patchData) => {
        return await axios.patch(process.env.REACT_APP_JSON_HOST + "/doList/" +  doId, patchData);
    }
}