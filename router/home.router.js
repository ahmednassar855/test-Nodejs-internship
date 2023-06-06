import express from 'express'
import * as  homeController from '../controller/home.controller.js'

const homRouter = express.Router()

homRouter.get('/' , homeController.fetchData)

export default homRouter