import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Business from "./pages/business/Business";
import Student from "./pages/student/Student";
import Blog from "./pages/blog/Blog";
import NoPage from "./pages/NoPage/Nopage";
import BusinessForm from "./forms/businessform/BusinessForm";
import StudentForm from "./forms/studentform/StudentForm";
import About from "./pages/about/About";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({ palette: { mode: "dark" } });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/student" element={<Student />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/studentform" element={<StudentForm />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
