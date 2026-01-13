import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Blog - Polypo',
  description: 'Innovative Solutions Tailored for the Fashion-Forward',
}

export default function BlogPage() {
  const blogPosts = [
    {
      category: 'INSIGHTS',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea86f7c4?q=80&w=800',
      title: 'With Spatial Computing, the World is Your Canvas',
    },
    {
      category: 'INSIGHTS',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?q=80&w=800',
      title: 'Introduction to Spatial Computing and What It Means for the Fashion Industry',
    },
    {
      category: 'FEATURES',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800',
      title: 'Innovating in FashionTech? You Can\'t Ignore Gen-Z',
    },
    {
      category: 'FEATURES',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=800',
      title: 'The Evolving Landscape of the Fashion Industry and the Role of Technology',
    },
    {
      category: 'FEATURES',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
      title: 'Microsoft for Startups Founders Hub',
    },
    {
      category: 'COLLABS',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800',
      title: 'Polypo x Spatial Computing: All Try-On Solutions',
    },
    {
      category: 'COLLAB',
      date: 'January, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
      title: 'Polypo x Beauties AR Try-On Solutions',
    },
    {
      category: 'COMMUNITY',
      date: 'March, 2024',
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?q=80&w=800',
      title: 'Board Member Announcement: Who is Priscilla Schott?',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Featured Article Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Left Card */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-100/80 to-white/60 backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                  alt="Featured article"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                />
              </div>
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-gray-900">
                    FEATURED
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    NAME OF THE ARTICLE
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TECH', 'FASHION', 'INNOVATION', 'FUTURE', 'SUSTAINABILITY'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-100/80 to-white/60 backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                  alt="Featured article"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                />
              </div>
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    NAME OF THE ARTICLE
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TECH', 'FASHION', 'INNOVATION', 'FUTURE', 'SUSTAINABILITY'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Title */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 tracking-widest mb-2">OUR BLOG</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
              Innovative Solutions Tailored<br />for the Fashion-Forward
            </h1>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <Section className="py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-900 hover:bg-white/80 transition-all">
                VIEW ALL
              </button>
              <button className="px-6 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
                INSIGHTS
              </button>
              <button className="px-6 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
                FEATURES
              </button>
              <button className="px-6 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
                COLLABS
              </button>
              <button className="px-6 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
                COMMUNITY
              </button>
            </div>
            <div className="relative w-full md:w-auto">
              <select className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-900 hover:bg-white/80 transition-all appearance-none pr-10">
                <option>MOST RECENT</option>
                <option>OLDEST</option>
                <option>POPULAR</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="w-full px-6 py-4 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/80 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all">
              SEARCH
            </button>
          </div>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold">
                      {post.badge}
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="font-bold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
              BACK
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-semibold">1</button>
              <button className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">2</button>
              <button className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">3</button>
            </div>
            <button className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/40 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all">
              NEXT
            </button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="glass-card-strong p-12 space-y-6">
            <p className="text-sm text-gray-600 tracking-widest">GET SUPPORT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Book a call with us for support
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              See how Polypo adapts to your brand from size recommendations to fit visualization, data, and rollout.
            </p>
            <div className="pt-4">
              <Link
                href="/#book-demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/60 backdrop-blur-sm border border-purple-300/40 text-gray-900 font-semibold text-base hover:bg-white/80 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                ASK OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
