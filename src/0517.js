import React, { useEffect } from "react";

function Place() {
  const getReview = () => {
    alert("불러와!");
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  const infiniteScroll = () => {
    const { documentElement, body } = document;
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("더불러랏");
      getReview();
    }
    console.log(scrollHeight, scrollTop, clientHeight);
  };

  return (
    <h2>
        리가 이용한 effect를 기억하였다가 DOM을 업데이트한 이후에 실행합니다.
      이는 맨 첫 번째 렌더링은 물론 그 이후의 모든 렌더링에 똑같이 적용됩니다.
      숙련된 자바스크립트 개발자라면 useEffect에 전달된 함수가 모든 렌더링에서
      다르다는 것을 알아챘을지도 모릅니다. 이는 의도된 것으로서, count 값이
      제대로 업데이트 되는지에 대한 걱정 없이 effect 내부에서 그 값을 읽을 수
      있게 하는 부분이기도 합니다. 리렌더링하는 때마다 모두 이전과 다른 effect로
      교체하여 전달합니다. 이 점이 렌더링의 결과의 한 부분이 되게 만드는 점인데,
      각각의 effect는 특정한 렌더링에 속합니다. 이 페이지의 뒷부분에서 이것이 왜
      유용한지에 대해서 더 자세히 다룰 것입니다. 팁 componentDidMount 혹은
      componentDidUpdate와는 달리 useEffect에서 사용되는 effect는 브라우저가
      화면을 업데이트하는 것을 차단하지 않습니다. 이를 통해 애플리케이션의
      반응성을 향상해줍니다. 대부분의 effect는 동기적으로 실행될 필요가
      없습니다. 흔하지는 않지만 (레이아웃의 측정과 같은) 동기적 실행이 필요한
      경우에는 useEffect와 동일한 API를 사용하는 useLayoutEffect라는 별도의
      Hook이 존재합니다. 정리(clean-up)를 이용하는 Effects 위에서
      정리(clean-up)가 필요하지 않은 side effect를 보았지만, 정리(clean-up)가
      필요한 effect도 있습니다. 외부 데이터에 구독(subscription)을 설정해야 하는
      경우를 생각해보겠습니다. 이런 경우에 메모리 누수가 발생하지 않도록
      정리(clean-up)하는 것은 매우 중요합니다. class와 Hook을 사용하는 두 경우를
      비교해보겠습니다. Class를 사용하는 예시 리액트 class에서는 흔히
      componentDidMount에 구독(subscription)을 설정한 뒤
      componentWillUnmount에서 이를 정리(clean-up)합니다. 친구의 온라인 상태를
      구독할 수 있는 ChatAPI 모듈의 예를 들어보겠습니다. 다음은 class를 이용하여
      상태를 구독(subscribe)하고 보여주는 코드입니다. class FriendStatus ext 팁:
      Effect를 건너뛰어 성능 최적화하기 모든 렌더링 이후에 effect를
      정리(clean-up)하거나 적용하는 것이 때때로 성능 저하를 발생시키는 경우도
      있습니다. 클래스 컴포넌트의 경우에는 componentDidUpdate에서 prevProps나
      prevState와의 비교를 통해 이러한 문제를 해결할 수 있습니다. 위의 예시에서
      우리는 [count]를 두 번째 인수로 넘깁니다. 이것이 의미하는 바는 다음과
      같습니다. 만약 count가 5이고 컴포넌트가 리렌더링된 이후에도 여전히 count는
      변함없이 5라면 리액트는 이전 렌더링 시의 값 [5]를 그다음 렌더링 때의 [5]와
      비교합니다. 배열 내의 모든 값이 같기 때문에(5 === 5) 리액트는 effect를
      건너뛰게 됩니다. 이런 식으로 최적화가 가능합니다. count가 6으로 업데이트된
      뒤에 렌더링하면 리액트는 이전에 렌더링된 값 [5]를 그다음 렌더링 시의 [6]와
      비교합니다. 이때 5 !== 6 이기 때문에 리액트는 effect를 재실행합니다. 배열
      내에 여러 개의 값이 있다면 그중의 단 하나만 다를지라도 리액트는 effect를
      재실행합니다. 이것은 정리(clean-up)를 사용하는 effect의 경우에도 동일하게
      작용합니다. 두 번째 인자는 빌드 시 변환에 의해 자동으로 추가될 수도
      있습니다. 주의 이 최적화 방법을 사용한다면 배열이 컴포넌트 범위 내에서
      바뀌는 값들과 effect에 의해 사용되는 값들을 모두 포함하는 것을
      기억해주세요. 그렇지 않으면 현재 값이 아닌 이전의 렌더링 때의 값을
      참고하게 됩니다. 이에 대해서는 함수를 다루는 방법과 의존성 배열이 자주
      바뀔 때는 어떻게 해야 하는가에서 더 자세히 알아볼 수 있습니다. effect를
      실행하고 이를 정리(clean-up)하는 과정을 (마운트와 마운트 해제 시에)딱 한
      번씩만 실행하고 싶다면, 빈 배열([])을 두 번째 인수로 넘기면 됩니다. 이렇게
      함으로써 리액트로 하여금 여러분의 effect가 prop이나 state의 그 어떤 값에도
      의존하지 않으며 따라서 재실행되어야 할 필요가 없음을 알게 하는 것입니다.
      이는 의존성 배열의 작동 방법을 그대로 따라서 사용하는 것일 뿐이며 특별한
      방법인 것은 아닙니다. 빈 배열([])을 넘기게 되면, effect 안의 prop과
      state는 초깃값을 유지하게 됩니다. 빈 배열([])을 두 번째 인수로 넘기는 것이
      기존에 사용하던 componentDidMount와 componentWillUnmount 모델에 더
      가깝지만, effect의 잦은 재실행을 피할 수 있는 더 나은 해결방법이 있습니다.
      또한 리액트는 브라우저가 다 그려질 때까지 useEffect의 실행을 지연하기
      때문에 추가적인 작업을 더하는 것이 큰 문제가 되지는 않습니다.
      exhaustive-deps 규칙을 eslint-plugin-react-hooks 패키지에 포함하는 것을
      추천합니다. 이 패키지는 의존성이 바르지 않게 지정되었을 때 경고하고
      수정하도록 알려줍니다. 다음 단계 여기까지 오느라 수고가 많으셨습니다. 긴
      글이지만 끝까지 읽으면서 많은 궁금증이 해결되었기를 바랍니다. 지금까지
      배운 State Hook과 Effect Hook을 결합하면 많은 것을 할 수 있습니다. class를
      이용하는 대부분의 경우를 구현할 수 있습니다. 구현되지 않는 경우에는
      additional Hooks이 도움이 될 것입니다. 우리는 동기에 서술되어있는 문제들을
      Hook이 어떻게 해결할 수 있는지 알아가고 있습니다. 어떻게 effect의
      정리(clean-up)가 componentDidUpdate와 componentWillUnmount에서의 중복을
      피하고, 관련 있는 코드들을 한곳에 모이게 하며 버그를 줄일 수 있게
      도와주는지 알아보았습니다. 또한 effect를 그 목적에 따라 어떻게
      구분하는지도 보았습니다. 이는 클래스 컴포넌트에서는 할 수 없는 일이었죠.
      지금 이 시점에서 여러분은 Hook이 어떻게 작동하는 것인지 궁금해하고 있을
      것입니다. 어떻게 리액트는 리렌더링 시에 특정한 useState의 실행이 어떤
      state 변수에 상응하는지 아는 것일까요? 어떻게 리액트는 이전과 그다음
      effect를 업데이트 때마다 “매치업하는(일치하는)” 것일까요? 이에 대해서는
      다음 장에서 Hook의 작동에 핵심적인 Hook의 규칙을 통해서 배워볼 것입니다.
      Is this page useful?Edit this page
    </h2>
  );
}

export default Place;
