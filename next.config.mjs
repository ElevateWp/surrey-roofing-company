/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/about', destination: '/sobre/', permanent: true },
      { source: '/services', destination: '/servicos/', permanent: true },
      { source: '/testimonials', destination: '/avaliacoes/', permanent: true },
      { source: '/our-team/:path*', destination: '/equipe/:path*', permanent: true },
      { source: '/request-a-quote', destination: '/orcamento/', permanent: true },
      { source: '/contact', destination: '/contato/', permanent: true },
      { source: '/blog/:path*', destination: '/dicas/:path*', permanent: true },
      { source: '/roofing-services', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-repairs-old', destination: '/roof-repairs/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/ridge-tile-repairs/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-maintenance', destination: '/roof-restoration/', permanent: true },
      { source: '/flat-roofing', destination: '/roof-repairs/', permanent: true },
      { source: '/slate-and-tile-roofing', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-replacements', destination: '/roof-restoration/', permanent: true },
      { source: '/gutter-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/chimney-repairs-old', destination: '/chimney-repairs/', permanent: true },
      { source: '/general-plumbing', destination: '/roof-repairs/', permanent: true },
      { source: '/hot-water-systems', destination: '/roof-repairs/', permanent: true },
      { source: '/blocked-drains', destination: '/roof-repairs/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
