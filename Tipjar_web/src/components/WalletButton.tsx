'use client'

import { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export default function WalletButton() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="wallet-shell wallet-placeholder" />
  }

  if (isConnected) {
    return (
      <div className="wallet-shell wallet-connected">
        <div className="wallet-badge">
          <span className="wallet-dot" />
          <span>{address ? shortenAddress(address) : 'Connected'}</span>
        </div>
        <button className="secondary-button" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div className="wallet-shell">
      {connectors.map((connector) => (
        <button
          className="primary-button"
          key={connector.id}
          onClick={() => connect({ connector })}
          disabled={isPending}
        >
          {isPending ? '연결 중...' : `Connect ${connector.name}`}
        </button>
      ))}
    </div>
  )
}
