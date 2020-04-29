import React from "react";
import ConvertTemp from "./ConvertTemp";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Verificando métodos de conversão para celsius", () => {
  const wrapper = shallow(<ConvertTemp></ConvertTemp>);
  test("20°C é igual a 68°F ", () => {
    expect(wrapper.instance().celsiusToFahrenheit(20) === 68).toBeTruthy();
  });
  test("32°C não é maior que 400°K", () => {
    expect(wrapper.instance().celsiusToKelvin(32) > 400).toBeFalsy();
  });
  test("59,3°C é igual a 138,75°F", () => {
    expect(wrapper.instance().celsiusToFahrenheit(59.3)).toEqual(138.75);
  });
});

describe("Verifica se os métodos de conversão para temperatura Fahrenheit funcionam corretamente", () => {
  const wrapper = shallow(<ConvertTemp />);
  test("28,988°F não é igual a 271,49°F", () => {
    expect(wrapper.instance().fahrenheitToCelsius(28.988)).not.toEqual(271.49);
  });
  test('A conversão de "30,22"°F para °C retorna um valor não numérico', () => {
    expect(wrapper.instance().fahrenheitToCelsius("30,22")).toBeNaN();
  });
  test("20°F é menor que 300°K", () => {
    expect(wrapper.instance().fahrenheitToKelvin(20)).toBeLessThan(300);
  });
});

describe("Verifica se os métodos de conversão para temperatura Kelvin funcionam corretamente", () => {
  const wrapper = shallow(<ConvertTemp />);
  test("800,3°K é próximo de 980,90°F", () => {
    expect(wrapper.instance().kelvinToFahrenheit(800.3)).toBeCloseTo(980.9, 1);
  });
});
