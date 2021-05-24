import Welcome from './0330.js'

function App() {

    return (
        <div>
            <Welcome name="호송" age="24" major="산업경영공학부" />
            <Welcome name="가영" age="21" major="건축사회환경공학부" hobby="음악듣기" />
            <Welcome name="태웅" age="22" major="통계학과" hobby="사람만나기" />
            <Welcome name="미해" age="23" major="전기전자공학부" hobby="닌텐도 스위치, 치킨먹기, 뮤지컬" />
            <Welcome name="나경" major="영어영문학과"/>
        </div>
    );
}

export default App;