import React, { Component } from 'react'

export class Image extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans:0}
    }
    
    componentDidMount = () => {
        // wait till image be rendered
      this.imageRef.current.addEventListener('load',this.setSpans)
            }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        console.log(spans)
        this.setState({spans})
    }


    render() {
        const { description, urls } = this.props
        return (

            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef} 
                    alt={description}
                    src={urls.regular} 
                    className="ui medium rounded image"
                    />
            </div>
        )
    }
}

export default Image
