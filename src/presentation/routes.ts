import { Router } from 'express'
import { TicketRoutes } from './tickets/routes'

export class AppRoutes {
  static getRoutes(): Router {
    const router = Router()

    // Definir las rutas
    router.use('/api/tickets', TicketRoutes.getRoutes())

    return router
  }
}
