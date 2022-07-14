(function () {
    class Person{
        private _name: string;
        private _age: number;
        // 构造函数，在对象创建时调用
        constructor(name:string,age:number) {
            this._name = name,
            this._age=age
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value
            }
        }
    }
    
    const per = new Person("yang", 18)
    console.log(per.name)
    per.name = 'cheng'
    console.log(per.name)
    
})()

// class C {
//     name: string;
//     age: number;
//     constructor(name:string, age:number) {
//         this.name = name
//         this.age = age
//     }
// }

class C {
    constructor(public name:string,public age:number) {
    }
}

