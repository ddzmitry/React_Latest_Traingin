import React  from 'react'
import useResources from './useResources';


const ResourceList = ({ resource }) => {

    const resources = useResources(resource)
    return (
        <ul>
            {resources.map(record => <li key={record.id}> {record.title || record.name} </li>)}
        </ul>
    )
}


export default ResourceList;
