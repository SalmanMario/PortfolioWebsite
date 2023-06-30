import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Appbar } from "../components/Appbar";
export function AppLayout() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", bgcolor: "#23272f" }}>
      <Appbar />
      <Container sx={{ flex: 1, display: "flex", flexDirection: "column", bgcolor: "#23272f" }}>
        <Outlet />
      </Container>
    </Box>
  );
}
