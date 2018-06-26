component개념에 집중되어있는 라이브러리이다. 

데이터를 넣으면 지정한 인터페이스를 보여준다. 

facebook 개발자-> 보여주는 것만 신경쓰고 나머지 기능은 서브파티 라이브러리를 이용합니다. 사용자가 많고 

vue -> 입문자에게 쉽다. cdn으로 불러와서 단순히 사용가능하다. 디렉티브, virtual기반 

리액트 + angular를 섞어 놓은 느낌이다. 



지속해서 데이터가 변화하는 대규모 어플리케이션을 구축하기 위해 리액트를 만들었다. 

model => 양방향 바인딩 

첫개발 방향 

단순히 변화가 필요하면 변화를 주지말고 데이터가 바뀌면 뷰를 날려버리고 새로만들어 버리면 어떨까??

->virtual DOM 가상의 돔에 한번 렌더링 후 기존의 Dom과 비교 후 필요한 곳에 데이터를 바꾸어준다. 

리엑트의 장점

1. 어마어마한 생태계
다양하고 넓은 생태계 추 후 개발될 가능성이 높다.
2. 사용되는 곳이 많다. 
Airbnb, BBC, Cloudflare, Codecademy, Yahoo, eBay, Twitch, Facebook
3. 한번사용하면 좋아하게 된다. 
front 

webpack 
code들을 의존하는 순서대로 잘합쳐서 여러개의 파일들로 나타냅니다. 

project를 만들때 html상에서 불러오지 않고 자바스크립트 파일에서 불러 오는 것을 번들링이라고 부른다. 번들링 작업을 하게 될 때 특정자 마다 처리할 수 있도록 해주는 것이다. 

babel 

JSX 
오류1. html코드는 무조건 닫아 주어야한다. 
오류2. 두개이상의 코드는 하나의 큰 태그에 둘러 쌓여 있어야한다.

Props 
부모의 값을 자식에 넣어 줄 수 있다.읽기 전용 

함수형 컴포넌트 별다른 기능없이 props값만을 전달해주는 경우 

->초기 마운트 속도가 더빠르다. 최소한의 기능만 들어 있기 때문에 메모리를 덜 먹는다. 

state 
 
컴포넌트 자기 자신이 들고 있습니다. 자기가 처음부터 들고 있는 것을 변화가 필요하다면 component 내장함수에 대해서 변화를 준다. 컴포넌태 내부에 있고 값이 바뀔때 마다 rerndering이 됩니다. 바뀌면 setState를 사용하면 됩니다. 
state 변경가능하다는 점 
화살표 함수로 작성한 이유 

일반함수로 사용되면 this가 뭔지 못알아 차린다. 

라이프사이클(생명주기)
컴포넌트가 생성될때 리렌더링 될때 사라질때 중간중간에 어떠한 작업을 하고 싶다 할때 알아 두면 좋다. 

Mounting 
component가 새로 생성될때  

Constructor
제일 처음 실행되는 함수 
주로 초기설정이 필요한 값이나 state를 설정해줄 때 많이 사용된다.
getDerivedStateFromProps
props로 받은 값을 state에 동기화를 시켜주고 싶다.

render 
어떤 돔을 만들지 어떤 태그를 전해줄지

componentDidMount 
DC차티스트 특정 돔에다가 차트를 그려주세요 라든지 http, ajax등을 요청 할 수있다. 해당 돔에서 스크롤 이벤트를 읽고 싶다. 컴포넌트가 나타난시점에 어떠한 것을 하겠다. 


Updating 
component나 state가 바뀔때 
ShouldComponentUpdate
component가 업데이트되는 성능을 최적화 하기위해서 사용합니다. 
virtual Dom에 그리는 성능 조차도 아끼고 싶다. 할때 사용하면 좋다.virtual DOM에 그릴지 말지 선택해준다. 
True값이나 False값을 반환한다. 
true면 render를 하고 false는 render를 해주지 않는다. 

getSnapshotBeforUpdate 
scroll의 위치, 해당 돔의 크기 사전에 가져오고 싶다. 할때 사용한다. 

마지막 componentDidUpdate
이전의 상태와 지금의 상태가 다를때 어떠한 작업을 하겠다.
 
unMounting

componentWillUnmount 