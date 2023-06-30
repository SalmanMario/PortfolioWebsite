import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ThemePalette } from "../theme/ThemePalette";
import { AppLayout } from "../layouts/AppLayout";

export function RoutePage() {
  return (
    <ThemePalette>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ThemePalette>
  );
}
