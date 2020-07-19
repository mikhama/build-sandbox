import Log from './log';
import Calc from './calc';

import img from './hello.png';

const log = new Log();
const calc = new Calc();

log.log(calc.add(1, 2, 3));

const element = document.createElement('img');
element.src = img;
document.body.appendChild(element);
