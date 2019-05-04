import React, { Component } from 'react';
import { list } from '../actions/restActions'
class UserListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'user list',
            curPage: 1,
            pageSize: 3,
            allCount: 0,
            goPage: '',
            userList: []
        }
    }

    componentDidMount = () => {
        console.log('init list users')
        const { curPage, pageSize } = this.state
        list(curPage, pageSize, this.successHandler, this.failedHandler)
    }

    successHandler = (result) => {
        console.log('success list', result);
        let { payload = {} } = result
        let { curPage, pageSize, allCount, lists } = payload
        this.setState({
            userList: lists,
            curPage: curPage,
            pageSize: pageSize,
            allCount: allCount,
        })
    }

    failedHandler = (e) => {
        console.log('list user became error', e)
    }

    onPrePage = () => {
        console.log('previous page');
        let { curPage, pageSize } = this.state;
        if (curPage > 1) {
            curPage--;
            this.setState({ curPage });
            list(curPage, pageSize, this.successHandler, this.failedHandler)
        }
    }
    onNextPage = () => {
        console.log('next page');
        let { curPage, pageSize, allCount } = this.state;
        let allPages = Math.ceil(allCount / pageSize);
        if (curPage < allPages) {
            curPage++;
            this.setState({ curPage });
            list(curPage, pageSize, this.successHandler, this.failedHandler)
        }
    }

    onSizeChange = (evt) => {
        console.log('on SizeChange', evt.target.value);
        this.setState({ pageSize: evt.target.value });

    }

    onGoPageChange = (evt) => {
        console.log('on Go PageChange', evt.target.value);
        this.setState({ goPage: evt.target.value });
    }

    onGoToPage = () => {
        console.log('on Go page');
        let {pageSize, allCount, goPage } = this.state;
        let allPages = Math.ceil(allCount / pageSize);
        if (goPage >= 1 && goPage <= allPages) {
            list(goPage, pageSize, this.successHandler, this.failedHandler)
            this.setState({ curpage: goPage, goPage: '' });
        }
    }

    render() {
        const { userList, curPage, pageSize, goPage, allCount } = this.state;
        return (
            <div >
                <h3>Hello User List Page</h3>
                <div>
                    <button onClick={this.onPrePage}>prePage</button>
                    <span>&nbsp;curPage:&nbsp; {curPage}</span>
                    <button onClick={this.onNextPage}>nextPage</button>
                    <span>&nbsp;pageSize:&nbsp;</span>
                    <select onChange={this.onSizeChange} defaultValue={pageSize}>
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                    </select>
                    <span>&nbsp;totalCount:&nbsp; {allCount}</span>
                    <span>&nbsp;Go:&nbsp; </span>
                    <input onChange={this.onGoPageChange} value={goPage}></input>
                    <button onClick={this.onGoToPage}>gotoPage</button>
                </div>
                <ul>
                    <li key='0'><span>userId</span>---<span>userName</span>---<span>phone</span></li>
                    {
                        userList.map((user, idx) => {
                            return (
                                <li key={idx}><span>{user.userId}</span>---<span>{user.userName}</span>---<span>{user.phone}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default UserListPage;