import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'jonn.doe@gmail.com',
      avatarUrl: 'http://github.com/rezendelc.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BO123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T10:29:35.416Z',
      firstTeamCountryCode: 'GE',
      secondTeamCountryCode: 'BRA',
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-05T13:14:34.416Z',
      firstTeamCountryCode: 'BRA',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              }
            }
          }
        }
      }
    }
  })
}

main()