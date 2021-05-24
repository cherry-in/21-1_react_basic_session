import React from "react";

const Body = (props) => {
  return (
    <body>
      <div>제 이름은 {props.name}입니다. </div>
      <a> 나이는 23살입니다.</a>
      <p>제 전공은 데이터계산과학전공입니다!</p>
      <p>
        제 취미는 춤추기, 영화보기, 오버워치하기, 미니어쳐만들기, 보석십자수,
        컬러링, 드라이브당하기(면허는 아직 없음..), 운동 등등 다양합니다ㅎㅎ
      </p>
    </body>
  );
};

export default Body;
