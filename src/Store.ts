import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CrytoPrice, PairCurrency } from "./Types";
import { getCryptoCurrency, getCryptos } from "./Services/CryptoService";

type CryptoStore= {
    cryptoCurrencies: CryptoCurrency[],
    crypto: CrytoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: PairCurrency) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    crypto: {} as CrytoPrice,
    loading: false,
    fetchCryptos: async () => {
        set(() => ({
            loading: true
        }))
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies,
            loading: false
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const crypto = await getCryptoCurrency(pair)
        set(() => ({
            crypto: crypto,
            loading: false
        }))
    }
})))