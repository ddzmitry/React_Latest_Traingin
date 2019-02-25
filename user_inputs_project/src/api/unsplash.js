import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",

    headers: {
        Authorization: 'Client - ID 26c98f4d358393e6282d34c18315f25fc951faf5131f44775fd40e9d0a152815'
    }
})
