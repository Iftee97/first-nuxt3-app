export default defineEventHandler(async (event) => {
  const { name } = useQuery(event) // handle query params

  const { age } = await useBody(event) // handle body params

  return {
    message: `Hello ${name}, you are ${age} years old!`
  }
})