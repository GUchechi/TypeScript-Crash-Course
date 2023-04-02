// Basic Types
let id: number = 5
let company: string = 'Uche Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Uche', true]

// Tuple Array
let employee : [number, string][]

employee = [
    [1, 'Uche'],
    [2, 'John'],
    [3, 'Jill']
]

let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down ,
    Left ,
    Right 
}

console.log(Direction1.Up)


enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left' ,
    Right = 'Right',
}

console.log(Direction2.Up)

// Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
 let customerId = <number>cid

//  Function
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1,2))

// Void

function log(message: string | number ): void {
    console.log(message)
} 

// Interface

interface UserInterface  {
    id: number
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Interface with Function

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc =  (x: number, y: number): number => x + y;
const subtract: MathFunc =  (x: number, y: number): number => x - y;


interface PersonInterface  {
    id: number
    name: string
    register(): string
}


// Classes
class Person implements PersonInterface{

    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const uche = new Person (1, 'Uche')
const brad = new Person (2, 'Brad')

console.log(uche,brad )
console.log(uche.register())

// SubClasses

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

// Generics
function getArray<T>(items:T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push('Uche')
console.log(strArray)