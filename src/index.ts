import express from 'express';
import mongoose from 'mongoose';
import queueRoutes from './routes/queueRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const PORT = 3000;

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Queue Management API',
      version: '1.0.0',
      description: 'API to manage queue items',
    },
  },
  apis: ['./src/routes/*.ts'],
});

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(queueRoutes);

mongoose.connect('mongodb://localhost:27017/queue')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  })
  .catch(err => console.error('MongoDB connection error:', err));
