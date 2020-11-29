import React from 'react';
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

      checkUserExists = e =>  {
        const field = e.target.name;
        const val = e.target.value;
        if (val !== '') {
          this.props.isUserExists(val).then(res => {
            // let errors = this.state.errors;
            // let invalid;
            // if (res.data.user) {
            //   errors[field] = 'There is user with such ' + field;
            //   invalid = true;
            // } else {
            //   errors[field] = '';
            //   invalid = false;
            // }
            // this.setState({ errors, invalid });
          });
        }
      }

    onSubmit(e) {
        this.setState({ errors: {}, isLoading: true });
        e.preventDefault();
        console.log(this.state);
        this.props.userSignupRequest(this.state).then(
            () => {
                this.props.history.push('/')
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'You signed up successfully. Welcome!'
                });
            },
            // (err) => this.setState({ errors: err.response.data, isLoading: false })
            (err) => {
                this.props.history.push('/');
                this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                    });
            }

        );

    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h2>Registration</h2>

                <div className="form-group">
                    <label className="control-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        onBlur={this.checkUserExists}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input
                        type="text"
                        className="form-control"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign up
          </button>
                </div>
            </form>
        );
    }
}

export default withRouter(SignupForm);