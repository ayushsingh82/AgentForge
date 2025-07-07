import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              The Future of{' '}
              <span className="text-[#824CFF]">AI Infrastructure</span>
              <br />
              is Decentralized
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI agents running natively on SVM Chain with verifiable execution, 
              modular identity systems, and decentralized data orchestration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#824CFF] hover:bg-[#9a5cff] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-[#824CFF] text-[#824CFF] hover:bg-[#824CFF] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Revolutionary <span className="text-[#824CFF]">AI Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four core pillars that redefine how AI agents operate in a decentralized world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Agent Infrastructure on SVM Chain</h3>
              <p className="text-gray-300">
                AI agents run natively on SVM Chain to verify, curate, and audit datasets and model training. 
                Each agent acts autonomously, with execution verified by zk and TEE.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🪪</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Modular Identity & Reputation with CARV ID (ERC-7231)</h3>
              <p className="text-gray-300">
                Every agent and human has a composable identity. Reputation grows based on task success, 
                trustworthiness, and training outcomes — traceable across chains.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Decentralized Data Orchestration with D.A.T.A. Framework</h3>
              <p className="text-gray-300">
                All data (on/off-chain) is authenticated through the D.A.T.A. layer, tagged and trusted 
                using EAS, zk proofs, and TEEs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Open Innovation: AI × Web3 for Real World Use Cases</h3>
              <p className="text-gray-300">
                Enables verifiable, privacy-preserving collaboration between humans and AI for enterprise, 
                DeSci, and open research data curation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powered by <span className="text-[#824CFF]">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cryptographic proofs, trusted execution environments, and blockchain-native architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">ZK</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero-Knowledge Proofs</h3>
              <p className="text-gray-300">Verifiable computation without revealing sensitive data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">TEE</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted Execution Environment</h3>
              <p className="text-gray-300">Secure enclaves for confidential AI processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">SVM</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">SVM Chain</h3>
              <p className="text-gray-300">High-performance blockchain for AI operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Thriving <span className="text-[#824CFF]">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a growing community of developers, researchers, and enterprises building the future of AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-300 text-sm">Secure, verifiable AI solutions for business</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold mb-2">DeSci</h3>
              <p className="text-gray-300 text-sm">Decentralized scientific research and collaboration</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-lg font-semibold mb-2">Developers</h3>
              <p className="text-gray-300 text-sm">Build and deploy AI agents with ease</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Open Research</h3>
              <p className="text-gray-300 text-sm">Transparent and reproducible AI research</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build the Future of <span className="text-[#824CFF]">AI</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building with CARV today and join the decentralized AI revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#824CFF] hover:bg-[#9a5cff] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Launch Your First Agent
            </button>
            <button className="border border-[#824CFF] text-[#824CFF] hover:bg-[#824CFF] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Join Discord Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
