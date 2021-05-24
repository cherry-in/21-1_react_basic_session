import { useState, useEffect } from "react";

const INIT_USER = {
  email: "",
  password: "",
};

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState(INIT_USER);

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      alert("로그인!");
    } catch (error) {
      // catchErrors(error, setError);
    } finally {
      // setLoading(false);
    }
  }

  const { email, password } = user;
  return (
    <>
      <form onSubmit={handleSubmit}>
        {console.log(user)}
        <div className="row mb-4">
          <label htmlFor="email" className="col-sm-4 col-form-labell">
            이메일
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-4">
          <label className="col-sm-4 col-form-label">비밀번호</label>
          <div className="col-sm-8">
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-grid">
          <button
            disabled={disabled}
            type="submit"
            className="my-2 btn btn-MinDarkBlue"
          >
            확인
          </button>
        </div>
      </form>
    </>
  );
};
export default Login;
