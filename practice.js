/* 
1. Object with property (string,boolean,number,object,array,method which will return property value)
2.template string. minimum 3 property will be dynamic (nested object property , array second element , another property)
3.1 no parameter arrow function will return 89
3.2 single parameter arrow function will divide input by 7 
3.3 arrow function with two parameter
3.4 multi-line arrow function, two parameter

4.map divide each element by 7
5.map,forEach,filter,find
6. destructuring object , array destructuring second position variable balance 
*/
/* 1. Object with property (string,boolean,number,object,array,method which will return property value) */
const student = {
    name:'Anik',
    id: 10,
    isGood: true,
    friends:{
       name:'Jhon',
       id:23,
       major:['math','biology','Physics']
    }
}

const values = Object.values(student);

/* 2.template string. minimum 3 property will be dynamic (nested object property , array second element , another property) */

const person = {
    firstName:'Kurt',
    lastName:'Cobain',
    id: 34,
    age: 45,
    address:{
        road:2,
        country:'USA'
    },
    album:['Nevermind','In Utero','Bleach','Insecticide']
   
};

/* 
console.log(`Name: ${person.firstName} ${person.lastName} Adress: ${person.address.country} Second Album: ${person.album[1]} Another property: ${person.album}`); */

//3.1 no parameter arrow function will return 89

const noParameter = ()=>89;
//console.log(noParameter());

//3.2 single parameter arrow function will divide input by 7  

const singleParameter = num => num/7;
//console.log(singleParameter(70))

//3.3 arrow function with two parameter

const twoParameter = (num1,num2)=>num1+num2;
//console.log(twoParameter(2,3))

//3.4 multi-line arrow function, two parameter

const multiLine = (num1,num2)=>{
    const sum = num1 + num2;
    const random=sum*num2;
    const num3 = random -sum;
    const final = num3/num2;
    return final;
}

//console.log(multiLine(4,6))

//4.map divide each element by 7

const array = [34,56,32,49,90,63,123,56];
const result = array.map((values)=>values/7);
//console.log(result);

/* 6. destructuring object , array destructuring second position variable balance  */

const newPerson = {
    firstName:'Kurt',
    lastName:'Cobain',
    id: 34,
    age: 45,
    address:{
        road:2,
        country:'USA'
    },
    album:['Nevermind','In Utero','Bleach','Insecticide']
   
};

const {firstName,lastName,album:value1}=newPerson;

//console.log(value1[1])