module.exports = {
  reactStrictMode: true,
  basePath: '/blog',
  async rewrites() {
    const has = [{
      type: 'host',
      value: '(?<host>.*)'
    }]

    return [{
      has,
      source: '/',
      destination: '/:host'
    }, {
      has,
      source: '/:path*',
      destination: '/:host/:path*'
    }]
  }
}
