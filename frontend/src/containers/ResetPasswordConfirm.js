import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPasswordConfirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, resetPasswordConfirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: '',
        reNewPassword: ''
    });

    const { newPassword, reNewPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        resetPasswordConfirm(uid, token, newPassword, reNewPassword);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='newPassword'
                        value={newPassword}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='reNewPassword'
                        value={reNewPassword}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { resetPasswordConfirm })(ResetPasswordConfirm);
