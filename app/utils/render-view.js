/**
 * dependencies
 */
import path from 'path'

/**
 * public
 */
export default function (req, res, next) {
  res.renderView = (view, data) =>
    res.render(path.join(req.domainName, 'views', view), data)

  next()
}
