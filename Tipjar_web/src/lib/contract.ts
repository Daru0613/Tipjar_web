const fallbackAddress =
  '0x8AFC777aAc888987b1ADC4eb53072A0c8936AA5f' as `0x${string}`

export const TIPJAR_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  ? (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`)
  : fallbackAddress
