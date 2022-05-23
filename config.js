module.exports =  {
    api:{
        port: process.env.API_PORT || 3000
    },

    jwt:{
        secret: process.env.JWT_SECRET || 'notasecret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || '172.18.0.2',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'admin123',
        database: process.env.MYSQL_DB || 'my_store',
    },
}