// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import { QueryClientProvider } from "react-query";
import { theme } from "@/styles/mui-style";
import { ThemeProvider } from "@emotion/react";
import { queryClient } from "./api/common/queryClient";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme()}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
