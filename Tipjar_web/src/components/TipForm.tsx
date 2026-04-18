'use client'

import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import { parseEther } from 'viem'
import { TIPJAR_ADDRESS } from '../lib/contract'
import { tipJarAbi } from '../lib/abi'

export default function TipForm() {
  const [amount, setAmount] = useState('0.001')
  const [message, setMessage] = useState('')
  const { writeContract, isPending } = useWriteContract()

  const sendTip = () => {
    writeContract({
      address: TIPJAR_ADDRESS,
      abi: tipJarAbi,
      functionName: 'tip',
      args: [message],
      value: parseEther(amount),
    })
  }

  return (
    <div className="form-stack">
      <label className="field">
        <span>금액 (ETH)</span>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.001"
          inputMode="decimal"
        />
      </label>

      <label className="field">
        <span>메시지</span>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="응원 메시지를 적어주세요"
        />
      </label>

      <button className="primary-button" onClick={sendTip} disabled={isPending}>
        {isPending ? '전송 중...' : 'Tip 보내기'}
      </button>
    </div>
  )
}
