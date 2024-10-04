import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { sequelize, testConnection} from './configs/database.js';
import interviewerAuthRoutes from './routes/interviewerAuthRoutes.js'



testConnection()

const app = express()
dotenv.config()


app.use(cors());
app.use(express.json())


app.use('/api/v1/', interviewerAuthRoutes)


app.get('/', (req, res)=>{
    res.json({
        hello : "as"
    })
})


const port = process.env.PORT || 3000;
app.listen(port || 3100, ()=>{
    console.log(`Server is listening on Port : ${port}`);
    
})


// const server = createServer(app);

/*
const io = new Server(server,{
    cors : {
        origin : "http;//localhost:5173",
        methods : ["GET", "POST"]
    }
});
*/

/*
io.on('connection', (socket) => {
    console.log('a user connected');
    // socket.on('disconnect', () => {
    //   console.log('user disconnected');
    // });
  });
*/

/*
io.on('connection', (socket)=> {
    console.log('A user connected', socket.id);
    
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
 
 socket.on("sockety-id", ()=>{
    
 })
*/

// server.listen(3000,()=>{
//     console.log("Server is running on 3000");
    
// })
