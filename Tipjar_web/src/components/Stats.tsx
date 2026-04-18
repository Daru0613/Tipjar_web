'use client'

import { useAccount, useReadContract } from 'wagmi'
import { TIPJAR_ADDRESS } from '../lib/contract'
import { tipJarAbi } from '../lib/abi'
import { formatEther } from 'viem'

export default function Stats() {
  const { address } = useAccount()

  const { data: balance } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'getBalance',
  })

  const { data: tipCount } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'getTipsCount',
  })

  const { data: myAmount } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'tippedAmountByUser',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  const { data: myCount } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'tippedCountByUser',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">컨트랙트 잔액</span>
        <strong>{balance ? formatEther(balance) : '0'} ETH</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">총 팁 횟수</span>
        <strong>{tipCount?.toString() ?? '0'}</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">내 누적 팁 금액</span>
        <strong>{myAmount ? formatEther(myAmount) : '0'} ETH</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">내 팁 횟수</span>
        <strong>{myCount?.toString() ?? '0'}</strong>
      </div>
    </div>
  )
}
