import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

const requireAuth = (WrappedComponent) => {

    class Authenticate extends React.Component {

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to login to access this page'
                });
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            console.log('dda')

            return props => (
                <div >
                    <WrappedComponent {...props} />
                </div>
            );
        }
    }


    return compose(
        withRouter,
        connect(mapStateToProps, { addFlashMessage })
    )(Authenticate);

}

export default requireAuth;