let cnt = 0;

const timer = setInterval(() => {
    console.log(`${cnt++} 번째 함수 실행`);
}, 1000);

clearInterval(timer);