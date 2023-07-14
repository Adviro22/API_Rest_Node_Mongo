import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import TasksRoutes from './routes/tasksroutes.js'

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Middlewares
const corsOptions = {}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.get('/', (req, res) =>{
    res.json({message: 'Bienvenido a mi aplicacion'});
})

app.use('/user/description',TasksRoutes);
export default app;