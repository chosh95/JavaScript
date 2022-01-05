function outerFunc(argNum){
    let num = argNum;
    return function(x){
        num += x;
        document.write('num : ' + num + '<br>');
    }
}

const exam = outerFunc(40);
exam(5);
exam(-10);

function countSecond(howMany){
    for( var i = 1; i<=howMany;i++){
        setTimeout(function(){
            document.write(i + '<br>');
        }, i*1000);
    }
};

countSecond(3);