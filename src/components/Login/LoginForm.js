import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../../actions/authActions';
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
        isLoading: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(
            (res) => this.props.history.push('/'),
            (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
        );
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                {/* { errors.form && <div className="alert alert-danger">{errors.form}</div>} */}

                <div className="form-group">
                    <label className="control-label">Username / Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
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


                <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
            </form>
        );
    }
}

export default compose(
    withRouter,
    connect(null, { login })
)(LoginForm);