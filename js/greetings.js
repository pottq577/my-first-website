// 좋은 부분:
// 1. localStorage를 사용하여 사용자 이름을 저장하고 로그인 폼을 다시 표시하지 않아도 된다.
// 2. 함수를 사용하여 코드를 모듈화하고 가독성을 높인다.
// 3. 템플릿 리터럴을 사용하여 문자열을 보다 간결하게 작성한다.

// 나쁜 부분:
// 1. paintGreetings 함수의 매개변수로 username을 받아야 하지만 호출 시에는 인자를 전달하지 않아서 undefined가 출력된다.
// 2. HIDDEN_CLASSNAME 상수를 사용하여 CSS 클래스 이름을 저장하고 있지만, 이 클래스가 실제로 어떤 역할을 하는지 주석으로 설명하지 않았다.
// id가 "login-form"인 form 요소 안의 input 요소를 선택하여 loginInput 변수에 할당
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form 요소에서 submit 이벤트가 발생했을 때 실행되는 함수
function onLoginSubmit(event) {
  // 기본 동작(페이지 새로고침)을 막음
  event.preventDefault();
  // form 요소에 hidden 클래스를 추가하여 화면에서 숨김
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // input 요소의 값을 username 변수에 할당
  const username = loginInput.value;
  // localStorage에 USERNAME_KEY와 username을 저장
  localStorage.setItem(USERNAME_KEY, username);
  // paintGreetings 함수 실행
  paintGreetings(username);
}

// greeting 요소에 username을 출력하는 함수
function paintGreetings(username) {
  // greeting 요소의 텍스트를 "Hello "와 username으로 설정
  greeting.innerText = `Hello ${username}`;
  // greeting 요소에서 hidden 클래스를 제거하여 화면에 표시
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에서 USERNAME_KEY에 해당하는 값을 가져와 savedUsername 변수에 할당
const savedUsername = localStorage.getItem(USERNAME_KEY);

// savedUsername이 null일 경우(저장된 username이 없을 경우)
if (savedUsername === null) {
  // form 요소에서 hidden 클래스를 제거하여 화면에 표시
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // form 요소에서 submit 이벤트가 발생했을 때 onLoginSubmit 함수 실행
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // savedUsername이 null이 아닐 경우(저장된 username이 있을 경우)
  // paintGreetings 함수 실행
  paintGreetings(savedUsername);
}

/**
 */
