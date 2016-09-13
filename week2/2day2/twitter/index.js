const request = require("")

const CONSUMER_KEY = 	'XW04TnNlRaUFqKEx3dGlIGYeS'

const CONSUMER_SECRET = '	yZrIA1372ZO3ssI2TZ3HmA7nTLok0gcF9yGlmq1z1jM3gCOZNs'

const TOKEN = 'p7VACfiqUEdno8u61sUp1RM3n3RlCl37smsCJxa'

const TOKEN_SECRET = '2296911037-qS63TmbLDdt3tz1xZ1NvuWMyBpGloSTYVSuz8aFK5b2M4'

const BASE_URL = 'https://api.twitter.com/1.1/'



request.get(`${BASE_URL}statuses/user_timeline.json?screen_name=Master00Blaster`, (err, response,body) => {
  console.log(body);
})


// we gave up during the lesson. TIP. install the twitter module from NPM
