module.exports = ({ env }) => ({
    upload: {
        breakpoints: {
            xlarge: 1920,
            large: 1000,
            medium: 750,
            small: 500,
            xsmall: 64
        }
    },
        email: {
                provider: 'sendmail',
                settings: {
                        defaultFrom: 'tatianastropkaiova@gmail.com',
                        ddefaultReplyTo: 'tatianastropkaiova@gmail.com'
                }
        }
})