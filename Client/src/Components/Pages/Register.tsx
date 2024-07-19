import React from 'react';
import { Container, Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

type RegisterFormParams = {
    username: string;
    email: string;
    password: string;
};

const Register: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormParams>();

    const [open, setOpen] = React.useState(false);  // State for Snackbar
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<RegisterFormParams> = async (data) => {
        try {
            await axios.post('http://localhost:3000/register', data);
            setOpen(true);
            setTimeout(() => {
                navigate('/login');  // Chuyển đến trang đăng nhập sau 3 giây
            }, 3000);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/login');  // Chuyển đến trang đăng nhập khi người dùng đóng thông báo
    };

    return (
        <>
            <Header />
            <Container
                sx={{
                    marginTop: '80px',  // Đảm bảo khoảng cách từ top để không bị che bởi Header
                    paddingTop: '20px',
                    minHeight: '100vh',
                }}
            >
                <Typography variant="h2" textAlign="center" mb={2}>
                    Register
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        maxWidth: 600,
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Username"
                        {...register('username', {
                            required: 'Username is required',
                        })}
                        error={!!errors?.username?.message}
                        helperText={errors?.username?.message}
                    />
                    <TextField
                        label="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        error={!!errors?.email?.message}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        label="Password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                        type="password"
                        error={!!errors?.password?.message}
                        helperText={errors?.password?.message}
                    />
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Đăng ký thành công ! Chuyển hướng sang đăng nhập...
                    </Alert>
                </Snackbar>
            </Container>
            <Footer />
            <Outlet/>
        </>

    );
};

export default Register;
