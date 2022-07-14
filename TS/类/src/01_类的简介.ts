// 使用class定义类

class Person{
    name: string = 'yang'
    // 实例方法
    sayHello() {
        console.log("hello")
    }

    // 静态方法
    static sayGood() {
        console.log("good")
    }
}

// 使用类创建对象
const pre = new Person()

pre.sayHello()
Person.sayGood()

