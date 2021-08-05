# 하얀 마인드 기업 과제

<br/>

 > 📌 **Wanted 프리온보딩 코스 (프론트 엔드) 기업 과제**
 >
 > 📗 **무한 스크롤 구현하기**

<br/>

#### 🎈[배포 링크](https://kwak-bs.github.io/wanted_hayanmind/)

<br/>

<details>
    <summary><b><i>
        펼치기
        </i></b></summary>
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
