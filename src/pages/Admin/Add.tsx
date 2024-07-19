import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../types/product";
import { Description } from "@mui/icons-material";

function AdminProductAdd() {
  const nav = useNavigate();

  const onSubmit = async (values: ProductForm) => {
    try {
      await axios.post("/products", values);
      nav("/admin/list");
    } catch (error) {
      console.error(error); // Log lỗi để kiểm tra nếu cần
    }
  };

  const validate = (values: ProductForm) => {
    const { title, image, category, price, description } = values;
    const errors: Record<string, string> = {};
    if (!title) errors.title = "Cập nhật title vào";
    if (!price) {
      errors.price = "Cập nhật price vào";
    } else if (isNaN(price)) {
      errors.price = "Price phải là số";
    } else if (Number(price) <= 0) {
      errors.price = "Price phải là số dương";
    }
    if (!description) errors.description = "Cập nhật description vào";
    if (!image) errors.image = "Cập nhật image vào";
    if (!category) errors.category = "Cập nhật category vào";

    return errors;
  };

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h3" textAlign={"center"}>
          Add Product
        </Typography>
        <Form 
          onSubmit={onSubmit} 
          validate={validate} 
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Stack gap={2}>
                <Field name="title">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Title"
                      variant="standard"
                      error={meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="price">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Price"
                      variant="standard"
                      error={meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="description">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Description"
                      variant="standard"
                      error={meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="image">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Image"
                      variant="standard"
                      error={meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="category">
                  {({ input, meta }) => (
                    <FormControl variant="standard" fullWidth error={meta.touched && !!meta.error}>
                      <InputLabel>Category</InputLabel>
                      <Select {...input} label="Category">
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="phu_kien">Phụ kiện</MenuItem>
                        <MenuItem value="thoi_trang">Thời trang</MenuItem>
                      </Select>
                      {meta.touched && meta.error && (
                        <FormHelperText>{meta.error}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
                
                <Button
      type="submit"
      variant="contained"
      color="primary"
    >
      Submit
    </Button>
              </Stack>
            </form>
          )}
        />
      </Stack>
    </Container>
  );
}

export default AdminProductAdd;
