var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1 bar()가 전역에 선언되었기 때문에 bar의 상위 스코프는
			 // 전역 스코프이고 따라서 x는 전역 변수 x=1의 값을 두 번 출력
bar(); // 1