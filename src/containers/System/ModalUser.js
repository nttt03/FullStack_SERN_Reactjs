import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }

    componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        // console.log(event.target.value, id)
        // bad code
        /**
         * this.state = {
         *  email: '',
         *  password: '',
         *  ....
         * }
         * this.state.email === this.state['email']
         */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state: ', this.state)
        // })

        // good code
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for(let i=0; i<arrInput.length; i++) {
            if( !this.state[arrInput[i]] ) {
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            // console.log('data modal: ', this.state)
            // gọi api creat-new-user
            this.props.createNewUser(this.state);

        }
        
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {
        // console.log('check child props', this.props);
        // console.log('check child open modal', this.props.isOpen);
        return (
            <Modal isOpen={this.props.isOpen} toggle={()=>{this.toggle()}} className={'modal-user-container'}
                size='lg'
                // centered : để modal nằm giữa màn hình
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' 
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}} 
                                value={this.state.email}/>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' 
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}} 
                                value={this.state.password}/>
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' 
                                onChange={(event) => {this.handleOnChangeInput(event, 'firstName')}} 
                                value={this.state.firstName}/>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' 
                                onChange={(event) => {this.handleOnChangeInput(event, 'lastName')}} 
                                value={this.state.lastName}/>
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' 
                                onChange={(event) => {this.handleOnChangeInput(event, 'address')}} 
                                value={this.state.address}/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color="primary" onClick={() => {this.handleAddNewUser()}}>Add new</Button>{' '}
                    <Button className='px-3' color="secondary" onClick={()=>{this.toggle()}}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
