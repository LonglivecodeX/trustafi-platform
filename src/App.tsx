import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import TrustAFIPage from "./pages/TrustAFIPage.tsx";
import AcquisitionPage from "./pages/AcquisitionPage.tsx";
import WhoWeServePage from "./pages/WhoWeServePage.tsx";
import EngagePage from "./pages/EngagePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trustafi" element={<TrustAFIPage />} />
          <Route path="/acquisition" element={<AcquisitionPage />} />
          <Route path="/who-we-serve" element={<WhoWeServePage />} />
          <Route path="/engage" element={<EngagePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
