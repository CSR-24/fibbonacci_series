// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const wordUnits = new Map();
wordUnits.set(1, 'One');
wordUnits.set(2, 'Two');
wordUnits.set(3, 'Three');
wordUnits.set(4, 'Four');
wordUnits.set(5, 'Five');
wordUnits.set(6, 'Six');
wordUnits.set(7, 'Seven');
wordUnits.set(8, 'Eight');
wordUnits.set(9, 'Nine');

const wordTens= new Map();
wordTens.set(10, 'Ten');
wordTens.set(11, 'Eleven');
wordTens.set(12, 'Twelve');
wordTens.set(13, 'Thirteen');
wordTens.set(14, 'Fourteen');
wordTens.set(15, 'Fifteen');
wordTens.set(16, 'Sixteen');
wordTens.set(17, 'Seventeen');
wordTens.set(18, 'Eightteen');
wordTens.set(19, 'Nineteen');
wordTens.set(20, 'Twenty');
wordTens.set(30, 'Thirty');
wordTens.set(40, 'Fourty');
wordTens.set(50, 'Fifty');
wordTens.set(60, 'Sixty');
wordTens.set(70, 'Seventy');
wordTens.set(80, 'Eighty');
wordTens.set(90, 'Ninty');

const wordPosition= new Map();
wordHundreds.set(1000, 'Ten');


1234/1000 = 1
234/100 = 2
34/10 = 3
4/1 = 4


const getWord = function(numberIn) {
  return wordUnits.get(numberIn);
}

const getPosition = function() {
  return 
}



const transformNumbersToWords = function(inputNumber) {

  if (inputNumber.length <= 4) {
    const input = parseInt(inputNumber);

    for (let index = 1000; index >= 1; index = index/10) {
      let word = getWord(parseInt(inputNumber/index));
      let position = getPosition(index);
    }
  }

}


