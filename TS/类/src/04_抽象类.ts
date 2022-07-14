(function () {
    abstract class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        abstract sayHello():void;
    }
    
    class Dog extends Animal{
        sayHello() {
            console.log("汪汪汪！")
        }
    }
    
    const dog = new Dog('小米', 3)

})()