import React from 'react'

const Image = (props) => {

    return (
      <div>
            <img alt={props.user.name} src={props.urls.regular}></img>
      </div>
    )

}

export default Image
