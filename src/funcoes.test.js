const {
  converterFarenheitParaCelsius,
  encontrarMaiorValor,
  calcularDistanciaPercorrida,
} = require("./funcoes");

describe("converterFarenheitParaCelsius", () => {
  test("converte 32°F para 0°C", () => {
    expect(converterFarenheitParaCelsius(32)).toBe(0);
  });

  test("converte 212°F para 100°C", () => {
    expect(converterFarenheitParaCelsius(212)).toBe(100);
  });

  test("converte -40°F para -40°C", () => {
    expect(converterFarenheitParaCelsius(-40)).toBe(-40);
  });
});

describe("encontrarMaiorValor", () => {
  test("retorna o maior número em um array de inteiros", () => {
    expect(encontrarMaiorValor([10, 30, 25, 5])).toBe(30);
  });

  test("retorna valor único se houver só um elemento", () => {
    expect(encontrarMaiorValor([42])).toBe(42);
  });

  test("retorna mensagem se o array estiver vazio", () => {
    expect(encontrarMaiorValor([])).toBe("Array vazio");
  });
});

describe("calcularDistanciaPercorrida", () => {
  test("retorna 100 ao multiplicar velocidade 10 m/s por tempo 10 s", () => {
    expect(calcularDistanciaPercorrida(10, 10)).toBe(100);
  });

  test("retorna 0 se velocidade for 0", () => {
    expect(calcularDistanciaPercorrida(0, 50)).toBe(0);
  });

  test("retorna 0 se tempo for 0", () => {
    expect(calcularDistanciaPercorrida(20, 0)).toBe(0);
  });
});
