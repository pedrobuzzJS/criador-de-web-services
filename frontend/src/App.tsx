import React from "react";
import AppRoutes from "./routes/index.routes";
import { AuthProvider } from "./context/authContex";

const App: React.FC = () => {
  return (
    <AuthProvider children={<AppRoutes />} />
  );
};

export default App;