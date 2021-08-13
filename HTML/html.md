# HTML 정리

> HTML 공부 했던 내용 중 헷갈렸거나 몰랐었던 내용에 대해 정리 한 것.

## 태그

> W3C로 부터 정의된 모든 태그들은 모든 웹브라우저 상에서 공통적으로 사용됨

1. 이상한 태그를 사용해도 브라우저에서 자동으로 걸러서 컨텐츠를 사용자에게 보여줌(오류 X)

   - 정상적인 태그를 사용했는지 확인하는 사이트 : [Markup Validation Service](https://validator.w3.org)

2. Block 사용 시 한줄에 1개 씩 배치, Inline 사용 시 공간이 있을 경우 옆에 배치 가능
   - block : div
   - inline : span
3. `ol>li*3`
   은 아래과 같은 의미

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

4. `div.class` == `<div class="class"></div>`
5. `div#ID` == `<div id="ID"></div>`

## 구조

1. 리액트 사용 시 컴포넌트들을 너무 크게 사용하면 성능상 좋지 않음
   - 잘게잘게 조깨서 각각의 기능 구현
   - 무엇이든지 세분화해서 만드는 것이 좋음
2. HTML 구조 설계 시에 무지성으로 Div때려박지 말고 header, nav, aside, main, footer 등으로 section tag를 사용해서 할 것.

3. 재사용 가능한 컴포넌트를 article(반복되고 재사용 가능한 태그)
