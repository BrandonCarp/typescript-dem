const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
 const user = await prisma.user.create({data: {name: "Dio"}})
const users = await prisma.user.findMany()
 console.log(user)
}

main()
.catch(e => {
  console.error(e.message)
})
.finally(async () => {
  await prisma.$disconnect()
})

// 13:39 learn prisma in 60 minutes video