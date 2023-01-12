import styles from "./styles/styles.module.css";
import Image from "react-bootstrap/Image";
import logo from "./images/logo.png";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <div className="d-flex flex-row">
            <div>
              <h3>RECRUIT DIRECT SCOUT</h3>
              <p>リクルートダイレクトスカウト</p>
            </div>
            <div>
              <button id={styles.headerbtn}>ログイン</button>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div id={styles.backgroundimg}>
          <div id={styles.sec1txt}>
            <p id={styles.sextxt1}>年収800万~2,000万円の</p>
            <p id={styles.sectxt1}>ハイクラス転職</p>
            <Image src={logo} alt="logo" />
          </div>
          <div id={styles.txtgroup} className="text-white">
            <p id={styles.txtgrouptxt1}>転職後の平均年収</p>
            <div className="row">
              <p id={styles.txtgrouptxt2} className="col-6">
                938
              </p>
              <p id={styles.txtgrouptxt3} className="col-6">
                万円
              </p>
            </div>
            <p>※2022 年 4 月時点、ハイキャリア会員のみ</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
