const mongoose = require("mongoose")

const dbCon = async () => {
  try {
    //Realizar la conexion con la base de datos
    await mongoose.connect(
      "mongodb+srv://cgutierrezdalejandro:x0GRZWiit4OHYE6c@movies.udnrt1m.mongodb.net/prueba"
    )
    console.log("✅ Conectado a la base de datos MongoDB Atlas")
    return true
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message)
    throw error
  }
}

module.exports = dbCon
