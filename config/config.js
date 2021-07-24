const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'sk_test_51JAHxFG7V0gu1TeqanDLxulCyw7vTTigsuAKlgq1HaiXPKqySs0MbTE871SsWYEwkRoe9MDk8xYZ7xxa9699T9vG00GtZ5wv28',
  stripe_test_secret_key: 'sk_test_51JAHxFG7V0gu1TeqanDLxulCyw7vTTigsuAKlgq1HaiXPKqySs0MbTE871SsWYEwkRoe9MDk8xYZ7xxa9699T9vG00GtZ5wv28',
  stripe_test_api_key: 'pk_test_51JAHxFG7V0gu1TeqIvb0S3M0iop2XdepgcHpPsjMjYXWpzTJzodDPq0d4P1Lq8z9PaeTVhlv5ExaraL8TbpBKxwR00OUbSGtYF'
}

export default config