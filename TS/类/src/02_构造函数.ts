class Dog{
    name: string;
    age: number;
    // 构造函数，在对象创建时调用
    constructor(name:string,age:number) {
        this.name = name,
        this.age=age
    }

    // 方法
    bark() {
        console.log(this.name+":汪汪!")
    }

}
const dog1 = new Dog("小米", 3)
const dog2 = new Dog("小白", 4)
dog1.bark()
dog2.bark()