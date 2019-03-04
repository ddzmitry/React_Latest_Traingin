import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getuser } from '../../actions';
class UserHeader extends Component {


    componentDidMount = () => {
        this.props.getuser(this.props.userId)
    }
    render() {
        const {user} = this.props;
        return (
            <div className="header">
                {user ? user.username : 'poop'}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps, { getuser })(UserHeader)
