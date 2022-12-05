// let obj = {}

// let student = {
//     name: 'Fulan',
//     major: 'IT',
//     gpa: 3.5,
//     'passed classes': [
//         'Programming Basic',
//         'Database Basic',
//         'Computer Network'
//     ]
// }

// console.log(obj);
// console.log(student);

// let campus = {}

// campus.student = ['Andy']

// campus.student.push('Brad')
// campus.student.push('Cindy')

// console.log(campus)

// let student = {}

// student['name'] = {}
// student['name'].first = 'John'
// student['name'].last = 'Doe'

// console.log(student)
// console.log(Object.keys(student.name))

// let obj = {}

// obj[1] = '1'
// obj[15] = 15
// obj[2] = '2'
// obj['2ahey'] = 'Something'
// obj[11] = true

// console.log(obj)

// let obj = {
//     theKey: 'the value'
// }

// console.log(obj.theKey)

// console.log(obj['theKey'])

// let targetKey = 'theKey'
// console.log(obj[targetKey])

// function show1() {
//     console.log('Show function')
// }

// function show2(str) {
//     console.log('Str = ', str)
// }

// show1()
// show2('Hello there')

// function show3() {
//     return 'Show function'
// }

// function show4(str) {
//     return `Str = ${str}`
// }

// console.log(show3())
// console.log(show4('Good day'))

// const tambah = function(num1, num2) {
//     return num1 + num2
// }

// const kalkulasi = function(arrNum, plus) {
//     let res1 = plus(arrNum[0], arrNum[1])
//     let res2 = plus(arrNum[2], arrNum[3])

//     return res1 + res2
// }

// let data = [1,2,3,4]

// let hasil = kalkulasi(data, tambah)

// console.log(hasil)

// const fn1 = () => {
//     console.log('Hello world')
// }

// const fn2 = (num) => {
//     console.log('Num is ' , num)
// }

// fn1()
// fn2(24)

// const plus = (a,b) => a + b
// const square = x => x * x
// const three = () => 3

// console.log(plus(5,3))
// console.log(square(10))
// console.log(three())

// setTimeout(() => {
//     console.log('Tulisan yg muncul 5 detik kemudian')
// }, 5000)

// let arr = [1,2,3,4,5]
// let obj = {
//     name: 'Foo',
//     age: 30
// }

// console.log(typeof arr)
// console.log(typeof obj)

// let res = ['John', 'Doe', 'Jakarta']

// let [firstName1, lastName1, city1] = res

// let firstName2 = res[0]
// let lastName2 = res[1]
// let city2 = res[2]

// console.log('First name : ', firstName1, firstName2)
// console.log('Last name : ' , lastName1, lastName2)
// console.log('City : ' , city1, city2)

// let [tmp1, tmp2] = res
// console.log(`${tmp1}  ${tmp2}`)

// res = {
//     firstName : 'John',
//     lastName : 'Doe',
//     city : 'Jakarta'
// }

// let { firstName, lastName, city } = res

// firstName2 = res.firstName
// lastName2 = res.lastName
// city2 = res.city

// console.log('First name : ', firstName, firstName2)
// console.log('Last name : ', lastName, lastName2)
// console.log('City : ', city, city2)

// let { firstName: tmp3, lastName: tmp4 } = res
// console.log(`${tmp3} ${tmp4}`)

// const findUser = () => {
//     return ['John', 'Doe', 'Jakarta']
// }

// let [firstName3, lastName3] = findUser()
// console.log('Full name : ', firstName3, lastName3)

// const getStudent = () => {
//     return {
//         name: 'Fulana',
//         gpa: 3.7
//     }
// }

// let { name, gpa } = getStudent()
// console.log(`${name} get ${gpa} as his/her GPA`)

// console.log(">> :", this)

// let counter = {
//     val : 0,
//     increment: function() {
//         this.val += 1
//     }
// }

// console.log(counter.val)
// counter.increment()
// console.log(counter.val)

// console.log(">> :", this)
// function first() {
//     console.log(">> first : ", this)
// }
// const second = () => {
//     console.log(">> second : ", this)
// }

// first()
// second()

// function Counter() {
//     this.val = 0
//     setInterval(() => {
//         this.val++
//         console.log(this.val)
//     }, 1000)
// }

// const c = new Counter()

// const tambah = (num1, num2) => num1 + num2
// const kali = (num1, num2) => num1 * num2

// const formula = (a, b, tambahFn, kaliFn) => {
//     let hasilKali = kaliFn(a, b)
//     let hasilTambah = tambahFn(hasilKali, 10)

//     console.log("Hasil formula =", hasilTambah)
// }

// formula(2, 10, tambah, kali)

// let animals = [
//     { name: 'fluffy', species: 'cat' },
//     { name: 'carlo', species: 'cat' },
//     { name: 'sweety', species: 'fish' },
//     { name: 'bruno', species: 'dog' }
// ]

// let names1 = []

// // mengumpulkan nama hewan dengan loop
// for(let i = 0; i < animals.length; i++) {
//     names1.push(animals[i].name)
// }
// console.log(names1)

// //mengumpulkan nama hewan dengan map
// let names2 = animals.map(animal => animal.name)
// console.log(names2)

// let animals = [
//     { name: 'fluffy', species: 'cat' },
//     { name: 'carlo', species: 'cat' },
//     { name: 'sweety', species: 'fish' },
//     { name: 'bruno', species: 'dog' }
// ]

// let cats = []

// //mengumpulkan semua kucing dengan loop
// for(let i = 0; i < animals.length; i++) {
//     if(animals[i].species === 'cat') {
//         cats.push(animals[i])
//     }
// }
// console.log(cats)

// //mengumpulkan semua kucing dengan filter
// let cats2 = animals.filter(animal => animal.species === 'cat')
// console.log(cats2)

let orders = [
    { total: 100 },
    { total: 200 },
    { total: 300 }
]

let total = 0

//menghitung total dengan loop
for(let i = 0; i < orders.length; i++) {
    total += orders[i].total
}
console.log(total)

//menghitung total dengan reduce
let total2 = orders.reduce((tmp, order) => tmp + order.total, 0)
console.log(total2)