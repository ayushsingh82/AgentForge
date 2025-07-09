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

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular <span className="text-[#824CFF]">Data Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computer Vision */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
              <p className="text-gray-300 mb-4">Image and video datasets for object detection, classification, and segmentation</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">2,500+ datasets</span>
                <span className="text-gray-400 text-sm">From $50</span>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4">Text datasets for language models, sentiment analysis, and translation</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">1,800+ datasets</span>
                <span className="text-gray-400 text-sm">From $75</span>
              </div>
            </div>

            {/* Audio & Speech */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Audio & Speech</h3>
              <p className="text-gray-300 mb-4">Audio datasets for speech recognition, music generation, and sound classification</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">900+ datasets</span>
                <span className="text-gray-400 text-sm">From $100</span>
              </div>
            </div>

            {/* Scientific Research */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scientific Research</h3>
              <p className="text-gray-300 mb-4">Research datasets for healthcare, climate, and scientific discovery</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">1,200+ datasets</span>
                <span className="text-gray-400 text-sm">From $200</span>
              </div>
            </div>

            {/* Financial Data */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Data</h3>
              <p className="text-gray-300 mb-4">Market data, trading signals, and financial indicators for AI models</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">600+ datasets</span>
                <span className="text-gray-400 text-sm">From $150</span>
              </div>
            </div>

            {/* IoT & Sensor Data */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#824CFF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#824CFF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">IoT & Sensor Data</h3>
              <p className="text-gray-300 mb-4">Sensor data from IoT devices, smart cities, and industrial applications</p>
              <div className="flex justify-between items-center">
                <span className="text-[#824CFF] font-semibold">800+ datasets</span>
                <span className="text-gray-400 text-sm">From $80</span>
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