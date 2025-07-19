import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento de Filas',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de filas'
    }
  },
  apis: ['./src/routes/*.ts']
};
