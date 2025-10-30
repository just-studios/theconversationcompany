import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/TCC-Web-Logo.svg"
                alt="The Conversation Company Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#how-it-works" className="text-[#404643] hover:text-[#2abdb1] transition-colors font-medium">
                How It Works
              </Link>
              <Link href="/#results" className="text-[#404643] hover:text-[#2abdb1] transition-colors font-medium">
                Results
              </Link>
              <Link href="/about" className="text-[#2abdb1] font-medium">
                About
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-2 bg-gradient-to-r from-[#2abdb1] to-[#25a89e] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2abdb1] to-[#25a89e] bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-2xl text-[#404643]/80">
            How we discovered the power of real conversation
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg text-[#404643]/80 leading-relaxed">
            <p className="text-2xl font-semibold text-[#404643]">This started with a PowerPoint that bombed.</p>

            <p>
              I wanted to help college students transition into the professional world, to build the confidence and
              skills universities weren't teaching. So I created a curriculum packed with frameworks, tools, and insights.
              Students signed up. I built the perfect presentation.
            </p>

            <p className="font-semibold text-[#404643]">Then came our first webinar.</p>

            <p>
              Ninety minutes in, staring at a grid of half-off cameras and dead eyes, I knew: The information is solid.
              But this format is soul-crushing.
            </p>

            <p className="font-semibold text-[#404643]">So I tried something radical. I thought, "What if we just... talked about this?"</p>

            <p>
              I scrapped the PowerPoint. Next session, I broke students into small groups to reflect, discuss, and share
              their stories.
            </p>

            <p className="font-semibold text-[#404643]">Night and day.</p>

            <p>
              Students were lit up. I got emails saying it was the most impactful session they'd had all semester.
              People asked if they could bring friends.
            </p>

            <p className="text-2xl font-semibold text-[#2abdb1]">
              That's when it clicked: The problem wasn't the content. The problem was that we'd built containers that
              killed the very thing that makes learning work—real human conversation.
            </p>

            <p>
              I started talking to friends running communities. Course creators drowning in content libraries. Coaches
              watching their engagement plummet. Everyone had the same problem: How do we scale intimacy?
            </p>

            <p className="text-xl font-semibold text-[#404643]">
              So we built this. Not another bloated platform. Not more features. A simple system to give people the best
              conversation of their week, centered on your content.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#2abdb1]/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#404643]">
            Ready to transform your community?
          </h2>
          <Link
            href="/#contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#2abdb1] to-[#25a89e] text-white text-lg font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#404643] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70">© 2025 The Conversation Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
