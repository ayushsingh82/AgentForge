import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Verifiable <span className="text-[#824CFF]">AI Data Marketplace</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Buy, sell, and trade AI datasets with guaranteed authenticity, provenance, and quality verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#824CFF] hover:bg-[#9a5cff] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Browse Datasets
              </button>
              <button className="border border-[#824CFF] text-[#824CFF] hover:bg-[#824CFF] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                List Your Data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#824CFF] mb-2">10,000+</div>
              <div className="text-gray-300">Verified Datasets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#824CFF] mb-2">$2.5M+</div>
              <div className="text-gray-300">Total Volume Traded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#824CFF] mb-2">500+</div>
              <div className="text-gray-300">Active Sellers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#824CFF] mb-2">99.9%</div>
              <div className="text-gray-300">Verification Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Agents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-[#824CFF]">AI Agents</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Agent 1 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#824CFF] rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#824CFF]">0.15 CARV</div>
                  <div className="text-sm text-gray-400">per call</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">DataAgent Pro</h3>
              <p className="text-gray-300 mb-4">
                Advanced data analysis agent specializing in on-chain analytics and DeFi insights. 
                Provides real-time market analysis and trading signals.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">📚</span>
                  <span className="text-gray-300">System Role: Data Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">🎯</span>
                  <span className="text-gray-300">Primary Goal: Alert whale moves, detect pump-and-dump tokens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">⚡</span>
                  <span className="text-gray-300">Environment: DeepSeek</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">🧪</span>
                  <span className="text-gray-300">Model: deepseek-chat</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">on-chain</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">DeFi</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">trading</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">analytics</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#824CFF] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <span className="text-gray-300">CARV ID: 0x1234...5678</span>
                </div>
                <button className="px-6 py-2 bg-[#824CFF] text-white rounded-lg hover:bg-[#9a5cff] transition-colors">
                  Deploy Agent
                </button>
              </div>
            </div>

            {/* AI Agent 2 */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#824CFF] rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🔍</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#824CFF]">0.25 CARV</div>
                  <div className="text-sm text-gray-400">per call</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">SocialInsight Bot</h3>
              <p className="text-gray-300 mb-4">
                Social media sentiment analysis agent that monitors Twitter, Reddit, and Discord 
                for crypto trends and community sentiment.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">📚</span>
                  <span className="text-gray-300">System Role: Social Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">🎯</span>
                  <span className="text-gray-300">Primary Goal: Monitor social sentiment and detect trending topics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">⚡</span>
                  <span className="text-gray-300">Environment: OpenAI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#824CFF]">🧪</span>
                  <span className="text-gray-300">Model: gpt-4</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">social</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">sentiment</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">trending</span>
                <span className="px-3 py-1 bg-[#824CFF]/20 border border-[#824CFF]/40 rounded-full text-[#824CFF] text-sm">monitoring</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#824CFF] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <span className="text-gray-300">CARV ID: 0x9876...4321</span>
                </div>
                <button className="px-6 py-2 bg-[#824CFF] text-white rounded-lg hover:bg-[#9a5cff] transition-colors">
                  Deploy Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <span className="text-[#824CFF]">Verification</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Submission</h3>
              <p className="text-gray-300">Submit your dataset with metadata, provenance information, and quality metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Agent Verification</h3>
              <p className="text-gray-300">Our AI agents analyze data quality, authenticity, and compliance using zk proofs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#824CFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Listing</h3>
              <p className="text-gray-300">Verified datasets are listed with trust scores and immutable provenance records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for <span className="text-[#824CFF]">Trust</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">🔒 Zero-Knowledge Proofs</h3>
              <p className="text-gray-300 mb-4">Verify data quality and authenticity without revealing sensitive information</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Privacy-preserving verification</li>
                <li>• Cryptographic data integrity</li>
                <li>• Scalable proof generation</li>
              </ul>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">🛡️ Trusted Execution Environment</h3>
              <p className="text-gray-300 mb-4">Secure enclaves ensure confidential processing and verification</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Hardware-level security</li>
                <li>• Isolated computation</li>
                <li>• Tamper-proof verification</li>
              </ul>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">📊 Reputation System</h3>
              <p className="text-gray-300 mb-4">Track seller and data quality reputation across all transactions</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Cross-chain reputation tracking</li>
                <li>• Quality-based scoring</li>
                <li>• Community-driven validation</li>
              </ul>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">🔗 Immutable Provenance</h3>
              <p className="text-gray-300 mb-4">Complete audit trail of data origin, processing, and ownership</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Blockchain-based tracking</li>
                <li>• Transparent data lineage</li>
                <li>• Permanent verification records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 