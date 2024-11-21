import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
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
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl
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

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isGetGender = this.props.isLoadingGender;
        console.log('check props from redux: ', this.props.genderRedux)

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
                                <input className='form-control' type='email'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className='form-control' type='password'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.first-name"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.last-name"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number"/></label>
                                <input className='form-control' type='number'/>
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className='form-control'>
                                    {positions && positions.length > 0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option key={index}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className='form-control'>
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option key={index}> {language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
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
                            <div className='col-12'>
                                <button className='btn btn-primary my-3'><FormattedMessage id="manage-user.save"/></button>
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
        isLoadingGender: state.admin.isLoadingGender
    };
};

// để có  thể fire đc 1 cái event (action) của redux bắt buộc phải dùng keyword dispatch
const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())

        // processLogout: () => dispatch(actions.processLogout()),
        // // fire 1 action redux (action là changeLanguageApp đầu vào là language)
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
