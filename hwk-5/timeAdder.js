
const LabelsSingular = ['second', 'minute', 'hour', 'day'];
const LabelsPlural = LabelsSingular.map((label) => `${label}s`);
const LabelsAll = LabelsSingular.concat(LabelsPlural);

const isInteger = (num) => num % 1 === 0;
const isPositiveInt = (num) => { return isInteger(num) && num > 0 };

function timeAdder(value1, label1, value2, label2) {
  if (!isPositiveInt(value1) || !isPositiveInt(value2) ||
      LabelsAll.indexOf(label1) === -1 || LabelsAll.indexOf(label2) === -1 ){
        return false;
    }
  if ((value1 === 1 && LabelsSingular.indexOf(label1) === -1) ||
      (value2 === 1 && LabelsSingular.indexOf(label2) === -1)) {
      return false;
    }
    //get number of seconds
  const totalSeconds = numberOfSeconds(value1, label1)
                       + numberOfSeconds(value2, label2);
  const res = [totalSeconds, LabelsPlural[0]];
  if (totalSeconds === 1) { res[1] = LabelsSingular[1];}
  return res;
}

function numberOfSeconds(value, label) {
  let seconds;
  switch (label) {
    case LabelsSingular[0]: //'sec'
    case LabelsPlural[0]:
      seconds = value;
      break;
    case LabelsSingular[1]: // 'min'
    case LabelsPlural[1]:
      seconds = value * 60;
      break;
    case LabelsSingular[2]: // 'hr'
    case LabelsPlural[2]:
      seconds = value * 3600;
      break;
    case LabelsSingular[3]: // 'day'
    case LabelsPlural[3]:
      seconds = value * 86400;
    }
   return seconds;
}

// will return time in seconds
console.log(timeAdder(2, 'minute', 3, 'minutes'));
console.log(timeAdder(10, 'days', 25, 'hours'));
console.log(timeAdder(1, 'minute', 20, 'days'));
console.log(timeAdder(52, 'hour', 5, 'minutes'));
console.log(timeAdder(520, 'days', 55, 'minutes'));

//False
console.log(timeAdder(false, 3, 5, 'minutes'));
console.log(timeAdder({}, 'day', 5, 'minutes'));
console.log(timeAdder(-2, 'days', {}, 'minutes'));
console.log(timeAdder(1, 'day', 2.25, 'second'));
console.log(timeAdder(1, 'day', 2, 'foo'));
