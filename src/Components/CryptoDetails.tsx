import { useMemo } from "react";
import { useCryptoStore } from "../Store";
import Spinner from "./Spinner";

export default function CryptoDetails() {
  const crypto = useCryptoStore((state) => state.crypto);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = useMemo(
    () => !Object.values(crypto).every((value) => value === ""),
    [crypto]
  );

  return (
    <div className="result-wrapper">
      {loading ? <Spinner /> : hasResult && (
        <>
          <h2>Market Cap</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${crypto.IMAGEURL}`}
              alt="cryptoLogo"
            />
            <div>
              <p>
                Current price: <span>{crypto.PRICE}</span>
              </p>
              <p>
                Today higher price: <span>{crypto.HIGHDAY}</span>
              </p>
              <p>
                Today lower price: <span>{crypto.LOWDAY}</span>
              </p>
              <p>
                Price variation on last 24H: <span>{crypto.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Last update: <span>{crypto.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
