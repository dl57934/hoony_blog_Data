# Webpack 강의

### React, Angular, Vue에 권고하는 Webpack 설정에 대해 학습 및 이해

Webpack이란?

- 서로 연관되어있는 웹 자원들을(그래프로 이루어져있는) js, css, img 등을 번들링함.
- 압축 및 최적화하여 웹페이지의 성능향상.

Webpack을 사용하는 이유?

1. 새로운 형태의 Web Task Manager

   - 기존 Web Task Manager의 기능(소스코드 고치면 자동으로 새로고침) + 모듈 의존성 관리(HTML, CSS, JS 압축 및 모듈화)
   - 기존 Web loading 속도를 빠르게 만들기 위해서
     1. 요청하는 파일 줄이기
     2. 필요한 파일은 나중에 요청하기(lazy loading)
   - minification을 webpack default cli로 실행가능

2. 자바스크립트 Code based Modules 관리

   - 자바스크립트 모듈화의 필요성: AMD, Common.js(https://d2.naver.com/helloworld/12864),
   - 기존 모듈 로더들과의 차이점: 모듈 간의 관계를 chunk 단위로 나눠 필요할 때 로딩
   - 복잡한 js 모듈들을 사용하기 위해 Common JS, AMD, ES6 Modules 등이 등장
   - 가독성이나 다수 모듈 미병행 처리등의 약점을 보완하기 위해 Webpack이 등장

3. 자바스크립트 모듈화 문제란?

   - 전역변수 충돌, 스크립트 로딩 순서, 복잡도에 따른 관리상의 문제
   - 이를 해결하기 위해 기타 모듈 로더 및, Webpack이 등장!

Webpack의 철학

1. 모든것을 모듈화 시킨다.
   - html, css, js등 모든 것을 모듈화 시킬 수 있다.
2. 필요한 것만 로딩한다.
   - 초기에 모든 것을 로딩하지 않고 필요한 것만 로딩한다.

webpack Cli 설치하기
4.5 버전 이상부터 cli를 꼭 설치해주어야한다.

1. npm i webpack
2. npm i webpack-cli -g

NPM이란?

1. js라이브러리를 모아 놓는 공간
2. webpack, node 기반, Gulp 등등 NPM을 사용하여 필요 라이브러리를 로딩
3. 재사용 가능한 코드를 module, package라고 호칭
4. package.json 해당 package에 대한 파일정보가 들어있음
5. https://www.npmjs.com/ 해당 사이트에서 라이브러리 정보 찾을 수 있음

webpack 실습 1

1. yarn global add webpack
2. yarn global add webpack-cli (-g 옵션 컴퓨터에 글로벌화로 설치함)
3. yarn init
4. html 코드 작성

   ## html 코드

   ```
    <html>
      <head>
          <title>webpack demo</title>
          <script src="https://unpkg.com/lodash@4.16.6"></script>
      </head>
      <body>
          <script src="app/index.js"></script>
      </body>
    </html>
   ```

5. index.js 코드 작성

   ```

    const component = () => {
        const element = document.createElement("h1");
        element.innerHTML = _.join(["Hello", "hoony_webpack"], " ");
        return element;
    };

    document.body.appendChild(component());

   ```

   위와 같이 작성 후 html코드를 작성 시켜주면 아래와 같은 결과가 나오고
   ![image](https://user-images.githubusercontent.com/23521909/71816540-46efcd00-30c6-11ea-83c5-0d3c541346f9.png)

   관리자 도구의 network tab을 보면 html에서 작성 lodash 파일이 load된 것을 볼 수 있다.
   ![image](https://user-images.githubusercontent.com/23521909/71814406-a8606d80-30bf-11ea-95a0-89e8eae9fedd.png)

   하지만 yarn을 통해 설치를 해주면

   ```
    yarn add lodash

    index.js 제일 상단에 코드 추가
    import _ from "lodash";
   ```

   error 발생 왜 안되는지 모르겠음.......
