import app from "./app";
import './database/conection';
import RutasNotas from './routes/notas.routes'

app.listen(app.get("port"));
app.use( RutasNotas);

console.log("Servidor corriendo en puerto", app.get("port"));