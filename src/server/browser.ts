import { setupWorker } from 'msw'
import { getHandlers } from './handlers'

export const server = setupWorker(...getHandlers())
