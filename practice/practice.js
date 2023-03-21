/**
 * @ const와 let
 * const: 상수 선언(값이 바뀌지 않는 변수)
 * let: 중간에 값이 바뀌는 변수
 * 기본적으로 const 사용, 필요할 때만 let 사용
 * 
 * @ 배열
 * 변수 선언 후 [a, b, ...] 형식으로 초기화
 * 자료형에 상관없이 배열 선언 가능
 * 변수 뒤에 [] 안에 인덱스 넣어서 사용 가능 
 * 
 * @ object
 * 변수 선언 후 {a: A, b: B, ...}; 형식으로 초기화
 * object 내부 데이터 삽입/삭제 가능
 */
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // 1.
    // const currentColor = h1.style.color;
    // let newColor;
    // if (currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;

    // 2.
    const clickedClass = "active";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // } 아랫줄과 같은 기능
    h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleh1Click; 윗 줄과 같은 기능을 함