/*module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});*/


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: { 
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: { 
        ca: 'MIIEQTCCAqmgAwIBAgIUJHMQ0nMJ4iXH+JlavTOxXESMsfcwDQYJKoZIhvcNAQEMBQAwOjE4MDYGA1UEAwwvZTVjNzkzNmItYjI2Mi00NDg0LThkNjctNTBlMDA2YTMzZTkwIFByb2plY3QgQ0EwHhcNMjIwNTI4MjIzODA4WhcNMzIwNTI1MjIzODA4WjA6MTgwNgYDVQQDDC9lNWM3OTM2Yi1iMjYyLTQ0ODQtOGQ2Ny01MGUwMDZhMzNlOTAgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAN0emftgt9SBBYTvU3QubCyYqKifxZv7kjDJxcpkomKtMRODzU2PVcuR5dgmwHaRE7tK5OPWz2projBgBnlaN2zowFCQ/vCiyjFpUBv5Q45FzXKp+vcWRD+ub5RMzS9fLb5xEeWxbHQxALM41KzrDG89r/G3i8fXCQmt8DX2plsHdk45J7pdX50Zeuedb/luhUJfODwwsVLtYorgkis2WRYVZy8wPUoYM5eZjJ6QuDaaapNBCv7jzMLLDUZPlj2Gp5DNWjv7tdZeAFCdhg7JaVWVQkZaTUvH72G7XrENJI0/VC1elEWZkkWRbENUWVCoKJzRRQk4uBPbzTzzAp8BUZoF2hMgHQnILZP3J4gu6UcQvdYCkAqfFadlgycyO7hWN8/TtfsV9ovYpofXq8ZTXUSKcz74OpgD3ZXXQQSId2SFqMX6FZGWigSKGl7CefepYp2AURPCw7jmgydmCQpvhr6mOTdCpwFVaidtJ7MIl2gSzu5CvbwTcrXyrulS1dmnQwIDAQABoz8wPTAdBgNVHQ4EFgQUC2Vscvl0t4slQXH6OPsjdAbcYuswDwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGlmUxKbIU1O/pd97BEDTiuUa4s8yy8Szz3OhO7klok6kVbHFmBg0NbHADIjBHykkIxGZV6E7eqZ5IUS6p1Jy3JpSwmdPZ0IU0vpI51f7IfA1QfU5vV3ycsk1OYhynmeQdwlFl6eDOcuAEMsT6FMgYxCrSoliJLj+X+dbPf7EIFlK/v7o0MxAmiurIC4FXU9MuD/naS+/S2U3qLGkq8fRL+OkqD3hn8oiXFmglGwCaf2NuP/JTnJtrSxbCFjhvc3ewVVyGqZlpK5ZJg/neZeAQe6DckAemqdAy9hd/rxrLSpPMzfXVXScjiJN5jZgRQnRqLTywDcE1eHBWngmGE+Vkbw13hiku6/+b8Tr3iyqlXWLq2l7aLKNm6xfe8a9skxEK4/nhI6JBL/+J8Q2FQzyKWhUQR4Ae/nh4PQFH9trDbwO+Nk6r0XXxE+klOCWl67rvDIiKHC/8aFisY2RnLZlGShGYgSEgsmAmR74+z04kgko2OTWF4hlumqSqXMUW+veg=='
      },
    },
    debug: false,
  },
});