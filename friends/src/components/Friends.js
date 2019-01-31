import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Loader from 'react-loader-spinner'

class Friends extends Component {

    componentDidMount = () => this.props.fetchFriends()

    render() {
        return (
        <div>
            { this.props.fetchingFriends && (<Loader type="Oval" color="black" height="90" width="60" />)}
            { this.props.friendsFetched && this.props.friends.map( friend => (<h1 key={friend.id}>{friend.name}</h1>))}
        </div>
        )
    }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, { fetchFriends })(Friends)
