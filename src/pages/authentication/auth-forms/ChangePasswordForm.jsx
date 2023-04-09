import React from 'react';
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
import { logout } from '@src/store/actions/auth';
import { AuthService } from '@src/services';
import { toastError, toastSuccess } from '@src/components/mytoast';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const ChangePasswordForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
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

    return (
        <>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    newPasswordConfirm: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    oldPassword: Yup.string().max(255).required('Password is required'),
                    newPassword: Yup.string().max(255).required('Password is required'),
                    newPasswordConfirm: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        var userData = JSON.parse(localStorage.getItem('user'));
                        var body = {
                            "customerId": userData.customerId,
                            "newPassword": values.newPassword,
                            "oldPassword": values.oldPassword
                        }

                        AuthService.changePassword(body).then((res) => {
                            console.log(res)
                            toastSuccess('Change password success. Please re-login.');
                            setTimeout(function() {
                                dispatch(logout()).then(() => {
                                    navigate("/login");
                                    window.location.reload();
                                }).catch((err) => {
                                    console.log(err);
                                });
                            }, 1000);
                        }).catch((err) => {
                            console.log(err);
                            toastError(err?.response?.data?.message || "Failed to change password. Please try again later.")
                        });
                    } catch (err) {
                        toastError('Error change password. Plase try again later.')
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="old-password">Old Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.oldPassword && errors.oldPassword)}
                                        id="old-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.oldPassword}
                                        name="oldPassword"
                                        onBlur={handleBlur}
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
                                    {touched.oldPassword && errors.oldPassword && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.oldPassword}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="new-password">New Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.newPassword && errors.newPassword)}
                                        id="new-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.newPassword}
                                        name="newPassword"
                                        onBlur={handleBlur}
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
                                    {touched.newPassword && errors.newPassword && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.newPassword}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="new-password">Confirm New Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.newPasswordConfirm && errors.newPasswordConfirm)}
                                        id="new-password-confirm"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.newPasswordConfirm}
                                        name="newPasswordConfirm"
                                        onBlur={handleBlur}
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
                                    {touched.newPasswordConfirm && errors.newPasswordConfirm && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.newPasswordConfirm}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Change Password
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ChangePasswordForm;
