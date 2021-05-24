import './App.css';

function Welcome(props) {
  //   const name = "김채린"
  //   const age = 23

  return (
    <div className="App">
      {console.log(props)}
      <h1> {props.name} 소개를 하겠습니다.</h1>
      <div>제 이름은 {props.name}입니다. </div>
      <a> 나이는 {props.age > 30 ? "30대" : "20대"}입니다.</a>
      <p>제 전공은 {props.major}입니다!</p>
      <p>제 취미는 {props.hobby || "잘 모르겠어요ㅠㅠ"}</p>
    </div>
  );
}

export default Welcome;