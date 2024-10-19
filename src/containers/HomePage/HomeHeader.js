import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss'
import { languages } from '../../utils';

class HomeHeader extends Component {

    render() {
        // console.log('check: ', this.props)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.search-doctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.package"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health"/></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle me-2"></i><FormattedMessage id="homeheader.support"/></div>
                            <div className='language-vi'><span>VN</span></div>
                            <div className='language-en'><span>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1"/></div>
                        <div className='title2'><FormattedMessage id="banner.title2"/></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh'/>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-notes-medical"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-sun"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child5"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-plus-circle"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child6"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
