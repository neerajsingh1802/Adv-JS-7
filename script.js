function Creature(ls){
    this.lifespan=ls;
}

Creature.prototype.breadth=function(){
    console.log("Breadthing....");
}

let Creature1=new Creature(100);
console.log(Creature1);


function person(first,last,a){
    this.firstName=first;
    this.lastName=last;
    this.age=a;
}

person.prototype.fullname=function(){
    console.log(this.firstName+""+this.lastName);
}

let person1=new person("Neeraj","Singh",23);
let person2=new person("raj","Singhania",28);

console.log(person1);
console.log(person2.fullname());
