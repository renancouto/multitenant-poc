/**
 * settings
 */
const data = {
  dione: {
    title: 'Dione - Saturn Moon'
  },

  rhea: {
    title: 'Saturn Moon - Rhea'
  }
}

/**
 * public
 */
export default function (req, res) {
  res.renderView('index', data[req.domainName])
}
