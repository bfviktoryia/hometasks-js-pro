"use strict";
// Вариант 7. Разработать класс, описывающий члена футбольной команды.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.

// interface FootballPlayer {
//     name: string;
//     age: number;
//     goalkeeper: boolean;
// }

class FootballPlayer {
    constructor() {
        this._name = "Tom";
        this._age = 18;
        this._position = "central";
    }
    /**
     * Getter name
     * @return {string }
     */
    get name() {
        return this._name;
    }
    /**
     * Getter age
     * @return {number }
     */
    get age() {
        return this._age;
    }
    /**
     * Getter position
     * @return {string }
     */
    get position() {
        return this._position;
    }
    /**
     * Setter name
     * @param {string } value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter age
     * @param {number } value
     */
    set age(value) {
        this._age = value;
    }
    /**
     * Setter position
     * @param {string } value
     */
    set position(value) {
        this._position = value;
    }
}
let player = new FootballPlayer();
console.log(`name: ${player.name}  age: ${player.age}`);
// class Team {
//     name : string;
//     constructor (name: string) {this.name = name;}
// }
// class FootballPlayer extends Team {
// private position: string;
// constructor(name: string, position: string){
//     super(name);
//     this.position = position;
// }
// }
