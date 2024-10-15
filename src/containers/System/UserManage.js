import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if(response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        // console.log('get user from nodejs', response)

    }
    /** Life cycle React
     *  Run component:
     * 1. Run construct -> init state
     * 2. Did mount (hàm này dùng khi cần gán giá trị cho state nếu dis mount ko có j  sẽ chạy tới render)
     * 3. render
     */

    render() {
        console.log('ckeck render: ', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className='users-container'>
                <div className="title text-center">Manage users</div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {
                                arrUsers && arrUsers.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
