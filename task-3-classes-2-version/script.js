"use strict";
// Вариант 7. Разработать класс, описывающий члена футбольной команды.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.
class FootballPlayer {
    constructor(PlayerName, PlayerAge, PlayerGoalkeeper = true) {
        this._name = PlayerName;
        this._age = PlayerAge;
        this._goalkeeper = PlayerGoalkeeper;
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter age
     * @return {number}
     */
    get age() {
        return this._age;
    }
    /**
     * Getter goalkeeper
     * @return {boolean}
     */
    get goalkeeper() {
        return this._goalkeeper;
    }
    /**
     * Setter name
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter age
     * @param {number} value
     */
    set age(value) {
        this._age = value;
    }
    /**
     * Setter goalkeeper
     * @param {boolean} value
     */
    set goalkeeper(value) {
        this._goalkeeper = value;
    }
}
let player = new FootballPlayer("Luka", 21, true);
console.log(`name: ${player.name}  age: ${player.age} goalkeeper: ${player.goalkeeper}`);
