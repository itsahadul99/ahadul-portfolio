import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LenisWrapper from "./components/LenisWrapper";

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   // Check if the prompt has already been shown in this session
  //   const hasPromptBeenShown = sessionStorage.getItem("installPromptShown");
  //   if (!hasPromptBeenShown && !isLoading && deferredPrompt) {
  //     setModalVisible(true);
  //   }
  // }, [isLoading, deferredPrompt]);

  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
  //     // Prevent the mini-infobar from appearing on mobile
  //     e.preventDefault();
  //     // Stash the event so it can be triggered later
  //     setDeferredPrompt(e);
  //   };

  //   // Listen for the beforeinstallprompt event
  //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);

  //   return () => {
  //     window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
  //   };
  // }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Call the prompt() method
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
        setModalVisible(false);
        // Mark the prompt as shown in sessionStorage
        sessionStorage.setItem("installPromptShown", "true");
      });
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    // Mark the prompt as shown in sessionStorage
    sessionStorage.setItem("installPromptShown", "true");
  };

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
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </LenisWrapper>
      )}

      {/* Install Prompt Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-20 z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-600 to-secondary rounded-xl shadow-2xl p-8 max-w-md w-full relative">
            {/* Close Button (X) */}
            <button
              onClick={handleCancel}
              className="absolute top-3 right-3 text-white hover:text-gray-200 transition-all duration-300 cursor-pointer"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">🌟 Install App</h2>
              <p className="text-gray-200 mb-6">
                Enhance your experience by installing this app on your device. Enjoy faster access
                and offline functionality!
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-white bg-opacity-20 text-primary rounded-lg hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleInstallClick}
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Install Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;