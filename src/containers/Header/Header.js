import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
    changeLanguage = (language) => {
        // alert(language)
        // fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }


    render() {
        const { processLogout, language, userInfo } = this.props;
       console.log("check UserInfo: ", userInfo)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className='languages'>
                    <span className='welcome'><FormattedMessage id="homeheader.welcome" />, {userInfo && userInfo.firstName ? userInfo.firstName : ''} !</span>
                   
                    <div className= {language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} >
                        <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                    </div>
                    <div className= {language === LANGUAGES.EN ? 'language-en active' : 'language-en'} >
                        <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                    </div>
                    
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Logout'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        // fire 1 action redux (action là changeLanguageApp đầu vào là language)
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
