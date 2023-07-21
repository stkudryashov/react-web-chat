import { pino } from 'pino'

const transport = pino.transport({
  targets: [
    {
      level: 'trace',
      target: 'pino/file',
      options: {
        destination: 'logger.log'
      }
    },
    {
      level: 'trace',
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  ]
})

export const logger = pino(transport)
