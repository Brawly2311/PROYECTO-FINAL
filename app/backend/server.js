// SERVIDOR EXPRESS MINIMO 
const express = require('express'); 
const app = express(); 
 
// Middleware b sico 
app.use(express.json()); 
 
// RUTA PRINCIPAL 
app.get('/', (req, res) =
  res.json({ message: 'API DevOps funcionando!' }); 
}); 
 
// HEALTH CHECK 
app.get('/health', (req, res) =
  res.json({ status: 'ok', timestamp: new Date().toISOString() }); 
}); 
 
// SIMULAR DATOS (sin base de datos) 
app.get('/api/users', (req, res) =
  res.json([ 
    { id: 1, name: 'Usuario 1' }, 
    { id: 2, name: 'Usuario 2' } 
  ]); 
}); 
 
// Iniciar servidor 
app.listen(PORT, () =
  console.log(\`? Servidor en puerto \${PORT}\`); 
}); 
