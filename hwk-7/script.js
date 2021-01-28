const rectangleWrapper = document.getElementById('rectangle-wrapper');
const colors = ['#110000',
                '#ffea00',
                '#aabbcc',
                '#123456',
                '#baff00',
                '#ff00ff',
                '#0000ff',
                '#00ff00',
                '#0eaf10',
                '#003355']
for(let i =0; i < 10; i++) {
  //let newDiv = document.createElement('div');
  const rectangleDiv = rectangleWrapper.appendChild(document.createElement('div'));
  rectangleDiv.classList.add('rect-div');

  const rec = rectangleDiv.appendChild(document.createElement('div'));
  rec.classList.add('rect');
  rec.id = `rec-${i}`;
  rec.style.backgroundColor = colors[i];
}

console.log('Here are the rectangle IDs:');
 for (let rec of document.getElementsByClassName('rect')) {
   console.log(rec.id);
 };
