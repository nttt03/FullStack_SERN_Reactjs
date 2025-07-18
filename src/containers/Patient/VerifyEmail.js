import React, { Component } from 'react';
import { connect } from "react-redux";
import './VerifyEmail.scss';
import { FormattedMessage } from 'react-intl';
import { postVerifyBookAppointment } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';

class VerifyEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }

    }

    async componentDidMount() {
        console.log('>>> Check props: ', this.props);
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search)
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            });
            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }

            console.log('Check token: ', token, doctorId);
        }

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { statusVerify, errCode } = this.state;
        console.log('>>> check state: ', this.state)
        return (
            <>
                <HomeHeader />

                <div className='verify-email-container'>
                    {statusVerify === false ?
                        <div> loading data...</div>
                        :
                        <div>
                            {+errCode === 0 ?
                                <div className='info-booking'>Xác nhận lịch hẹn thành công</div>
                                :
                                <div className='info-booking'>Lịch hẹn đã được xác nhận hoăc không tồn tại</div>
                            }
                        </div>

                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
