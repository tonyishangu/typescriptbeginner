let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let legendsOfHeroes: undefined = undefined

// built in objects

let now: Date = new Date()

// arrays
let colors: string[] = ['red', 'blue', 'green']
let  numbers: number[] = [1, 2, 3]

// classes
class Car {

}
let car: Car = new Car()

// object literal
let point: { x: number; y:number} = {
  x: 90,
  y: 20
}

const logNumber: {i: number} => void = (i: number) => {
  console.log(i)
}

// when to use annotations
    //1. function that returns 'any' type
const json = '{'x': 10, 'y': 20}'
const  coord: {x: number, y: number} = JSON.parse(json)   //results ==> {x: 10, y:20}
//JSON.parse() ==> function that takes a json string and converts in into a javascript object.

    //2. When we declare a variable on one line and utilize it later
let words = ['red', 'blue', 'green']
let foundWord: boolean
for( i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true
  }
}