function emailteste(email) {
  if (!email) return false; // Se não tiver nada, é falso
  
  // Entender regex faz sua mente explodir :p
  
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Exportação
module.exports = emailteste;