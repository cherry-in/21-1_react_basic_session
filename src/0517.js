import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <>
      <Link to="/home">
        <button className="btn btn-primary">홈으로</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-danger">로그인하기</button>
      </Link>
      <div className="card col-3">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/home">
            <a className="btn btn-primary">Go Home</a>
          </Link>
        </div>
      </div>
      <h2>
        리가 이용한 effect를 기억하였다가 DOM을 업데이트한 이후에 실행합니다.
        이는 맨 첫 번째 렌더링은 물론 그 이후의 모든 렌더링에 똑같이 적용됩니다.
        숙련된 자바스크립트 개발자라면 useEffect에 전달된 함수가 모든 렌더링에서
        다르다는 것을 알아챘을지도 모릅니다. 이는 의도된 것으로서, count 값이
        제대로 업데이트 되는지에 대한 걱정 없이 effect 내부에서 그 값을 읽을 수
        Is this page useful?Edit this page
      </h2>
    </>
  );
}

export default Place;
