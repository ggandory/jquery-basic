/**
 * attr()   VS   prop()

jQuery 1.6.0 업데이트로  attr() 과  prop()  두 개로 나눠졌다.

- attr() :  HTML 속성 (Attribute) 취급

- prop() : javascript 프로퍼티 (Property) 취급

 

**  속성(Attribute) 은 HTML 요소에 대한 추가 정보를 전달하며 쌍으로 제공

**  프로퍼티(Property) 는 HTML DOM트리의 특성으로

javaSctipt / jQuery를 통해 수정된 요소의 값을 가져오는데 사용하는 것이 좋음 */

var text = $("input[type=text]");
console.log(chk.attr("id")); // example
console.log(chk.attr("type")); // text
console.log(chk.attr("checked")); // checked

var text = $("input[type=text]");
console.log(chk.prop("id")); // example
console.log(chk.prop("type")); // text
console.log(chk.prop("checked")); // true
//두개의 차이
/**위의 예제를 보면 id와 type 값은 동일하나 checked에서 다른 값을 확인 할 수 있다.

 attr()  은 HTML 속성 값이 모두 String의 타입이지만  
 prop() 는 boolean, date, function 등으로 가져올 수 있다. */

/**attr() / prop() 둘 중 무엇이 좋을까?
 

각 사용자들이 사용하는 목적에 따라 다를 수 있지만  prop() 가 
 attr() 보다 약 2.5배 빠르다는 장점을 가진다.

HTML의 속성을 가지고 오고 싶을 때는  attr() 을,

javaScript로 수정된 요소의 값을 가지고 싶을 때는  prop()  사용을 권한다.

더나아가 체크박스를 컨트롤할 때, 체크박스의 체크여부를 알아볼 수 있는  is(":checked" ) 와  
prop("checked") 에 대해서는 다음 포스팅에서 다뤄보겠다! */

/** 
 * prop("checked")   VS   is(":checked")

jQuery 1.6.0 이상을 사용하는 경우  prop("checked") 가 가장 직접적인 
jQuery 방식이며 단순히 속성을 직접 확인하는 것이 아니라 몇 가지 수준의 간접적인 작업을 먼저 수행한다.

- Webkit의 브라우저에서는 요소가 선택자와 일차하는지 테스트하는 기능을 제공하고 
기본적으로 :checked를 지원하므로 webkit 브라우저에서는 상당히 직접적.

- Firefox와 IE에서는 간단한 선택기가 sizzle용기를 통해 작동하여 엄청난 수의 함수 호출이 발생.

그렇다면 두 방식의 어떤 타입을 반환할까?
*/

//<!-- .html -->
//<input type="checkbox" id="example" checked">example

// .js
var chk = $("input[type=checkbox]");

console.log(chk.prop("checked")); //true
console.log(chk.is(":checked")); //true

//jQuery.type()로 반환되는 값의 타입(type)을 확인하면 두 개의 방식 모두
//boolean  타입을 갖는다.

// 타입(type) 확인
console.log(jQuery.type(chk.prop("checked"))); //boolean
console.log(jQuery.type(chk.is(":checked"))); //boolean

/**
 * 체크박스는 단일로 처리되는 경우도 있지만, 전체 체크박스가 하위의 
 * 체크박스를 함께 처리할 경우를 많이 볼 수 있다.

그렇다면 전체 체크박스 처리는 어떻게 할까?
 */

// 체크박스 .html
/** 
<input type="checkbox" id="chkCtrl"> 전체 선택 <br>
<input type="checkbox" name="chk">선택 1
<input type="checkbox" name="chk">선택 2
<input type="checkbox" name="chk">선택 3
*/

//이렇게 html을 작성하고  prop("checked") 와
//is(":checked") 를 사용하여 전체선택박스를 컨트롤 해보았다.

// .js
var chkList = $("input[name=chk]");

$("#chkCtrl").click(function () {
  if ($(this).is(":checked")) {
    chkList.prop("checked", true);
  } else chkList.prop("checked", false);
});
