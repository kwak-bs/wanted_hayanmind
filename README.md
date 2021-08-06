<p align='middle'>
<a href='https://610cdcae8e155c71b5fb1482--jaranda.netlify.app'><img src='https://user-images.githubusercontent.com/51367622/128473643-62cedb40-2390-4356-9db4-5ddb2cfa346e.png' width="100px;" alt="LiveMD" /></a></p>
<p align='middle'><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/six-sense/jaranda?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/six-sense/jaranda"> 
<h1 align='middle'><a href='https://jaranda.netlify.app/'>https://jaranda.netlify.app/</a></h1>

---
🧐[노션 미팅 로그](https://first-english-d5d.notion.site/d789f1ad2e434084be98bb6c54a006b2)에서 더 다양한 개발 과정을 확인해보세요!

---

## 📌 프로젝트 소개

###  프리온보딩 코스 Jaranda 기업 과제
> ❕ **회원가입, 로그인 / 로그아웃 기능과 다양한 메뉴를 가지고 있는 홈페이지, 관리자 페이지 구현하기**❗

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h3>1. 아래 정보를 입력받아 회원가입 페이지를 구현하고 로그인/로그아웃 기능을 구현해주세요.</h3>
- 이름<br/>
- 주소 (팝업을 이용해서 입력받음)<br/>
- 신용카드 정보 (팝업을 이용해서 입력받음)<br/>
- 나이<br/><br/>
1.1 관리자 로그인을 하면 등록한 계정 정보를 아래 방법을 이용하여 시각화 해 주세요.<br/>
- 테이블 Component 페이지 만들기<br/>
- Data Table 구현<br/>
- 페이지네이션 구현<br/>
- 검색기능 구현<br/><br/>
1.2 정보는 로컬 저장소 등 자유롭게 저장해도 됩니다.<br/><br/>
1.3 주소는 다음에서 제공하는 입력창을 사용해도 무방합니다.<br/><br/>
1.4 관리자 계정은 임의로 정의해도 됩니다.<br/><br/>
<h3>2. 다양한 메뉴를 가지고 있는 홈페이지 관리자 페이지를 구현해 주세요.</h3>
2.1 계정, 비밀번호만 입력하면 로그인이 되어야 합니다.<br/><br/>
2.2 로그인 된 계정은 자신에게 허용된 메뉴만 보여야 합니다.<br/><br/>
2.3 관리자는 계정을 임의로 생성할 수 있고 계정별로 볼 수 있는 메뉴를 설정할 수 있습니다.<br/><br/>
2.4 관리자 계정은 임의로 정의해도 됩니다.<br/><br/>
2.5 정보는 로컬 저장소 등 자유롭게 저장해도 됩니다.<br/><br/>
2.6 메뉴는 임의대로 정의해도 되며 메뉴를 선택했을 때 나오는 화면에는 메뉴명이 출력되면 됩니다.<br/><br/>
2.7 관리자 로그인을 하면 등록한 계정 정보를 아래 방법을 이용하여 시각화 해 주세요.<br/>
- 테이블 Component 페이지 만들기<br/>
- Data Table 구현<br/>
- 페이지네이션 구현<br/>
- 검색기능 구현<br/>
</div>
</details>
<br/>

## 📑 구현 목록

`회원 가입`

- 아이디, 비밀번호, 이름, 나이, 주소, 신용카드 등록을 통한 회원 가입 기능
- 각 `input`(아이디, 회원가입, 카드)에 대한 Validate 설정(유효성 검사, 중복 검사, 비밀번호 확인) 
- 모든 input 값이 존재할 때 회원가입 완료 (미흡 입력 존재 시 해당 인풋으로 cursor 이동)
- 주소 등록은 다음 API 활용, 카드 등록은 팝업창 구현.

`로그인`

- 아이디, 패스워드 유효성 검사
- 유효성 검사 후 존재하는 유저 인증 후 token 발급
- 발급된 token으로 admin, user 페이지 이동

`관리자`

- localStorage에 존재하는 userData 출력
- 검색기능으로 name, userId에서 키워드 검색
- localStorage에 존재하는 userId의 menuItem 수정 가능
- 관리자 혹은 유저로 계정 추가

`메뉴바`

- 관리자 페이지에서 계정별 메뉴 설정 시 해당 계정에게 선택된 메뉴만 보여짐
- 유저가 권한이 없는 페이지주소를 입력하면 페이지 접근불가, 메인페이지로 이동
- Not Found 페이지
        

`라우트` && `접근 권한`

- 로그인 전
  - 로그인 없이 접근 가능한 메뉴 렌더링 (로그인/회원가입 페이지)
- 로그인 후
  - 관리자 계정으로 로그인시 Admin 페이지 렌더링
  - 일반 계정으로 로그인시 게스트메뉴에서 유저별 허가된 메뉴 렌더링
  - 로그인 후에는 로그인/회원가입 페이지 접근 불가
- 로그아웃


<br/>

## 👨‍💻 실행 방법

### 설치 

`npm install`

### 실행

`npm start`

### 데모 로그인

`Admin : admin1 / admin123!`

`User : user1 / user123!`

<br/>

## 📂프로젝트 구조

| 폴더 / 파일 | 설명      |
| ----------- | --------- |
| Assets      | 작성 요망 |
| Components  | 작성 요망 |
| Modal       | 작성 요망 |
| Pages       | 작성 요망 |
| Styles      | 작성 요망 |
| Utils       | 작성 요망 |
| App.js      | 작성 요망 |
| index.js    | 작성 요망 |
| routes.js   | 작성 요망 |

<br/>


# 하얀 마인드 기업 과제

<br/>

 > 📌 **Wanted 프리온보딩 코스 (프론트 엔드) 기업 과제**
 >
 > 📗 **무한 스크롤 구현하기**

<br/>

#### 🎈[배포 링크](https://kwak-bs.github.io/wanted_hayanmind/)

<br/>

## 📚 과제 요구 사항

1. Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

2. **Data API**

   - The user's dummy comment data can be called through the API below.
     - https://jsonplaceholder.typicode.com/comments

   - The following parameters are supported:
     - `_page`
       - it starts at 1.

     - `_limit`
       - Please set the `_limit` parameter to 10.

   - Example of the first comment page
     - https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10

   - Sample data

   ```jsx
   [
     {
       "postId": 1,
       "id": 1,
       "name": "id labore ex et quam laborum",
       "email": "Eliseo@gardner.biz",
       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"
     }, 
   ]
   ```

3. You can use id as comment id, email as user's email and body as comment text

4. Please look at the following design guide link and reflect the design.
   - https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA

5. You don't have to make it into a responsive design.
6. You don't have to specify a font for the text.

<br/>

## 👨‍💻 실행 방법

### 설치 

`yarn install`

### 실행

`yarn start`

<br/>

## 📽 시연 영상

<img src = "https://user-images.githubusercontent.com/51367622/127190596-29c73c04-354d-4e2d-a01a-10dc3d371134.gif" width="100%" >





<br/>

##   ⚙ 사용 라이브러리 && API

1. `styled-components`
   - 스타일 도구 사용 방법은 다양하지만 저희 팀은 이번 기업 과제에 styled-components(CSS-in-JS)를 채택했습니다.
2. `styled-reset`
   - CSS 초기화를 위해 사용하였습니다.
3. `gh-pages`
   - 깃헙 페이지 배포를 위해 사용하였습니다.
4. `IntersectionObserver` API
   - 이번 무한 스크롤링을 구현하기 위해 사용한 API입니다.

<br/>

## 🧐 참고 URL

[React - Intersection Observer API를 사용하여 인피니트 스크롤 구현하기](https://godsenal.com/posts/React-Intersection-Observer%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8A%B8-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0/)
