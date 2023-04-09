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
import { logout, loginFailed, agreementAccepted } from '@src/store/actions/auth';
import { AuthService , AgreementService} from '@src/services';
import { toastSuccess, toastError } from '@src/components/mytoast';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthAgreement = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [isLoading, setIsLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }

   

    // const checkLogin = () => {
    //     var user = localStorage.getItem("user");
    //     return user && isLoggedIn;
    // }


    const submitAgreement = () => {
        AgreementService.accept({
            "accept": true
        }).then((res) => {
            dispatch(agreementAccepted({
                "accept": true
            }))
            navigate("/tracking");
        }).catch((err) => {
            console.log("Err: ", err);
            toastError(err?.response?.data?.message || 'Failed to submit agreement. Please try again later.');
            dispatch(loginFailed(err?.response?.data?.message | 'Failed to submit'));
        })
    }

    const denyAgreement=()=>{
        console.log("denying agreement. Logout");
        dispatch(logout()).then(() => {
            navigate("/login");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }

    // if (checkLogin()) {
    //     return <Navigate to="/tracking" />;
    // }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        
                        <FormControlLabel control={<Checkbox id="agree" onChange={checkboxHandler}  />} label="Saya setuju dengan Syarat dan Ketentuan" />
                        
                        
                    </Stack>
                </Grid>
                <Grid item xs={6}>

                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={agree}
                            fullWidth
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                denyAgreement();
                            }}
                        >
                            Logout
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={6}>

                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={!agree}
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                submitAgreement();
                            }}
                        >
                            Continue
                        </Button>
                    </AnimateButton>
                </Grid>
                
            </Grid>
        </>
    );
};

export default AuthAgreement;
