import { useState } from 'react'
import './App.css'
import { SolanaWallet } from './SolanaWallet'
import { EthWallet } from './EthWallet'
import { generateMnemonic } from "bip39";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="App">
      <h1>Web-based Wallet</h1>

      {/* Button to create a new seed phrase */}
      <button onClick={async () => {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button>

      {/* Display mnemonic */}
      <input type="text" value={mnemonic} readOnly />

      {/* Solana Wallet */}
      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}

      {/* Ethereum Wallet */}
      {mnemonic && <EthWallet mnemonic={mnemonic} />}
    </div>
  )
}

export default App;
