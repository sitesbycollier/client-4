import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Scholarships } from "@/pages/Scholarships";
import { Support } from "@/pages/Support";
import { Education } from "@/pages/Education";
import { Contact } from "@/pages/Contact";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="support" element={<Support />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
