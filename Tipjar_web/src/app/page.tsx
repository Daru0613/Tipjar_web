'use client'

import TipList from '../components/TipList'
import TipForm from '../components/TipForm'
import Stats from '../components/Stats'
import WalletButton from '../components/WalletButton'

export default function Home() {
  return (
    <div className="page-shell">
      <div className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">On-chain tipping</p>
          <h1>TipJar</h1>
          <p className="hero-text">
            간단하고 깔끔한 웹3 팁 페이지. 잔액 확인, 팁 전송, 최근 기록을 한
            화면에서 확인합니다.
          </p>
        </div>
        <div className="hero-actions">
          <WalletButton />
        </div>
      </div>

      <div className="content-grid">
        <section className="panel">
          <div className="section-head">
            <h2>대시보드</h2>
            <span>실시간 상태</span>
          </div>
          <Stats />
        </section>

        <section className="panel accent-panel">
          <div className="section-head">
            <h2>팁 보내기</h2>
            <span>메시지 포함</span>
          </div>
          <TipForm />
        </section>
      </div>

      <section className="panel timeline-panel">
        <div className="section-head">
          <h2>최근 팁</h2>
          <span>Latest activity</span>
        </div>
        <TipList />
      </section>
    </div>
  )
}
