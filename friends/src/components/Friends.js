import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

class Friends extends Component {

    componentDidMount = () => this.props.fetchFriends()

    render() {
        console.log(this.props)
        return (
        <div>
            { this.props.fetchingFriends && (<h1>Loading...</h1>)}
            { this.props.friendsFetched && this.props.friends.map( friend => (<h1 key={friend.id}>{friend.name}</h1>))}
        </div>
        )
    }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, { fetchFriends })(Friends)
