import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions'


class AddFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: '',
        })
        console.log(this.state)
    }

    render() {
        return (
        <form onSubmit={this.addFriend}>
            <label>Name: </label>
            <input name="name" onChange={this.handleChanges} value={this.state.name} type="text" />
            <label>Age: </label>
            <input name="age" onChange={this.handleChanges} value={this.state.age} type="text" />
            <label>Email: </label>
            <input  name="email" onChange={this.handleChanges} value={this.state.email} type="text" />
            <button>Add Friend</button>
        </form>
        )
    }
}

const mapStateToProps = state => (
    {...state}
)

export default connect(mapStateToProps, {addFriend})(AddFriendForm)
