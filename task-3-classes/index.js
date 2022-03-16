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
var FootballPlayer = /** @class */ (function () {
    function FootballPlayer() {
        this._name = "Tom";
        this._age = 18;
        this._position = "central";
    }
    FootballPlayer.prototype.print = function () {
        console.log("name: ".concat(player.name, "  age: ").concat(player.age));
    };
    ;
    Object.defineProperty(FootballPlayer.prototype, "name", {
        /**
         * Getter name
         * @return {string }
         */
        get: function () {
            return this._name;
        },
        /**
         * Setter name
         * @param {string } value
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "age", {
        /**
         * Getter age
         * @return {number }
         */
        get: function () {
            return this._age;
        },
        /**
         * Setter age
         * @param {number } value
         */
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "position", {
        /**
         * Getter position
         * @return {string }
         */
        get: function () {
            return this._position;
        },
        /**
         * Setter position
         * @param {string } value
         */
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    return FootballPlayer;
}());
var player = new FootballPlayer();
player.print();
// console.log(`name: ${player.name}  age: ${player.age}`); 
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
