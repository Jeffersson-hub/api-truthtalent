const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const analyzeRoute = require('../routes/analyze');

app.use(express.json({ limit: '10mb' }));
app.use('/analyze', analyzeRoute);

// Test route
app.get('/api/status', (req, res) => {
  res.json({ message: '✅ API Render opérationnelle' });
});

app.get('/', (req, res) => {
  res.send('🎯 API TruthTalent est en ligne ! Utilisez les routes /api/*');
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
