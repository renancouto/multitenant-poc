/**
 * dependencies
 */
import config from '../../config'

/**
 * public
 */
export default function (req, res, next) {
  req.domainName = config.themes[req.hostname]
  next()
}
