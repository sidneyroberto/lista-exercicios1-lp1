const {
  calcularVelocidadeMedia,
  converterMpsParaKmph,
  encontrarMenorValor,
} = require("./funcoes");

describe("Funções do arquivo funcoes.js", () => {
  describe("converterMpsParaKmph", () => {
    test("Deve converter corretamente de m/s para km/h", () => {
      expect(converterMpsParaKmph(10)).toBe(36);
    });

    test("Deve retornar -1 para valores negativos", () => {
      expect(converterMpsParaKmph(-5)).toBe(-1);
    });

    test("Deve retornar 0 para entrada 0", () => {
      expect(converterMpsParaKmph(0)).toBe(0);
    });
  });

  describe("encontrarMenorValor", () => {
    it("retorna o menor valor de um array", () => {
      expect(encontrarMenorValor([10, 5, 20, 3])).toBe(3);
    });

    it("lança um erro se o array estiver vazio", () => {
      expect(encontrarMenorValor([])).toBe("Array vazio");
    });

    it("funciona corretamente com valores negativos", () => {
      expect(encontrarMenorValor([-10, -5, -20, -3])).toBe(-20);
    });
  });

  describe("calcularVelocidadeMedia", () => {
    test("Deve calcular corretamente a velocidade média", () => {
      expect(calcularVelocidadeMedia(100, 2)).toBe(50);
    });

    test("Deve retornar -1 se distância e tempo forem negativos", () => {
      expect(calcularVelocidadeMedia(-100, -2)).toBe(-1);
    });

    test("Deve retornar Infinity se o tempo for 0", () => {
      expect(calcularVelocidadeMedia(100, 0)).toBe(Infinity);
    });

    test("Deve retornar 0 se a distância for 0", () => {
      expect(calcularVelocidadeMedia(0, 10)).toBe(0);
    });
  });
});
