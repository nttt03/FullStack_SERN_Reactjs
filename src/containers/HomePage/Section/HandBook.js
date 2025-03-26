import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from 'react-slick';
import specialtyImg from '../../../assets/specialty/image.png';
import { FormattedMessage } from 'react-intl';

class HandBook extends Component {

    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>

                    <div className='section-header'>
                        <span><FormattedMessage id="homepage.handbook" /></span>
                        <button className='btn btn-secondary px-3'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 1</span>
                            </div>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 2</span>
                            </div>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 3</span>
                            </div>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 4</span>
                            </div>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 5</span>
                            </div>
                            <div className='section-customize'>
                                <img className='bg-image' src={specialtyImg} />
                                <span>Hệ thống y tế An Việt 6</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
