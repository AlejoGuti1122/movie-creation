const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")

const dbCon = async () => {
  try {
    //Realizar la conexion con la base de datos
    await mongoose.connect(process.env.MONGO_URI)
    console.log("✅ Conectado a la base de datos MongoDB Atlas")
    return true
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message)
    throw error
  }
}

module.exports = dbCon
