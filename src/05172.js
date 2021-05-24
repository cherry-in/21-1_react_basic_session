import React, { useEffect, useState } from "react";

// https://velog.io/@hyounglee/TIL-56 의 코드를 함수형 컴포넌트로 다시 짠 코드입니다. 유의하세요!!

const Allitem = () => {
  const [state, setState] = useState({
    productList: [], //상품의 배열
    items: 10, //요청하는 상품의 끝 인덱스
    preItems: 0,  //요청하는 상품의 첫 인덱스
  });

  useEffect(() => {   //생명주기에서 componentDidMount, componentDidUpdate와 동일 기능
    getData();
    window.addEventListener("scroll", infiniteScroll);  //scroll이 발생할때마다 infiniteScroll 함수 실행하는 이벤트 추가
    return () => {      //생명주기에서 componentWillUnmount와 동일 기능
      window.removeEventListener("scroll", infiniteScroll);  //scroll이 발생할때마다 infiniteScroll 함수 실행하는 이벤트 제거
    };
  }, []); //dependency 옵션으로 componentDidMount/componentDidUpdate 결정

  const getData = () => {
    const { preItems, items, productList } = state;
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        const result = res.data.slice(preItems, items); //data 10개씩 가져옴
        setState({
          productList: [...productList, ...result], //productList에 가져와서 가공한 result 추가
        });
      });
  };

  const infiniteScroll = () => {
    const { documentElement, body } = document;
    const { items } = state;
    // 각 높이에 대한 설명은 https://velog.io/@hyounglee/TIL-56의 설명 참조
    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

     //우리가 원하는 스크롤이벤트 실행하는 부분입니다.
    if (scrollTop + clientHeight >= scrollHeight) {
      setState({
        preItems: items,
        items: items + 10,
      });
      getData();
    }
  };

  const { productList } = state;
  return (
    <article className="Allitem">
      <div className="topInfo">
        <div className="totalItems">{productList}</div>
      </div>
    </article>
  );
};

export default Allitem;
