'use client'

import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { TIPJAR_ADDRESS } from '@/lib/contract'
import { tipJarAbi } from '@/lib/abi'

export default function WithdrawButton() {
  const { address } = useAccount()
  const { data: owner } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'owner',
  })

  const { writeContract, isPending } = useWriteContract()

  if (!address || address !== owner) return null

  return (
    <button
      onClick={() =>
        writeContract({
          address: TIPJAR_ADDRESS,
          abi: tipJarAbi,
          functionName: 'withdrawTips',
        })
      }
      disabled={isPending}
    >
      출금하기
    </button>
  )
}
