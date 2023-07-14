import app from './app.js'
import './db.js'

app.listen(app.get('port'))
console.log('server en el puerto:', app.get('port'))