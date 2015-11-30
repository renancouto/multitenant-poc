/**
 * dependencies
 */
import express from 'express'
import controllers from './controllers'

/**
 * settings
 */
const router = express.Router()

/**
 * routes
 */
router.get('/', controllers.home)
router.get('/dione', controllers.dione)
router.get('/rhea', controllers.rhea)

/**
 * public
 */
export default router
