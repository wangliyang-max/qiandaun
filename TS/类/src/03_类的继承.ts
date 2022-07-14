(function () {
    class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物叫")
        }
    }
    
    class Dog extends Animal{
        run() {
            console.log(`${this.name}在跑`)
        }
        sayHello() {
            console.log("汪汪汪！")
        }
    }
    
    class Cat extends Animal{
        color: string;
        constructor(name: string, age: number, color: string) {
            super(name, age)
            this.color = color
        }
        sleep() {
            console.log(`${this.name}在睡觉`)
        }
        sayHello() {
            console.log("喵喵喵~")
        }
    }

    const dog = new Dog('小米', 3)
    const cat = new Cat("泡芙", 2,"white")
    dog.sayHello()
    cat.sayHello()
    dog.run()
    cat.sleep()
    console.log(cat.color)
})()