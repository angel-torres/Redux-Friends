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
            <div style={{display:"flex", width:"800px", flexWrap:"wrap", margin:"auto", justifyContent:"center"}}>
                { this.props.friendsFetched && this.props.friends.map( friend => (
                    <div key={friend.id} className="card text-white bg-dark mb-3" style={{margin:"20px", width:"25%"}}>
                        <h1 className="card-header">{friend.name}</h1>
                        <p className="card-title">{friend.email}</p>
                        <p className="card-title">{friend.age}</p>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, { fetchFriends })(Friends)
