import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect } from "react";
import LandingPage from "./pages/LandingPage";
import SettingsContextProvider from "./context/SettingsContext";

const Editor = lazy(() => import("./pages/Editor"));
const BugReport = lazy(() => import("./pages/BugReport"));
const Templates = lazy(() => import("./pages/Templates"));
const NotFound = lazy(() => import("./pages/NotFound"));

function getRouterBasename() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");
}

export default function App() {
  return (
    <SettingsContextProvider>
      <BrowserRouter basename={getRouterBasename()}>
        <RestoreScroll />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/diagrams/:id" element={<Editor />} />
            <Route path="/editor/templates/:id" element={<Editor />} />
            <Route path="/bug-report" element={<BugReport />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SettingsContextProvider>
  );
}

function RouteFallback() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center text-zinc-500">
      Loading...
    </div>
  );
}

function RestoreScroll() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return null;
}
