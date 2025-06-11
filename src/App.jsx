// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Library from "./pages/Library";
import RestReset from "./pages/RestReset";
import QuietConnection from "./pages/QuietConnection";
import GentleMotion from "./pages/GentleMotion";
import AllPractices from "./pages/AllPractices";

import SoftCare from "./pages/SoftCare";
import CheckIn from "./pages/CheckIn";
import Learn from "./pages/Learn";
import FindSomeone from "./pages/FindSomeone";

import SoftFinds from "./pages/SoftFinds";
import SoftMerch from "./pages/SoftMerch";
import CuratedFinds from "./pages/CuratedFinds";
import PartneredImpact from "./pages/PartneredImpact";
import OtherBrands from "./pages/OtherBrands";

import SoftImpact from "./pages/SoftImpact";
import SendCare from "./pages/SendCare";
import SupportCause from "./pages/SupportCause";
import Impact from "./pages/Impact";

const App = () => (
  <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-chillax-regular">
    <Navbar />

    <main className="flex-grow">
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* SoftSpace */}
        <Route path="/library" element={<Library />} />
        <Route path="/library/rest-reset" element={<RestReset />} />
        <Route path="/library/quiet-connection" element={<QuietConnection />} />
        <Route path="/library/gentle-motion" element={<GentleMotion />} />
        <Route path="/library/all-practices" element={<AllPractices />} />

        {/* SoftCare */}
        <Route path="/softcare" element={<SoftCare />} />
        <Route path="/softcare/check-in" element={<CheckIn />} />
        <Route path="/softcare/learn" element={<Learn />} />
        <Route path="/softcare/find-someone" element={<FindSomeone />} />

        {/* SoftFinds */}
        <Route path="/softfinds" element={<SoftFinds />} />
        <Route path="/softfinds/soft-merch" element={<SoftMerch />} />
        <Route path="/softfinds/curated-finds" element={<CuratedFinds />} />
        <Route
          path="/softfinds/partnered-impact"
          element={<PartneredImpact />}
        />
        <Route path="/softfinds/other-brands" element={<OtherBrands />} />

        {/* SoftImpact */}
        <Route path="/softimpact" element={<SoftImpact />} />
        <Route path="/softimpact/send-care" element={<SendCare />} />
        <Route path="/softimpact/support-cause" element={<SupportCause />} />
        <Route path="/softimpact/impact" element={<Impact />} />
      </Routes>
    </main>

    <Footer />
  </div>
);

export default App;
