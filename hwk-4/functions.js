/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/

function Obj(name, isHuman) {
  this.name = name;
  this.isHuman = isHuman;
};

const objs = [
  new Obj('Cat', false),
  new Obj('Dog', false),
  new Obj('Socrates', true),
  new Obj('Aaron', true),
  new Obj('Book', false),
  new Obj('Spoon', false),
];

//man instance of Mortal === ALL MEN ARE Mortal
//socrates.type === man === SOCRATES IS A MAN.
const isMortal = (name) => {
  for (const prop in objs) {
    if (objs[prop].name === name && objs[prop].isHuman) {
      return true;
    }
  } return false;
};

console.log(isMortal('Globe'));
console.log(isMortal('Socrates'));
console.log(isMortal('Spoon'));
/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/
const flavors = ['vanilla', 'chocolate'];
const getFlavorCake = (flavors, isChocolate) => {
   return flavors.filter((flavor) => flavor !== 'chocolate');
}

console.log(getFlavorCake(flavors, false)[0]);
