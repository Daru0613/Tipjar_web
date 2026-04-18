'use client'

import { useReadContract } from 'wagmi'
import { TIPJAR_ADDRESS } from '../lib/contract'
import { tipJarAbi } from '../lib/abi'
import { formatEther } from 'viem'

export default function TipList() {
  const { data } = useReadContract({
    address: TIPJAR_ADDRESS,
    abi: tipJarAbi,
    functionName: 'getLatestTips',
    args: [5n],
  })

  return (
    <div className="tip-list">
      {data?.map((tip, index) => (
        <article key={index} className="tip-card">
          <div className="tip-card-header">
            <div className="tip-avatar">{index + 1}</div>
            <div>
              <div className="tip-address">{tip.tipper}</div>
              <div className="tip-meta">
                {new Date(Number(tip.timestamp) * 1000).toLocaleString()}
              </div>
            </div>
            <div className="tip-amount">{formatEther(tip.amount)} ETH</div>
          </div>
          <p className="tip-message">{tip.message}</p>
        </article>
      ))}
    </div>
  )
}
