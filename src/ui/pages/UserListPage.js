import React, { Component } from 'react';
import { list } from '../actions/restActions'
class UserListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'user list',
            userList: []
        }
    }

    componentDidMount = () => {
        console.log('init list users')
        let userList = list()
        this.setState({ userList })
    }
    render() {
        const { userList } = this.state;
        return (
            <div >
                <h3>Hello User List Page</h3>
                <ul>
                    {
                        userList.map((user, idx) => {
                            return (
                                <li key={idx}><span>{user.userName}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default UserListPage;