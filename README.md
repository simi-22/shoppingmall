# Skill
React, Javascript, react-redux/middleware, redux-toolkit

# Data
my json server

# Deploy
[Netlify](https://booksmall.netlify.app/)

# Works
My json server로 DB파일을 만들어 페이지에 렌더링


장르 필터링 기능

---


# React Query
> fetching, caching, 서버 데이터와의 동기화를 지원해주는 라이브러리
>  React 환경에서의 비동기 Query(질의) 과정을 도와주는 라이브러리
> > 1. React Query는 React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다.
> > 2. 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.
> > 3. 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 “핵심 로직”에 집중할 수 있습니다.

## staleTime
> staleTime은 데이터가 fresh → stale 상태로 변경되는 데 걸리는 시간이다.
> fresh 상태일 때는 Refetch 트리거(위의 3가지 경우)가 발생해도 Refetch가 일어나지 않는다
> 기본값이 0이므로 따로 설정해주지 않는다면 Refetch 트리거가 발생했을 때 무조건 Refetch가 발생한다

## cacheTime
> cacheTime은 데이터가 inactive한 상태일 때 캐싱된 상태로 남아있는 시간이다.
> 특정 컴포넌트가 unmount(페이지 전환 등으로 화면에서 사라질 때) 되면 사용된 데이터는 inactive상태로 바뀌고, 이때 데이터는 cacheTime만큼 유지된다.
> cacheTime 이후 데이터는 가비지 콜렉터로 수집되어 메모리에서 해제된다.
> 만일 cacheTime이 지나지 않았는데 해당 데이터를 사용하는 컴포넌트가 다시 mount되면, 새로운 데이터를 fetch해오는 동안 캐싱된 데이터를 보여준다.
> 즉, 캐싱된 데이터를 계속 보여주는게 아니라 fetch하는 동안 임시로 보여준다는 것

## Client 데이터와 Server 데이터 간의 분리
실제 Client 데이터의 경우 Redux, Recoil, mobX와 같은 전역 상태 관리 라이브러리들을 통해 잘 관리되어오고 있으나, 문제는 이러한 라이브러리들이 Server 데이터까지도 관리를 해야하는 상황이 발생한다는 것이다.


위의 라이브러리들은 Client 데이터를 관리하는데 로직이 집중되어있기 때문에, Server 데이터까지 효율적으로 관리하기에는 한계가 분명

```
const { data, isLoading } = useQueries({
	['unique-key'],
	() => {
		return api({
			url: URL,
			method: 'GET',
		});
	},
	{
		onSuccess: (data) => {
			// data로 이것저것 하는 로직
		}
	},
	{
		onError: (error) => {
			// error로 이것저것 하는 로직
		}
	}
})
```
> 즉, Client 데이터는 상태 관리 라이브러리가 관리하고,
> Server 데이터는 React-Query가 관리하는 구조라고 생각하면 된다
> 이를 통해 우리는 Client 데이터와 Server 데이터를 온전하게 분리할 수 있다

# 참고
[[React-Query] React-Query 개념잡기](https://velog.io/@kandy1002/React-Query-%ED%91%B9-%EC%B0%8D%EC%96%B4%EB%A8%B9%EA%B8%B0)


---

# Redux, Redux-toolkit
> 상태 관리 라이브러리 중 하나
> 상태 관리란 UI와 UX에 맞게 데이터를 관리하거나, 서버와 주고 받는 데이터를 관리하는 것
> Props drilling 등 상태 관리 라이브러리는 이러한 문제들을 해결하기 위해 고안

## 기본용어
### Store
스토어는 컴포넌트의 상태를 관리하는 저장소다. 하나의 프로젝트는 하나의 스토어만 가질 수 있다.
### Action
스토어의 상태를 변경하기 위해서는, 액션을 생성해야한다. 액션은 객체이며, 반드시 type을 가져야 한다. 액션 객체는 액션생성함수에 의해서 만들어진다.
### Reducer
리듀서는 현재 상태와 액션 객체를 받아 새로운 상태를 리턴하는 함수다.
### Dispatch
디스패치는 스토어의 내장 함수 중 하나이며, 액션 객체를 넘겨줘 상태를 업데이트 시켜주는 역할을 한다.
### Subscribe
스토어의 내장 함수 중 하나로, 리듀서가 호출될 때 서브스크라이브된 함수 및 객체를 호출한다.
> 1. UI가 처음 렌더링될 때, UI 컴포넌트는 리덕스 스토어의 상태에 접근하여 해당 상태를 렌더링한다.
> 2. 이후 UI에서 상태가 변경되면, 앱은 디스패치를 실행해 액션을 일으킨다.
> 3. 새로운 액션을 받은 스토어는 리듀서를 실행하고 리듀서를 통해 나온 값을 새로운 상태로 저장한다.
> 4. 서브스크라이브된 UI은 상태 업데이트로 변경된 데이터를 새롭게 렌더링한다.

## Redux
```
$ npm install redux
```


```
$ npm install redux react-redux
```

### Store 만들기
리덕스 설치가 완료되었다면, 스토어를 만들어 주자. 스토어는 createStore()를 통해 만들 수 있다.
```
import { createStore } from 'redux';
```

## Redux Toolkit 사용하기

```
npm install @reduxjs/toolkit
```

### Store 연동하기
> Provider는 react-redux에서 리액트 앱에 스토어를 연동할 수 있게 해주는 컴포넌트다.
> 아래와 같이 Provider 컴포넌트를 불러와 연동할 컴포넌트를 감싸준 뒤, Provider의 props로 사용할 스토어를 지정해주면 된다.

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
```
### Store 만들기
> 먼저 store.js에 configureStore()로 스토어를 만들어주자.
```
// store.js

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: counterSlice,
    middleware: [...middlewares]
})
```
> 기존 리덕스에서는 스토어 생성 후 미들웨어가 한 개 이상이라면, 여러 메서드를 통해 긴 코드를 작성해야 했다.
> configureStore()는 별도의 메서드 없이 바로 미들웨어를 추가할 수 있다는 장점이 있다.

### createSlice 생성
> 기존 리덕스에서는 액션을 디스패치하기 위한 별도의 함수가 필요했고, 액션의 객체를 리듀서를 통해 리턴하는 구조였다.
> createSlice()는 액션에 대한 함수 설정과 리듀서를 따로 생성하지 않아도 된다.
> 아래는 createSlice()를 사용한 카운트업 코드와 그에 대한 설명이다.
```
// countSlice.jsx

