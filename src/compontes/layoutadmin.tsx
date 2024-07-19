import { Stack } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, []);
  return (
    <>
    <Stack direction={"row"} gap={2}>
    <Sidebar/>
    <Outlet />
    </Stack>
      
    </>
  );
};

export default LayoutAdmin;