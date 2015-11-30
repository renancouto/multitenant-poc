/**
 * dependencies
 */
import path from 'path'
import express from 'express'
import vhost from 'vhost'
import config from '../config'
import router from './router'
import domainHandler from './utils/domain-handler'
import renderView from './utils/render-view'

/**
 * settings
 */
const app = express()
const port = process.env.PORT || config.app.PORT

// express setup
app.set('views', path.join(__dirname, '../themes'))
app.set('view engine', 'jade')
app.use(domainHandler)
app.use(renderView)
app.use('/', router)

// vhost domains
Object.keys(config.themes).forEach((domain) =>
  app.use(vhost(domain, express.static(path.join(__dirname, '../themes', config.themes[domain], 'public')))))

// start server
app.listen(port, () => console.log(`Started ${config.app.NAME} server at ${port}`))

/**
 * public
 */
export default app