import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    plus: state => {
      state.value += 1
    },
    minus: state => {
      state.value -= 1
    },
  },
})

export const { plus, minus } = counterSlice.actions; 
export default counterSlice.reducer;
```
> * initialState를 통해 state의 처음 상태를 정의한다.
> * reducers에서 액션을 설정한다.
> * plus와 mius를 export해서 App.jsx에 import한다.
> * slice는 slice.reducer로 내보낸다. store.js는 위 파일을 전부 리듀서로 받는다.

### useSelector, useDispatch로 상태 접근하기
> useSelector()는 기존 리덕스의 connect()를 이용하지 않고 리덕스의 상태를 조회할 수 있다.
> useDispatch()는 생성한 액션을 발생시키며, 액션생성 함수를 가져온다. 위 설명의 디스패치와 같다고 보면 된다.
> 아래는 useSelector()와 useDispatch()에 대한 설명이다.
```
// App.jsx

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './counter/countSlice01';

export default function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(minus())}>-</button>
      Value: { count } 
      <button onClick={() => dispatch(plus())}>+</button>
    </div>
  );
}
```
* useSelector()로 스토어에서 현재 상태 값을 가져온다.
* useDispatch()를 통해 변경되는 값을 스토어로 전달한다.

# 참고
[최고 리덕스야 고맙다! Redux & Redux Toolkit 알아보기](https://velog.io/@sweet_pumpkin/%EB%AC%B4%EC%9E%91%EC%A0%95%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-%EC%B5%9C%EA%B3%A0-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%95%BC-%EA%B3%A0%EB%A7%99%EB%8B%A4-Redux-Redux-Toolkit-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
