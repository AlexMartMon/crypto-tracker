import { useEffect } from "react";
import CryptoSearchForm from "./Components/CryptoSearchForm";
import { useCryptoStore } from "./Store";
import CryptoDetails from "./Components/CryptoDetails";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Crypto<span>Trader</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
          <CryptoDetails />
        </div>
      </div>
    </>
  );
}

export default App;
