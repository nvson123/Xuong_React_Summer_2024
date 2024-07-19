import { Navigate, Outlet } from "react-router-dom";

function LayoutAdmin() {
//   const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === 'true';
  return (
    <>
      {isAdmin ? (
        <>
          
          <Outlet />
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}

export default LayoutAdmin;