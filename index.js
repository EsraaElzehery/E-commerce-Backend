import express from 'express'
import sequelize from './config/database.js';
import dotenv from 'dotenv';
// import router from './routes/userRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import  setupAssociations from './models/associations.js';
// dotenv.config();    
const PORT = process.env.PORT || 2000;
const app = express();

setupAssociations()
await sequelize.sync({alter: true}).then(()=>{
    console.log('Database connected successfully');
}); // Sync the database with the models
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');    
});

app.use('/api/users',userRoutes)
app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:2000`);

})