import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import Slider from 'react-slick';
// import css files slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from '../../../assets/specialty/image.png';


class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            
        };
        
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>

                    <div className='specialty-header'>
                        <span>Chuyên khoa phổ biến</span>
                        <button className='btn btn-secondary px-3'>Xem thêm</button>
                    </div>

                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 1</span>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 2</span>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 3</span>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 4</span>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 5</span>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg} />
                                <span>Cơ xương khớp 6</span>
                            </div>
                        </Slider>
                    </div>

                </div>

                <div className='' style={{height: '400px'}}></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
