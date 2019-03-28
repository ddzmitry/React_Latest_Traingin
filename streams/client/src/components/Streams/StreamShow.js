import React from 'react';
import { fetchStream } from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamShow extends React.Component {

    componentDidMount = () => {

        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }
        const { title, description } = this.props.stream;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }

}
const mapStateToProps = (state, ownState) => {
    return {
        stream: state.streams[ownState.match.params.id],
    }

}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
