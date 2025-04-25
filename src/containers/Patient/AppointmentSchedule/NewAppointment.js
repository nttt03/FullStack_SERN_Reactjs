import React, { Component } from 'react';
import { connect } from "react-redux";
import './NewAppointment.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import emptyImg from '../../../assets/empty.png'

class NewAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <React.Fragment>
                <HomeHeader />
                <div className='container'>
                    <div className='appointment-schedule-container'>
                        <div className='appointment-schedule-navigation'>
                            <button className='new-appointment actived'>Lịch hẹn mới</button>
                            <button className='old-appointment'>Đã khám</button>
                        </div>
                        {/* <div className='appointment-schedule-content'>
                            <div className='title py-3'>Hiện bạn chưa có lịch hẹn nào trên trang này!</div>
                            <div className='empty-image'>
                                <img src={emptyImg} alt="empty" />
                            </div>
                        </div> */}
                        <div className='appointment-schedule-content'>
                            <div className='distance'></div>
                            <div className='status'>Chờ xác nhận</div>

                            <div className='appointment-details'>
                                <h4 className='title'>Thông tin lịch hẹn</h4>
                                <div className='appointment-item'>
                                    <span className='label'>Ngày khám:</span>
                                    <span className='value'>12/04/2025</span>
                                </div>
                                <div className='appointment-item'>
                                    <span className='label'>Thời gian:</span>
                                    <span className='value'>8:00 - 9:00</span>
                                </div>
                                <div className='appointment-item'>
                                    <span className='label'>Địa chỉ:</span>
                                    <span className='value'>123 Đường Công Nghệ, Quận 1, TP. HCM</span>
                                </div>
                                <div className='appointment-item'>
                                    <span className='label'>Giá khám:</span>
                                    <span className='value'>500.000 VNĐ</span>
                                </div>
                                <div className='appointment-item'>
                                    <span className='label'>Bác sĩ:</span>
                                    <span className='value'>TS. BS. Nguyễn Văn A</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <HomeFooter />
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewAppointment);
