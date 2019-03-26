import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream} from '../../actions'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
        
    }
    deleteStream =() => {
        this.props.deleteStream(this.props.match.params.id)
    }
    renderActions =() => {
            return (
                <React.Fragment>
                    <Link to="/" className="ui button negative">Cancel</Link>
                    <button  onClick={this.deleteStream} className="ui button">Delete</button>
                </React.Fragment>
            )
    }
    renderContent = () => {

        if (!this.props.stream) {
            return "Are you sure you want to delete stream?"
        }
        return `Are you sure you want to delete ${this.props.stream.title}`
    }
    render() {
        
        return (
            <div>
            <Modal
                    onDismiss={() => history.push('/')}
                    actions={this.renderActions()}
                    title="Stream Delete"
                    content={this.renderContent()}/>
            </div>

        )
    }



};
const mapStateToProps = (state,ownProps) => {

    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps, { deleteStream, fetchStream})(StreamDelete);
