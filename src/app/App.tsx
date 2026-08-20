import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AppProvider } from "./providers/AppContext";
import "../styles/booka.css";

export default function App() {
  return (
    <AppProvider>
      {/* Mobile container — centers on desktop, full width on mobile */}
      <div className="min-h-screen bg-[#E5E7EB] flex justify-center">
        <div className="w-full max-w-[430px] min-h-screen bg-[#F4FAF4] relative overflow-x-hidden">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppProvider>
  );
}
