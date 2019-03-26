import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {

    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }
    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        } else {
            // or use lodash _.pick(this.props.stream,'title','descript)
            const { title, description } = this.props.stream
            return <StreamForm onSubmit={this.onSubmit} initialValues={{ title, description }} />
        }
    }

};
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],

    }
}
export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);

