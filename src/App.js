import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <svg width="300" height="150" viewBox="0 0 300 150">
          <text
            x="50%"               // viewBox 가로(300)의 중앙
            y="50%"                // viewBox 세로(150)의 중앙 (텍스트 베이스라인을 고려해 약간 아래로)
            textAnchor="middle"   // 정렬
            fontSize="5em"
            fontWeight="bold"
            fill="#181818"
            stroke="#181818"
            strokeWidth="3"        // 두께
            strokeLinejoin="round" // 모서리
          >
            Gaget
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
