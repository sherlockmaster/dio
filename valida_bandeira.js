function validarBandeiraCartao(numeroCartao) {
  // Remove espaços e traços
  const numero = numeroCartao.replace(/[\s-]/g, '');

  // Visa: começa com 4, comprimento 13 ou 16
  const visaRegex = /^4\d{12}(\d{3})?$/;

  // MasterCard: começa com 51 a 55 ou 2221 a 2720, comprimento 16
  const masterRegex = /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/;

  if (visaRegex.test(numero)) {
    return 'Visa';
  } else if (masterRegex.test(numero)) {
    return 'MasterCard';
  } else {
    return 'Bandeira inválida ou não suportada';
  }
}

// Exemplos de teste
console.log(validarBandeiraCartao('4111 1111 1111 1111')); // Visa
console.log(validarBandeiraCartao('5500-0000-0000-0004')); // MasterCard
console.log(validarBandeiraCartao('1234 5678 9012 3456')); // Inválido
