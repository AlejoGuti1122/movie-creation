const app = require("./src/server")
const dbCon = require("./src/config/dbCon")

dbCon().then((res) => {
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
  })
})