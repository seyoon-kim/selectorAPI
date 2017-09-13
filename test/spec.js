describe('Domutil.querySelector function should be return array ', function() {
    // Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성
    it('should be return array', function() {
        expect(Domutil.querySelector()).toEqual([]);
    });

    // 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is class, should be return array class element', function() {
        document.body.innerHTML = '<div class="main">main</div><div>no main</div>';
        expect(Domutil.querySelector('.main').length).toBe(1);
    });

    // 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is id, should be return array id element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelector('#cont').length).toBe(1);
    });

    // 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환
    it('if selector is tagName, should be return array tagName element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelector('div').length).toBe(1);
    });

    // 셀렉터가 두 개인 경우, .main div의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName), should be return array .className tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main">no main</div><div class="main"><div>.main div</div></div>';
        expect(Domutil.querySelector('.main div').length).toBe(1);
    });

    // 셀렉터가 두 개인 경우, .main #cont의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className #idName), should be return array .className tagName element', function() {
        document.body.innerHTML = '<div class="main">no main</div><div class="main"><div id="cont">.main div</div></div>';
        expect(Domutil.querySelector('.main #cont').length).toBe(1);
    });

    // 셀렉터가 세 개인 경우, .#cont div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (#id tagName tagName), should be return array #id tagName tagName', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div><div class="main"><div><span>.main</span> div</div></div>';
        expect(Domutil.querySelector('#cont div span').length).toBe(1);
    });

    // 셀렉터가 세 개인 경우, .main div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName tagName), should be return array .className tagName tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(Domutil.querySelector('.main div span').length).toBe(1);
    });
});

describe('Domutil.querySelectorAll function should be return array ', function() {
    // Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성
    it('should be return array', function() {
        expect(Domutil.querySelectorAll()).toEqual([]);
    });

    // 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is class, should be return array class element', function() {
        document.body.innerHTML = '<div class="main">main</div><div class="main">no main</div>';
        expect(Domutil.querySelectorAll('.main').length).toBe(2);
    });

    // 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is id, should be return array id element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelectorAll('#cont').length).toBe(1);
    });

    // 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환
    it('if selector is tagName, should be return array tagName element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont"><div>no main</div></div>';
        expect(Domutil.querySelectorAll('div').length).toBe(3);
    });

    // 셀렉터가 두 개인 경우, .main div의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName), should be return array .className tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div>no main</div></div><div class="main"><div>.main div</div></div>';
        expect(Domutil.querySelectorAll('.main div').length).toBe(2);
    });

    // 셀렉터가 세 개인 경우, .#cont div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (#id tagName tagName), should be return array #id tagName tagName', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span><span>span</span></div></div><div class="main"><div><span>.main</span> div</div></div>';
        expect(Domutil.querySelectorAll('#cont div span').length).toBe(2);
    });

    // 셀렉터가 세 개인 경우, .main div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName tagName), should be return array .className tagName tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(Domutil.querySelectorAll('.main div span').length).toBe(2);
    });

    // 셀렉터가 두 개인 경우, div li의 해당하는 엘레멘트 배열을 반환
    it('if selector is (tagName tagName), should be return array tagNam tagName element', function() {
        document.body.innerHTML = '<div class="wrap">div.Wrap<div class="area">div.area<p id="title">p#title</p><ul class="list"><li>li01</li><li>li02</li></ul><ul class="list"><li>li03</li><li>li04<p>p</p></li></ul></div><div class="area">div.area<div class="box" id="boxSection">div.box<span id="date">#date</span><ol class="list"><li id="first">li05</li><li>li06</li><li>li07</li></ol></div></div></div>'
        expect(Domutil.querySelectorAll('div li').length).toBe(7);
    });
});

describe('getElementsByClassName Pollyfil', function() {
    var _getElementsByClassNamePolyfill = function(rootEle, selector) {
        var allElements;
        var result = [];
        var rClassName;
        var i;
        var allElementsLength;

        if (document.getElementsByClassName) {
            return rootEle.getElementsByClassName(selector);
        }

        allElements = rootEle.getElementsByTagName('*');
        rClassName = new RegExp(selector);

        i = 0;
        allElementsLength = allElements.length;
        for (i; i < allElementsLength; i += 1) {
            if (rClassName.test(allElements[i].className)) {
                result.push(allElements[i]);
            }
        }

        return result;
    };

    it('Should be return main class elements', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(_getElementsByClassNamePolyfill(document, 'main').length).toBe(2);
    });
});
