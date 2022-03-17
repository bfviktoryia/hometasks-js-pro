// Вариант 7. Разработать класс, описывающий члена футбольной команды.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.


class FootballPlayer {    
private _name : string = "Tom"; 
private _age : number = 18; 
private _position : string = "central"; 

print()
{console.log(`name: ${player.name}  age: ${player.age}`)
};

    /**
     * Getter name
     * @return {string }
     */
	public get name(): string  {
		return this._name;
	}

    /**
     * Getter age
     * @return {number }
     */
	public get age(): number  {
		return this._age;
	}

    /**
     * Getter position
     * @return {string }
     */
	public get position(): string  {
		return this._position;
	}

    /**
     * Setter name
     * @param {string } value
     */
	public set name(value: string ) {
		this._name = value;
	}

    /**
     * Setter age
     * @param {number } value
     */
	public set age(value: number ) {
		this._age = value;
	}

    /**
     * Setter position
     * @param {string } value
     */
	public set position(value: string ) {
		this._position = value;
	}
 
}

let player = new FootballPlayer();
player.print();



