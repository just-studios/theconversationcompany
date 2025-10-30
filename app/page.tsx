import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
              <Image
                src="/TCC-Web-Logo.svg"
                alt="The Conversation Company Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-[#404643] hover:text-[#2abdb1] transition-colors font-medium">
                How It Works
              </a>
              <a href="#results" className="text-[#404643] hover:text-[#2abdb1] transition-colors font-medium">
                Results
              </a>
              <Link href="/about" className="text-[#404643] hover:text-[#2abdb1] transition-colors font-medium">
                About
              </Link>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#2abdb1] to-[#25a89e] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2abdb1]/5 via-white to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h1 className="font-bold tracking-tight mb-10 animate-fade-in-up">
            <span className="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-[#2abdb1] to-[#25a89e] bg-clip-text text-transparent">
              Your content is great.
            </span>
            <span className="block mt-6 text-5xl sm:text-6xl lg:text-7xl text-[#404643]">
              The container sucks.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-2xl text-[#404643]/70 mb-14 animate-fade-in-up delay-200 leading-relaxed">
            Give your community the conversations they're actually craving.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-400">
            <a
              href="#how-it-works"
              className="px-12 py-5 bg-gradient-to-r from-[#2abdb1] to-[#25a89e] text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              See How It Works
            </a>
            <a
              href="#contact"
              className="px-12 py-5 bg-white text-[#2abdb1] text-lg font-semibold rounded-full border-2 border-[#2abdb1] hover:bg-[#2abdb1]/5 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Talk To Us
            </a>
          </div>
        </div>
      </section>

      {/* The Problem - Left Aligned */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-6xl font-bold mb-8 text-[#404643] leading-tight">
                The Problem
              </h2>
              <div className="space-y-5 text-xl text-[#404643]/70 leading-relaxed">
                <p>Your first cohort was electric. Real conversations, breakthroughs, results.</p>
                <p className="font-semibold text-[#404643]">Then you scaled.</p>
                <p>
                  Now: Dead Slack channels. Cameras-off webinars. Content libraries no one watches.
                  Retention dropping.
                </p>
                <p className="text-2xl font-semibold text-[#2abdb1] pt-2">
                  You're choosing between intimacy and income.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-[#2abdb1]/10">
                <div className="text-7xl font-bold text-[#2abdb1]/20 mb-6">?</div>
                <p className="text-2xl font-semibold text-[#404643] leading-relaxed">
                  The platforms promised community. They delivered content management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Right Aligned */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-[#2abdb1]/10">
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <span className="text-[#2abdb1] text-5xl group-hover:scale-125 transition-transform duration-300">•</span>
                    <p className="text-xl font-semibold text-[#404643]">Intentionally small</p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <span className="text-[#2abdb1] text-5xl group-hover:scale-125 transition-transform duration-300">•</span>
                    <p className="text-xl font-semibold text-[#404643]">Self guided structure</p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <span className="text-[#2abdb1] text-5xl group-hover:scale-125 transition-transform duration-300">•</span>
                    <p className="text-xl font-semibold text-[#404643]">Research backed format</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <h2 className="text-6xl font-bold mb-8 text-[#404643] leading-tight">
                The Solution
              </h2>
              <p className="text-3xl font-bold mb-8 text-[#2abdb1]">
                Stop managing content. Lead a movement.
              </p>
              <div className="space-y-5 text-xl text-[#404643]/70 leading-relaxed">
                <p>
                  We create structured, 4-person video conversations that help your members process what they're learning.
                </p>
                <p className="font-semibold text-[#404643]">
                  Not breakout rooms. Curated conversations designed for breakthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-24 text-[#404643] animate-fade-in-up">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center animate-fade-in-up delay-100 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2abdb1] to-[#25a89e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#404643]">DESIGN</h3>
              <p className="text-[#404643]/70 text-lg leading-relaxed">
                Custom conversation flows tailored to your content
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-200 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2abdb1] to-[#25a89e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#404643]">MATCH</h3>
              <p className="text-[#404643]/70 text-lg leading-relaxed">
                Algorithm groups members by alignment and expertise
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-300 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2abdb1] to-[#25a89e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#404643]">CONNECT</h3>
              <p className="text-[#404643]/70 text-lg leading-relaxed">
                60-minute guided conversations that go deep
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-400 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2abdb1] to-[#25a89e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#404643]">DELIVER</h3>
              <p className="text-[#404643]/70 text-lg leading-relaxed">
                Insights for members and strategic intelligence for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Right Aligned */}
      <section id="results" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-8 rounded-2xl border border-[#2abdb1]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#2abdb1] mb-3">Higher Retention</h3>
                  <p className="text-sm text-[#404643]/70 leading-relaxed">Members get real results</p>
                </div>
                <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-8 rounded-2xl border border-[#2abdb1]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#2abdb1] mb-3">More Revenue</h3>
                  <p className="text-sm text-[#404643]/70 leading-relaxed">Word-of-mouth referrals</p>
                </div>
                <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-8 rounded-2xl border border-[#2abdb1]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#2abdb1] mb-3">Better Programs</h3>
                  <p className="text-sm text-[#404643]/70 leading-relaxed">Build what they need</p>
                </div>
                <div className="bg-gradient-to-br from-[#2abdb1]/10 to-white p-8 rounded-2xl border border-[#2abdb1]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#2abdb1] mb-3">Real Testimonials</h3>
                  <p className="text-sm text-[#404643]/70 leading-relaxed">Specific breakthrough stories</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <h2 className="text-6xl font-bold mb-8 text-[#404643] leading-tight">
                The Results
              </h2>
              <p className="text-2xl mb-8 text-[#404643]/70 leading-relaxed">
                What happens when people have conversations they actually want?
              </p>
              <p className="text-xl font-semibold text-[#2abdb1] leading-relaxed">
                Strategic intelligence wrapped in an experience your members will tell their friends about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For - Left Aligned */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-6xl font-bold mb-10 text-[#404643] leading-tight">
                Who This Is For
              </h2>
              <p className="text-3xl mb-10 text-[#2abdb1] font-semibold">You if:</p>
              <ul className="space-y-6">
                <li className="flex items-start text-xl text-[#404643]/70 group">
                  <span className="text-[#2abdb1] text-3xl mr-4 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span>You've built something worth sharing</span>
                </li>
                <li className="flex items-start text-xl text-[#404643]/70 group">
                  <span className="text-[#2abdb1] text-3xl mr-4 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span>Engagement is tanking as you scale</span>
                </li>
                <li className="flex items-start text-xl text-[#404643]/70 group">
                  <span className="text-[#2abdb1] text-3xl mr-4 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span>Your platform isn't creating transformation</span>
                </li>
                <li className="flex items-start text-xl text-[#404643]/70 group">
                  <span className="text-[#2abdb1] text-3xl mr-4 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span>You want strategic insights, not vanity metrics</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-[#2abdb1] to-[#25a89e] p-14 rounded-3xl text-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <p className="text-3xl font-bold mb-8 leading-snug">
                  "The intimacy, peer accountability, and breakthroughs disappeared as we scaled."
                </p>
                <p className="text-2xl opacity-95">
                  Sound familiar? We're building the alternative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe - Right Aligned */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="bg-gradient-to-br from-gray-50 to-white p-14 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2abdb1] mb-3">We Love</h3>
                    <p className="text-[#404643]/70 text-lg leading-relaxed">Peer-to-peer learning. Aha moments. Real conversations.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2abdb1] mb-3">We Hate</h3>
                    <p className="text-[#404643]/70 text-lg leading-relaxed">Dead forums. Cameras-off webinars. Solo learning.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2abdb1] mb-3">We're Building</h3>
                    <p className="text-[#404643]/70 text-lg leading-relaxed">The thing that makes your content come alive.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <h2 className="text-6xl font-bold mb-8 text-[#404643] leading-tight">
                What We Believe
              </h2>
              <p className="text-xl text-[#404643]/70 mb-8 leading-relaxed">
                We believe in people who have something real to share with the world.
              </p>
              <p className="text-3xl font-semibold text-[#2abdb1] leading-snug">
                Not a replacement. A supplement. The reason people stay, refer, and rave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative py-40 px-6 bg-gradient-to-br from-[#2abdb1] to-[#25a89e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
            Give your community the best conversation of their week
          </h2>

          <p className="text-2xl sm:text-3xl mb-16 text-white/95 leading-relaxed animate-fade-in-up delay-200">
            Stop watching engagement die. Start leading a movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
            <a
              href="https://calendly.com"
              className="px-12 py-5 bg-white text-[#2abdb1] text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Schedule a Call
            </a>
            <a
              href="#how-it-works"
              className="px-12 py-5 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#404643] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 text-lg">© 2025 The Conversation Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
