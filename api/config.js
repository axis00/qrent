module.exports = {
    ENV : process.env.NODE_ENV || 'development',
    PORT : process.env.PORT || 3000,
    URL : process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb://beta:beta001@ds133275.mlab.com:33275/qrent-beta-001',
    JWT_SECRET : process.env.JWT_SECRET || 'usersercret'
}