function fun(a: number): number{
    return a
}

function fn<T>(a: T): T{
    return a
}

fn(10)//不指定泛型，TS可以自动对类型进行推断，在这里T就是number
fn<string>("hello")//指定泛型

function fn2<T, K>(a: T, b: K): T{
    console.log(b)
    return a
}

fn2(10,12)//不指定泛型，TS可以自动对类型进行推断，在这里T就是number
fn2<number, string>(12, "hello")//指定泛型

interface Inter{
    length:number
}

function fn3<T extends Inter>(a: T): number{
    return a.length
}

fn3({ length: 10 })

class myClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const my = new myClass<string>('yang')