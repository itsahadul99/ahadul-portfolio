import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LenisWrapper from "./components/LenisWrapper";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center bg-[#0F0715]">
          <h1 className="text-4xl font-bold text-white animate-pulse tracking-widest">Loading..</h1>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      ) : (
        <LenisWrapper disabled={isOpen}>
          <Home isOpen={isOpen} setIsOpen={setIsOpen}/>
        </LenisWrapper>
      )}
    </>
  );
}

export default App;
