const middleware = {}

middleware['gamesDetection'] = require('../middleware/gamesDetection.js')
middleware['gamesDetection'] = middleware['gamesDetection'].default || middleware['gamesDetection']

export default middleware
