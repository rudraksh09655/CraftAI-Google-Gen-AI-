import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Corrected the import paths to use the '@/' alias for better resolution
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Workspace from "@/pages/Workspace"; 
import SignIn from "@/pages/SignIn";
import JoinAsArtisan from "@/pages/JoinAsArtisan";
// Initialize the query client
const queryClient = new QueryClient();

const App = () => {
  return (
    // Your existing providers for UI components and data fetching
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* This component handles all the routing for your application */}
        <BrowserRouter>
          <Routes>
            {/* Route for your homepage */}
            <Route path="/" element={<Index />} />
            
            {/* 2. ADD THIS NEW ROUTE for the artisan workspace */}
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/join" element={<JoinAsArtisan />} />

            {/* A catch-all route for any pages that don't exist */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

