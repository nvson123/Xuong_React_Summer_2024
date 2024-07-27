import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ToolbarStyled = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Logo = styled('img')({
    height: '40px',
});

const ButtonStyled = styled(Button)({
    color: 'inherit',
    '&:hover': {
        color: 'cyan',
        textDecoration: 'underline',
    },
});

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    const handleNavigateRegister = () => {
        navigate('/register');
    };
    const handleNavigateLogin = () => {
        navigate('/login');
    };
    return (
        <AppBar position="fixed" color="default" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <ToolbarStyled>
                <Logo src="https://keeb.io/cdn/shop/files/Keebio_Logo_Purple_-_Less_Padding.png?v=1706907388" alt="Logo" />
                <div>
                    <ButtonStyled onClick={handleNavigateHome}>Home</ButtonStyled>
                    <ButtonStyled onClick={handleNavigateRegister}>Register</ButtonStyled>
                    <ButtonStyled onClick={handleNavigateLogin}>Login</ButtonStyled>
                </div>
            </ToolbarStyled>
        </AppBar>
    );
};

export default Header;
