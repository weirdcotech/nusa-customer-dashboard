import React, { useState } from 'react';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from '@src/components/@extended/AnimateButton';
import { loginSuccess, loginFailed } from '@src/store/actions/auth';
import { AuthService, AgreementService } from '@src/services';
import { toastSuccess, toastError } from '@src/components/mytoast';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkLogin = () => {
        var user = localStorage.getItem("user");
        return user && isLoggedIn;
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitLogin = () => {
        AuthService.login(data).then((res) => {
            console.log("Res: ", res.data);
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
                AuthService.me().then((meData) => {
                    AgreementService.check().then((agreementData) => {
                        localStorage.setItem("my_name", meData.data.name);
                        localStorage.setItem("eligible", res.data.accept);
                        // dispatch(loginSuccess(res.data));
                        dispatch(loginSuccess({user: res.data, isEligible: agreementData.data.accept}));
                    })
                });
                setTimeout(function() {
                    navigate("/tracking");
                }, 1500);
            } else {
                toastError('Internal server error. Please try again later');
            }
        }).catch((err) => {
            console.log("Err: ", err);
            toastError(err?.response?.data?.message || 'Failed to login. Please try again later.');
            dispatch(loginFailed(err?.response?.data?.message | 'Failed to login'));
        })
    }

    if (checkLogin()) {
        return <Navigate to="/tracking" />;
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="email-login">Username</InputLabel>
                        <OutlinedInput
                            id="email-login"
                            type="text"
                            value={data.username}
                            name="username"
                            required
                            placeholder="Enter username"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="password-login">Password</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={data.password}
                            name="password"
                            required
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder="Enter password"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={isLoading}
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                submitLogin();
                            }}
                        >
                            Login
                        </Button>
                    </AnimateButton>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthLogin;
