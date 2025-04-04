import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'

class HomeFooter extends Component {

    render() {
        return (
            <footer className='home-footer'>
                <div className='footer-container'>
                    <div className='footer-section'>
                        <h3>Công ty Công nghệ CareFlow</h3>
                        <p>📍 123 Đường Công Nghệ, Quận 1, TP. HCM, Việt Nam</p>
                        <p>📞 0123-456-789 (8h - 20h)</p>
                        <p>📧 support@careflow.vn (7h - 18h)</p>
                    </div>
                    <div className='footer-section'>
                        <h3>Chính sách</h3>
                        <ul>
                            <li><a href='#'>Liên hệ hợp tác</a></li>
                            <li><a href='#'>Chuyển đổi số</a></li>
                            <li><a href='#'>Chính sách bảo mật</a></li>
                            <li><a href='#'>Quy chế hoạt động</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Đối tác bảo trợ nội dung</h3>
                        <p>Hello Doctor - "Sức khỏe tinh thần"</p>
                        <p>Hệ thống y khoa Bernard - "Y khoa chuyên sâu"</p>
                        <p>Doctor Check - "Sức khỏe tổng quát"</p>
                    </div>
                    <div className='footer-section'>
                        <h3>Kết nối với chúng tôi</h3>
                        <div className='social-icons'>
                            <a href='#'><i className="fab fa-facebook"></i></a>
                            <a href='#'><i className="fab fa-instagram"></i></a>
                            <a href='#'><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; {new Date().getFullYear()} Care Flow. All rights reserved.</p>
                </div>
            </footer>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
