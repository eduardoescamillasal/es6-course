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

const getFlavorCake = (flavor) => {
  if (flavor ==='vanilla' || flavor === 'chocolate') {
    if (flavor !== 'chocolate') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(getFlavorCake('vanilla'));
console.log(getFlavorCake('chocolate'));
console.log(getFlavorCake('strawberry'));
