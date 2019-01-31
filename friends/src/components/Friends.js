import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

class Friends extends Component {

    componentDidMount = () => this.props.fetchFriends()

    render() {
        return (
        <div>
            {this.props.friends.map( friend => (<h1>{friend.name}</h1>))}
        </div>
        )
    }
}

const mapStateToProps = state => ({friends: state.friends})

export default connect(mapStateToProps, { fetchFriends })(Friends)
