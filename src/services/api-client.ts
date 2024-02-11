import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "aef1794c7bf448468048dd0d97bf5221"
    }
})