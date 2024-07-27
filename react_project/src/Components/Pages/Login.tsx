import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type LoginFormParams = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormParams>();

    const onSubmit: SubmitHandler<LoginFormParams> = async (data) => {
        try {
            await axios.post('http://localhost:3000/login', data);
            console.log(data);
            
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Container
            sx={{
                marginTop: '80px',  // Đảm bảo khoảng cách từ top để không bị che bởi Header
                paddingTop: '20px',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h2" textAlign="center" mb={2}>
                Login
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
        </Container>
    );
};

export default Login;
