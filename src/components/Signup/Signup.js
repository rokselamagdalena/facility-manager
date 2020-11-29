import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class Signup extends React.Component {
    render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <SignupForm 
                    isUserExists={isUserExists}
                    userSignupRequest={userSignupRequest} 
                    addFlashMessage={addFlashMessage}/>
                </div>
            </div>
        </div>
    )
}
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(Signup);