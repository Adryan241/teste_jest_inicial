const emailteste = require('./emailteste'); // Importa a função que criamos

describe('Testes de Validação de E-mail', () => {
  
  test('Aceitar um e-mail válido', () => {
    expect(emailteste('aluno@escola.com')).toBe(true);
  });

  test('Recusar e-mail sem @', () => {
    expect(emailteste('alunoescola.com')).toBe(false);
  });

  test('Recusar e-mail sem ponto no domínio', () => {
    expect(emailteste('aluno@escola')).toBe(false);
  });

});