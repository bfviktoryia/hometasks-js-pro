"use strict";
// Вариант 7. Разработать класс, описывающий члена футбольной команды.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.
class FootballPlayer {
    constructor(PlayerName, PlayerAge, PlayerGoalkeeper) {
        this._name = PlayerName;
        this._age = PlayerAge;
        this._goalkeeper = PlayerGoalkeeper;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this.name.length <= 2) {
            console.log("Incorrect Name");
        }
        else {
            this._name = value;
        }
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value <= 15) {
            console.log("Incorrect Age");
        }
        else {
            this._age = value;
        }
    }
    get goalkeeper() {
        return this._goalkeeper;
    }
    set goalkeeper(value) {
        if (value === false) {
            console.log("Not a goalkeeper");
        }
        else {
            this._goalkeeper = true;
        }
    }
}
let player = new FootballPlayer("Ia", 18, true);
player.name = "Tu";
player.age = 11;
player.goalkeeper = false;
console.log(`name: ${player.name}  age: ${player.age}  goalkeeper: ${player.goalkeeper}`);
