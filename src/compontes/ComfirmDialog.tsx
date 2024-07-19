import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material';

type ConfirmDialogProps = {
    confirm: boolean;
    onConfirm: (confirm: boolean) => void;
    onDelete: () => void;
};

export default function ConfirmDialog({
    confirm,
    onConfirm,
    onDelete,
}: ConfirmDialogProps) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClose = () => {
        onConfirm(false);
    };

    const handleAgree = () => {
        onConfirm(false);
        onDelete();
        setOpenSnackbar(true);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <Dialog
                open={confirm}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Xóa sản phẩm"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có muốn xóa sản phẩm không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
                    <ButtonOk onClick={handleAgree} autoFocus>
                        OK
                    </ButtonOk>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Xóa sản phẩm thành công"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    );
}

const ButtonOk = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(225,105,135,.3)",
    color: "white",
    height: 48,
    padding: "0 20px",
});

const ButtonCancel = styled(Button)({
    backgroundColor: "#F44336",
    color: "#fff",
    '&:hover': {
        backgroundColor: "#d32f2f",
    },
    opacity: 0.6,
});
