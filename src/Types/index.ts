import {z} from 'zod'
import { currencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../Schemas/Crypto-Schema'

export type Currency = z.infer<typeof currencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type PairCurrency = z.infer<typeof PairSchema>
export type CrytoPrice = z.infer<typeof CryptoPriceSchema>