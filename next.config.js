const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  env: {
    name: 'jwpay',
    version: '1.0.0',
    title: '及未支付',
    slogan: '以任务的形式来完成支付',
    contactEmail: 'contact@mg.jwpay.app',

    theme: {
      primaryColor: '#d4380d',
      linkColor: '#610b00',
    },
  },
  publicRuntimeConfig: {
    domain: process.env.DOMAIN || (isProd ? 'https://jwpay.app' : 'http://localhost:3000'),
    logApiRequest: process.env.LOG_API_REQUEST !== undefined ? (process.env.LOG_API_REQUEST === 'true') : !isProd,
    logReduxAction: process.env.LOG_REDUX_ACTION !== undefined ? (process.env.LOG_REDUX_ACTION === 'true') : !isProd,
    mockApi: process.env.MOCK_API !== undefined ? (process.env.MOCK_API === 'true') : !isProd,
  },
  serverRuntimeConfig: {
  },
})
