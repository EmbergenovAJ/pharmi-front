import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@material-tailwind/react";
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}>
        <ThemeProvider>

        </ThemeProvider>
      </RouterProvider>
  </StrictMode>,
)
