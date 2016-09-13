
const SERVER_TOKEN = 'RUV3EPomyVlf-lSvG_ROxwJfcf5gjLNbb6qTFYIu'
const CLIENT_ID = 'NF2U0aUG-j0l0NbwLQJnas_veKQW23Us'
const BASE_URL = 'https://api.uber.com/v1'
const LAT = '37.7759792'
const LONG = '-122.41823'

// curl -H 'Authorization: Token RUV3EPomyVlf-lSvG_ROxwJfcf5gjLNbb6qTFYIu' \
// 'https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823'


var requestData = {
  url: '${BASE_URL}/products?lattitude=${LAT}&longitude=${LONG}',

}



// waiting on lecture code
