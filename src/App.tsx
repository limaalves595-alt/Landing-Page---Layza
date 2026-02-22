import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const WHATSAPP_NUMBER = "5581987284026";
const WHATSAPP_TEXT = encodeURIComponent("Olá! Vim pelo site e quero um orçamento.");

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
  <a
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar no WhatsApp"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="white"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.4 0 .06 5.35.06 12c0 2.12.56 4.18 1.63 5.99L0 24l6.19-1.62A11.94 11.94 0 0012.06 24c6.66 0 12-5.35 12-12 0-3.2-1.24-6.2-3.54-8.52zM12.06 21.9c-1.92 0-3.8-.52-5.44-1.51l-.39-.23-3.68.96.98-3.59-.25-.41A9.86 9.86 0 012.16 12c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.89A9.86 9.86 0 0121.96 12c0 5.46-4.44 9.9-9.9 9.9zm5.53-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.43s1.05 2.82 1.19 3.02c.15.2 2.05 3.13 4.96 4.38.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.11.56-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
  </svg>
</a>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
