import { useState, useEffect } from "react";
import Home from "./pages/Home";
function App() {
  const [isLoading, setIsLoading] = useState(true);
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
          <h1 className="text-4xl font-bold text-white animate-pulse tracking-widest">Loading...</h1>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
