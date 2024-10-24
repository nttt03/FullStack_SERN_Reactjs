import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import specialtyImg from '../../../assets/specialty/image.png';

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>

                    <div className='section-header'>
                        <span>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn btn-secondary px-3'>Xem thêm</button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 0</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 2</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 4</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                            <img className='bg-image bg-image-doctor' src={specialtyImg} />
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ ABC</div>
                                    <div>Cơ xương khớp 5</div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>

                
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
