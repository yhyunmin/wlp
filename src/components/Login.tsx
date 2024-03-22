import useInput from "../hooks/useInput";
import { ChangeEventHandler, useEffect, useState } from "react";
import style from "./Login.module.css";
import logo from "../assets/logo.png";
import Open from "../assets/open.svg?react";
import Off from "../assets/off.svg?react";

export type useInputType = [string, ChangeEventHandler<HTMLInputElement>];

const Login = () => {
  const [id, onChangeId]: useInputType = useInput("");
  const [pw, onChangePw]: useInputType = useInput("");
  const [isShow, setIsShow] = useState(false);
  const [pwType, setPwType] = useState("password");
  const [isDisable, setIsDisable] = useState(true);
  const handleChangePwType = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
    if (id && pw) {
      setIsDisable(false);
    }
  }, [id, pw]);
  useEffect(() => {
    if (isShow) {
      setPwType("text");
    } else {
      setPwType("password");
    }
  }, [isShow]);

  // 로그인데이터 전송
  const handleSubmit = async () => {
    // const res = await fetch(,{});
    // userData =res.json();
    // if (userData.id === undefined) {
    // return   console.log("id불일치");
    // } else if (userData.id === null) {
    //   return console.log("pw불일치");
    // }
    // main 페이지 이동
  };
  return (
    <>
      <div className={style.container}>
        <h1>
          <img src={logo} alt="" className={style.logo} id="Logo" />
        </h1>
        <h2 className={style.loginTitle}>로그인</h2>
        <section className={style.inputContainer}>
          <div className={style.inputBox}>
            <label htmlFor="hmId" className={style.inputTitle}>
              GW ID
            </label>
            <input
              type="text"
              id="hmId"
              name="id"
              onChange={onChangeId}
              value={id}
              placeholder="아이디를 입력하세요."
              className={style.input}
            />
          </div>
          <div className={style.inputBox}>
            <label htmlFor="hmPw" className={style.inputTitle}>
              PASSWORD
            </label>
            <span className={style.showPw} onClick={handleChangePwType}>
              {isShow ? (
                <Open width={16} height={16} />
              ) : (
                <Off width={16} height={16} />
              )}
            </span>
            <input
              type={pwType}
              id="hmPw"
              name="pw"
              onChange={onChangePw}
              value={pw}
              placeholder="비밀번호를 입력하세요."
              className={style.input}
            />
          </div>
        </section>

        <button
          disabled={isDisable}
          onClick={handleSubmit}
          className={style.submitBtn}
        >
          로그인
        </button>
      </div>
    </>
  );
};

export default Login;
