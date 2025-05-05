const input = document.getElementById('myInput');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

const printNum = () => {
  let myNumericInput = new AutoNumeric('.myInput',{decimalCharacter: ',', decimalPlaces: 0, digitGroupSeparator: '.'});
  output.innerHTML = `${input.value}`;
  return
}

btn.addEventListener('click', printNum);
input.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        printNum();
    }
});