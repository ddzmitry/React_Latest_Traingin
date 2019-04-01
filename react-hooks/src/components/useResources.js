// can be reused
import { useState, useEffect } from 'react'
import axios from 'axios';

const useResources = (resource) => {
    // init state
    const [resources, setResources] = useState([]);
    // will toggle "state" on change
    useEffect(() => {
        //  will trigger useEffect as soon as resource(state) will change
        //  Or can use this workaround 
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(response.data)
        })(resource)

    }, [resource])

    return resources;

}
export default  useResources;
