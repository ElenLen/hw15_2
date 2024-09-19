"use strict";

// Создайте массив городов
const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];

// Создайте пустой массив, который будет хранить температуры для каждого города
const tempCities = [];

// Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию prompt() или другие способы ввода данных пользователем
for (let i = 0; i < cities.length; i++) {
  let tempCity = prompt(`Введите температуру для города ${cities[i]}`);
  tempCities.push(Number(tempCity));
}
console.log(tempCities);

//Создайте список, в котором будет отображаться информация о каждом городе и его температуре. Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру.
for (let i = 0; i < cities.length; i++) {
  const tempTextN = `Температура в ${cities[i]}: ${tempCities[i]}°C`;
  cities[i] = tempTextN;
}
console.log(cities);

// Найдите максимальную и минимальную температуру из массива с температурами. Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно.

const maxCity = document.getElementById("main__sity-max");
const maxTemp = Math.max(...tempCities);
maxCity.textContent = `Максимальная температура: ${maxTemp}°C`;

const minCity = document.getElementById("main__sity-min");
const minTemp = Math.min(...tempCities);
minCity.textContent = `Минимальная температура: ${minTemp}°C`;

// Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран
const cityTemp = document.querySelector(".main__city");

for (let i = 0; i < cities.length; i++) {
  const listCity = document.createElement("p");
  listCity.textContent = cities[i];
  cityTemp.appendChild(listCity);
}
