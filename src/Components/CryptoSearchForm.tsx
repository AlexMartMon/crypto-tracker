import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../Data";
import { useCryptoStore } from "../Store";
import { PairCurrency } from "../Types";
import ErrorMessage from "./ErrorMessage";

export default function CryptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [pair, serPair] = useState<PairCurrency>({
    currency: "",
    cryptoCurrency: "",
  });
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    serPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
        setError('All fields are required')
        return
    }
    setError('')
    fetchData(pair)
  };

  return (
    <form onSubmit={handleSubmit} className="form">
        {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">FIAT Currency:</label>
        <select
          onChange={handleChange}
          name="currency"
          id="currency"
          value={pair.currency}
        >
          <option value="">--Select fiat Currency--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptoCurrency">Crypto currency:</label>
        <select
          onChange={handleChange}
          name="cryptoCurrency"
          id="cryptoCurrency"
          value={pair.cryptoCurrency}
        >
          <option value="">--Select Currency--</option>
          {cryptoCurrencies.map((currency) => (
            <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>
              {currency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="value" />
    </form>
  );
}
