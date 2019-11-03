var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operator');
var comma = document.getElementById('comma');
var clears = document.querySelectorAll('.all-clear');
var resultBtn = document.getElementById('result');
var m = document.getElementById('M');
var mPlus = document.getElementById('Mpl');
var display = document.getElementById('display');
var MemCurrentNum = 0;
var MemNewNum = false;
var MemPendingOperation = '';

//Обработчик события нажатия кнопок
for(var i=0; i < numbers.length; i++) {
     var number = numbers[i];
     number.addEventListener('click', function(e){
         pressNumber(e.target.textContent);
     });
};
for(var i=0; i < operations.length; i++) {
     var operationBtn = operations[i];
     operationBtn.addEventListener('click', function(e){
          operation(e.target.textContent);
     })
};
for(var i=0; i < clears.length; i++) {
     var clearBtn = clears[i];
     clearBtn.addEventListener('click', function(e){
          clear(e.srcElement.id);
     });
};
comma.addEventListener('click', decimal );
resultBtn.addEventListener('click', result);
mPlus.addEventListener('click', toMemory);
m.addEventListener('click', fromMemory);

//Функция выводы чисел на дисплей
function pressNumber(number){
     if (MemNewNum){
         display.value = number;
         MemNewNum = false;
     } else {
         if (display.value === '0'){
             display.value = number;
         }else{
               display.value += number;}
     };
};

//Функция обработки математических операций
var array = [];
function operation(operand){
     var inMemory;
     var localMem =  display.value;
     if (MemNewNum && MemPendingOperation !== '=' ){
         display.value = MemCurrentNum;
         inMemory = array.push(MemCurrentNum);
     } else{
         MemNewNum = true;
         if (MemPendingOperation === '+'){
             MemCurrentNum +=  parseFloat(localMem);
             inMemory = array.push(MemCurrentNum);
         } else if (MemPendingOperation === '-'){
             MemCurrentNum -=  parseFloat(localMem);
             inMemory = array.push(MemCurrentNum);
         } else if (MemPendingOperation === '*'){
             MemCurrentNum *=  parseFloat(localMem);
             inMemory = array.push(MemCurrentNum);
         } else if (MemPendingOperation === '/'){
             MemCurrentNum /=  parseFloat(localMem);
             inMemory = array.push(MemCurrentNum);
         } else {
             MemCurrentNum = parseFloat(localMem);
         };
         display.value = MemCurrentNum;
         MemPendingOperation = operand;
     }
};

//Функция десятичной точки
function decimal(){
var localDecMem = display.value;
if (MemNewNum){
   localDecMem = '0.';
   MemNewNum = false
} else {
   if(localDecMem.indexOf('.') === -1){
     localDecMem += '.';
   }
   };
   display.value = localDecMem;
};

//Функция очистки дисплея
function clear(id){
if (id === 'C'){
   display.value = '0';
   MemNewNum = true;
} else if (id === 'AC'){
   display.value = '0';
   MemNewNum = true;
   MemCurrentNum = 0;
   MemPendingOperation = '';
   };
};

//Функция добавления результата в память
var array1 = [];
function toMemory() {
   if (array1.length <= array.length && array.length > 0){
     var a = array.pop();
     var storage = array1.push(a);
   };
};

//Функция вывода результата из памяти
function fromMemory() {
     if (array1.length > 0) {
         array1.reverse();
         var b = array1.shift();
         document.getElementById('display').value = b;
     };
};
