import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated, userIsAdminOrDoctor } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import System from '../routes/System';
import Doctor from '../routes/Doctor.js';
import Login from './Auth/Login';
import HomePage from './HomePage/HomePage.js';
import DetailDoctor from './Patient/Doctor/DetailDoctor.js';
import DetailSpecialty from './Patient/Specialty/DetailSpecialty.js';
import DetailClinic from './Patient/Clinic/DetailClinic.js';
import ListSpecialty from './Patient/Specialty/ListSpecialty.js';
import ListClinic from './Patient/Clinic/ListClinic.js';
import ListDoctor from './Patient/Doctor/ListDoctor.js';
import NewAppointment from './Patient/AppointmentSchedule/NewAppointment.js';
import DoneAppointment from './Patient/AppointmentSchedule/DoneAppointment.js';

import { CustomToastCloseButton } from '../components/CustomToast';
import CustomScrollbars from '../components/CustomScrollbars.js';
import VerifyEmail from './Patient/VerifyEmail.js';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">

                        <div className="content-container">
                            <CustomScrollbars style={{ height: '100vh', with: '100%' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAdminOrDoctor(System)} />
                                    <Route path={'/doctor/'} component={userIsAdminOrDoctor(Doctor)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />

                                    <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                                    <Route path={path.DETAIL_SPECIALTY} component={DetailSpecialty} />
                                    <Route path={path.DETAIL_CLINIC} component={DetailClinic} />
                                    <Route path={path.VERIFY_EMAIL_BOOKING} component={VerifyEmail} />

                                    <Route path={path.LIST_SPECIALTY} component={ListSpecialty} />
                                    <Route path={path.LIST_CLINIC} component={ListClinic} />
                                    <Route path={path.LIST_DOCTOR} component={ListDoctor} />

                                    <Route path={path.NEW_APPOINTMENT} component={NewAppointment} />
                                    <Route path={path.DONE_APPOINTMENT} component={DoneAppointment} />

                                </Switch>
                            </CustomScrollbars>
                        </div>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}

                        <ToastContainer
                            position='bottom-right'
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />

                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);