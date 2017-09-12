SelectorAPI 구현하기
===============

# 소개

- Selector API의 구현인 querySelector와 querySelectorAll를 직접 구현한다.
- 실제 구현 전에 요구사항에 맞는 TC를 우선 작성 후 공유한다.

## 요구사항
- getElementById, getElementByTagName을 이용해 구현한다. (특정 IE에서 이슈가 있는 getElementByClassName도 직접 구현한다.)
- .class, #id, tag 3개의 셀렉터만 이용할 수 있다.
- 셀렉터의 조합으로 엘리먼트를 찾을 수 있다
- 배열로 엘리먼트를 직접 반환함.

## 작동 로직

### domutil.querySelector()

- domutil.querySelector(".main div span");
~~~
    <div id="cont" class="main">
        <div>
            <span>no main</span>
        </div>
    </div>
    <div class="main">
        <div>
            <span>.main</span>
        </div>
    </div>
~~~
1. document 엘리멘트 중 class가 main인 엘리멘트를 찾아 배열로 반환한다.
  - input / .main, [document]
  - output / [div.main, div.main]
2. [div.main, div.main] 엘리멘트 중 tagName이 div인 엘리멘트를 찾아 배열로 반환한다.
  - input / div, [div.main, div.main]
  - output / [div.main div, div.main div]
2. [div.main div, div.main div] 엘리멘트 중 tagName이 span인 엘리멘트를 찾아 배열로 반환한다.
  - input / span, [div.main div, div.main div]
  - output / [div.main div span, div.main div span]
3. 반환된 [div.main div span, div.main div span] 중에서 첫번째 엘리멘트만 반환한다.



### domutil.querySelectorAll()

- domutil.querySelectorAll(".main div span");
~~~
    <div id="cont" class="main">
        <div>
            <span>no main</span>
        </div>
    </div>
    <div class="main">
        <div>
            <span>.main</span>
        </div>
    </div>
~~~

1. document 엘리멘트 중 class가 main인 엘리멘트를 찾아 배열로 반환한다.
  - input / .main, [document]
  - output / [div.main, div.main]
2. [div.main, div.main] 엘리멘트 중 tagName이 div인 엘리멘트를 찾아 배열로 반환한다.
  - input / div, [div.main, div.main]
  - output / [div.main div, div.main div]
2. [div.main div, div.main div] 엘리멘트 중 tagName이 span인 엘리멘트를 찾아 배열로 반환한다.
  - input / span, [div.main div, div.main div]
  - output / [div.main div span, div.main div span]
3. 반환된 [div.main div span, div.main div span] 모두 반환한다.


- - -
