var Twit = require('twit')

const TWITTER_API_KEY='LnNcAULNB5SN6p1zNPNmSrQsn'
const TWITTER_API_KEY_SECRET='0Y1zegDUnZ0FVWlMdXWuEmsAlsm3UJxDXvappMOL7TuHPnc5vW'
const TWITTER_ACCESS_TOKEN='2201472557-Kq282Nj688xpbrTh8KCIBjDRdQks4XjZs6ENuxy'
const TWITTER_ACCESS_TOKEN_SECRET='S6QUxaDXQUsKBpby0eWmSjteItO76doKsKF1z9cFT0FzQ'

const Tweets = () => {
    var T = new Twit({
        consumer_key:         TWITTER_API_KEY,
        consumer_secret:      TWITTER_API_KEY_SECRET,
        access_token:         TWITTER_ACCESS_TOKEN,
        access_token_secret:  TWITTER_ACCESS_TOKEN_SECRET,
    })
    
    // T.get('search/tweets', { q: 'Nextjs since:2011-07-11', count: 1 }, function(err, data, response) { 
    //     console.log('This is a tweet. With the text: ' + data[text])
    // })
 
    return(

        <div>
            {/* {content} */}
        </div>
    )

} 

export default Tweets