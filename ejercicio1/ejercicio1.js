function separaNumeros(...parametros) {
    const numerosEnteros = [];
  
    for (const parametro of parametros) {
      if (typeof parametro == 'number' && Number.isInteger(parametro)) {
        numerosEnteros.push(parametro);
      }
    }
  
    return numerosEnteros;
  }
  
  const numeros = separaNumeros(4, 'Hola', 6, 4.12, 'Gente', 6);
  console.log(numeros);