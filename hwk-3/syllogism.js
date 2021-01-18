/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/

function Mortal(thing) {
  this.thing = thing;
}

const man = new Mortal('Human');

function Citizen(name) {
  this.name = name;
  this.type = man;
}

const socrates = new Citizen('Socrates');

//man instance of Mortal === ALL MEN ARE Mortal
//socrates.type === man === SOCRATES IS A MAN.
if (socrates.type === man && man instanceof Mortal) {
  console.log(`${socrates.name} is mortal.`);
} else {
  console.log(`${socrates.name} is either or not mortal`);
}


/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

const cake = {
  type: !'chocolate' || 'vanilla',
};

if (cake.type ==='vanilla' || cake.type === 'chocolate') {
  if (cake.type !== 'chocolate') {
    console.log(`This cake is vanilla.`);
  } else {
    console.log('This cake is chocolate.');
  }
} else {
  console.log('This cake has another flavor.')
}
