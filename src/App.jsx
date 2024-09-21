import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/page/Homepage";
import QR_page from "./components/page/QrMa";

function App() {
    return (
        <div className="bg-blacks min-h-screen">
            <Navbar />
            <div className="lg:px-16 px-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/make" element={<QR_page />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
