import express from 'express';

export const app = express();
app.use(express.json());

if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}


