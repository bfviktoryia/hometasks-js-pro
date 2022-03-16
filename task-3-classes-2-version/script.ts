// Вариант 7. Разработать класс, описывающий члена футбольной команды.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.

class FootballPlayer {    
    
private _name : string; 
private _age : number; 
private _goalkeeper : boolean; 

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter age
     * @return {number}
     */
	public get age(): number {
		return this._age;
	}

    /**
     * Getter goalkeeper
     * @return {boolean}
     */
	public get goalkeeper(): boolean {
		return this._goalkeeper;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public set age(value: number) {
		this._age = value;
	}

    /**
     * Setter goalkeeper
     * @param {boolean} value
     */
	public set goalkeeper(value: boolean) {
		this._goalkeeper = value;
	}


constructor(
    PlayerName: string,
    PlayerAge: number,
    PlayerGoalkeeper: boolean = true,
)
{
    this._name = PlayerName;
    this._age = PlayerAge;
    this._goalkeeper = PlayerGoalkeeper;
}
}

let player = new FootballPlayer("Luka", 21, true);
console.log(`name: ${player.name}  age: ${player.age}  goalkeeper: ${player.goalkeeper}`); 