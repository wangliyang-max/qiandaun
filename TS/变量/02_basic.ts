
// 表示一定要包含name属性，其他属性任意
// [propName:string]:any,意思是其他任意属性的属性名字必须是string类型,同时属性值是任意类型
let a: {
    name: string,
    [propName:string]:any
}
a = { name: 'yang', age: 18, gender: '男' }

// 表示b是一个函数,并且参数是两个number类型的变量,返回值也是number类型
let b: (a: number, b: number) => number

// 字符串数组
let e: string[]
e = ['a', 'b', 'c', 'd', 'e']
// 数字数组
let f: Array<number>
f = [1, 2, 3, 4, 5, 6] 

let h: [string, string]
h=['hello','yang']


enum Gender{
    Male = 0,
    Female = 1
}

let i: { name: string, gender: Gender }
i = {
    name: 'yang',
    gender:Gender.Female
}

let c: string | number
c = 'yang'
c = 12
let j:{ name: string } & { age: number }
j = { name: 'yang', age: 18 }

type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType
k = 2
l = 3
m = 4
