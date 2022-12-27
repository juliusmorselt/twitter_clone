const dotenv = require("dotenv")
var Twit = require("twit")

const Tweets = () => {
    var T = new Twit({
        consumer_key: process.env.TWITTER_API_KEY,
        consumer_secret: process.env.TWITTER_API_KEY_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    })

    const shitter = T.get(
        "search/tweets",
        { q: "Nextjs since:2011-07-11", count: 1 },
        function (err, data, response) {
            console.log(data)
        }
    )

    let tweet = shitter.data
    return <p>{tweet}</p>
}

export default Tweets
