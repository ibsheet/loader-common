# common.js 의 공통변수 모듈

## 공통변수 모듈

SPA 환경에서 loader를 이용하여 common.js 를 로드 후에, js 안에 있는 공통 모듈 (객체) 들을 사용할 수 가 없기 때문에 필요한 모듈을 import 해서 사용할 수 있도록 함.

## 개발 환경

1. **javascript(es6)**
2. **gulp-cli: v2.3.0**
3. **gulp: v4.0.2**
4. **node: v12.22.9**
5. **browser-sync**
6. **babel**
7. **typescript**

## 머지

`yarn merge` or `gulp merge`: src 에 있는 파일들을 머지 합니다. 타입스크립트를 js 로 변환 후, 묶습니다.

## 서버

`gulp.babel.dev.js` 에 내용 있습니다. 현재 타입스크립트로 변경하여 실행되지 않습니다. tsc 를 한 뒤, 묶은 후 js 서버를 구동할 수 있습니다. <br>
`yarn serve` or `gulp start`: 머지와 동시에 서버를 구동합니다.

## 경로

`dist/common.js`
