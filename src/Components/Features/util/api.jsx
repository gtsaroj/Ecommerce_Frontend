import axios from "axios";

const param = {
    headers: {
        Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN
    }
}

export const fetch_api_data = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL + url, param)


    } catch (error) {
        console.log(`Get Error ${error}`)
        return error
    }
}