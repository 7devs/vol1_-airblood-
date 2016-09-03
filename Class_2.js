// demo javascript
console.log('hello world!');
if (1>2) {
    console.log ('1>2')
} else {console.log ('1<2, and that is a right')
}

//for 循环语句
for (var i = 0; i < 10; i++) {
    //break;
    if(i == 7) {
        break;
    }
    //continue
    if(i == 3) {
        continue;
    }
    // do something
    console.log('i =' +i);
}

//while 循环语句


//switch
var animal = 'cat';
switch (animal) {
    case 'cat':
        console.log('I am a cat');
        break;
    case 'dog':
        console.log('i am a dog');
        break;
    case 'muu':
        console.log('i am a muu');
        break;
    default:
        console.log('i am not an animal');
        break;
}

//Function
function func1() {
    console.log('...');
}

function func2(str) {
    console.log('str is', str);
}

var func3 = function(...ttt) {
    console.log(ttt, func5());
    console.log('ttt.length =' , ttt.length);
}

var func4 = new Function('return 3; ');

function func5() {
    return 4;
}

func1();
func2('some texts');
func3(1, 2, func4())
alert(func4())
alert(func5)

//class
function Cat(name){
    this.name = name;
    this.getMyName = function(){
        return this.name
    }
    this.say = function(){
        return 'miao'
    }
}
