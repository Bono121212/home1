module.exports = {
    plugins: [
        {
            plugin: require("@semantic-ui-react/craco-less")
        },
        {
            plugin: require('craco-base64-inline-loader'),
            options: {
                test: /\.(jpg|jpeg|gif|png|svg|ttf|otf|woff(2)?)$/i,
                limit: 150000
            }
        }
    ]
};

