import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../Schemas/Crypto-Schema";
import { PairCurrency } from "../Types";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function getCryptoCurrency(pair: PairCurrency) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`;
  const {data: {DISPLAY}} =  await axios.get(url)
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
  if (result.success) {
    return result.data;
  }
}
