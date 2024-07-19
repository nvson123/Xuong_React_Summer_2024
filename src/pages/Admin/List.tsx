import {
    Button, Container, Paper, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../compontes/ComfirmDialog";
import { Product } from "../../types/product";
import axios from "axios";

function AdminProductList() {
    const [confirm, setConfirm] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [idDelete, setIdDelete] = useState<string | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/products");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleConfirm = (id: string) => {
        setConfirm(true);
        setIdDelete(id);
    };

    const handleDelete = async () => {
        try {
            await axios.delete("products/" + idDelete);
            getAllProducts();
            setOpenSnackbar(true); // Mở Snackbar khi xóa thành công
        } catch (error) {
            console.log(error);
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Xóa sản phẩm thành công"
            />
            <Container>
                <Stack gap={2}>
                    <Typography variant="h2" textAlign={"center"}>Products List</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {product.title}
                                        </TableCell>
                                        <TableCell align="right">{product.price}</TableCell>
                                        <TableCell align="right">{product.description}</TableCell>
                                        <TableCell align="right">{product.image}</TableCell>
                                        <TableCell align="right">{product.category.name}</TableCell>
                                        <TableCell align="right">
                                            <Stack direction={'row'} gap={3} justifyContent={'center'}>
                                                <Link to={""}>Edit</Link>
                                                <Button variant="contained" sx={{ bgcolor: "red" }} onClick={() => handleConfirm(product.id)}>Delete</Button>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ConfirmDialog confirm={confirm} onConfirm={setConfirm} onDelete={handleDelete} />
                    </TableContainer>
                </Stack>
            </Container>
        </>
    );
}

export default AdminProductList;
