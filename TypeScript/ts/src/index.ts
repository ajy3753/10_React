/*
    [typescript 설치]
    * 관리자 권한으로 실행!

    1. 'ts' 폴더 생성
    2. 터미널 > $cs ./ts/
    3. $npm init
    4. $npm i @type/node
    5. $npm i -g typescript
    6. $tsc -v (버젼 확인)

    * 만약 관리자 권한으로 실행했음에도 보안오류가 발생할 경우 > $Set-ExecutionPolicy RemoteSigned

    [ts 실행]
    - 일반적인 컴파일 파일 추가법: $tsc ./index.ts
    - tsx 설치 > 실행
    1. $npm i -g tsx
    2. $tsc --init
    3. tsconfig 파일에서 컴파일 경로 지정
    4. $tsc (파일을 새로 컴파일 할 때마다 계속해서 입력)
    
*/

const test = (text : string) => {
    console.log("text");
}

test("안녕 타입스크립트");