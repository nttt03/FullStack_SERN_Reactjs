import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { last } from 'lodash';
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
        }
    }

     async componentDidMount() {
        // 2 cách fire action
        // cách 1
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // get api thông thường
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('check gender: ', res)
        // } catch (e) {
        //     console.log(e)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: '',
                position: '',
                role: '',
                avatar: '',
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: file
            })
            // console.log('check file 0: ', objectUrl)
        }
        
    }

    openPreviewImage = () => {
        if(!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 
            'phoneNumber', 'address']
        for(let i=0; i<arrCheck.length; i++){
            if(!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log('check input onchange: ', this.state)
        })
        
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === false) return;
        // fire redux action
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position
        })
    }

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isGetGender = this.props.isLoadingGender;
        console.log('check props from redux: ', this.props.genderRedux)

        let { email, password, firstName, lastName, 
            phoneNumber, address, gender, position, role, avatar
        } = this.state;

        return (
            <div className='user-redux-container'>
                <div className="title" >User Redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div>{ isGetGender === true ? 'Loading Genders...' : '' }</div>

                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add"/></div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.email"/></label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(e) => { this.onChangeInput(e, 'email')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(e) => { this.onChangeInput(e, 'password')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.first-name"/></label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(e) => { this.onChangeInput(e, 'firstName')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.last-name"/></label>
                                <input className='form-control' type='text'
                                    value={lastName}
                                    onChange={(e) => { this.onChangeInput(e, 'lastName')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number"/></label>
                                <input className='form-control' type='text'
                                    value={phoneNumber}
                                    onChange={(e) => { this.onChangeInput(e, 'phoneNumber')}}
                                />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className='form-control' type='text'
                                    value={address}
                                    onChange={(e) => { this.onChangeInput(e, 'address')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className='form-control'
                                    onChange={(e) => { this.onChangeInput(e, 'gender')}}
                                >
                                    {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className='form-control'
                                    onChange={(e) => {this.onChangeInput(e, 'position')}}
                                >
                                    {positions && positions.length > 0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className='form-control'
                                    onChange={(e) => {this.onChangeInput(e, 'role')}}
                                >
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image"/></label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={ (event) => this.handleOnChangeImage(event) }
                                    />
                                    <label htmlFor='previewImg' className='lable-upload'>Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className='preview-image'
                                        style={{backgroundImage: `url(${this.state.previewImgURL})`}}
                                        onClick={ () => this.openPreviewImage() }
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 my-3'>
                                <button className='btn btn-primary my-3'
                                    onClick={() => this.handleSaveUser()}
                                ><FormattedMessage id="manage-user.save"/></button>
                            </div>
                            {/* --- table --- */}
                            <div className='col-12 mb-5'>
                                <TableManageUser/>
                            </div>

                        </div>
                    </div>
                </div>

                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}  
                    /> 
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        listUsers: state.admin.users
    };
};

// để có  thể fire đc 1 cái event (action) của redux bắt buộc phải dùng keyword dispatch
const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data))

        // processLogout: () => dispatch(actions.processLogout()),
        // // fire 1 action redux (action là changeLanguageApp đầu vào là language)
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
