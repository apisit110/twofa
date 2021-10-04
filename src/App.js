import React, { useEffect, useState } from "react";
import "./App.css";

import styles from "./twofa.module.css";

function App() {
  const initialSetting = {
    max: 6,
    onChangeValue: () => {},
  };
  const [setting, setSetting] = useState(initialSetting);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    try {
      if (e.target.value) {
        let { value } = e.target;

        if (input.length > 0) {
          // when the data already exists
          if (input.length < setting.max) {
            if (input[e.target.attributes.tabindex.value - 1]?.length > 0) {
              value = value.substring(1);
            }

            let data = input.concat(value);
            if (data.length > 6) {
              data = data.slice(0, 6);
            }
            setInput(data);

            document.getElementById(`pin${data.length}`).focus();
          }
        } else {
          // when empty data
          if (value.length > 6) {
            value = value.slice(0, 6);
          }
          setInput(value);
          document.getElementById(`pin${value.length}`).focus();
        }
      } else {
        // clear data
        if (input.length > 0) {
          setInput(input.slice(0, -1));

          if (input.length !== 1) {
            document.getElementById(`pin${input.length - 1}`).focus();
          }
        }
      }
    } catch (error) {
      console.log("some error");
    }
  };

  useEffect(() => {
    console.log(input);
    if (input.length === 6) {
      // code...
      console.log("Do Something...");
    }
  }, [input]);
  return (
    <React.Fragment>
      <div className={styles.wrapper__size}>
        <div className={styles.twofa_blur}></div>
        <div className={styles.twofa}>
          <div className={styles.twofa__header}>
            <div className={styles.twofa__header__title}>
              <span>Google Authentication</span>
            </div>
          </div>
          <div className={styles.twofa__body}>
            <div className={styles.twofa__body__flex}>
              <div className={styles.twofa__body__flex__flex}>
                <div className={styles.twofa__body__flex__flex__message}>
                  <div
                    className={styles.twofa__body__flex__flex__message__flex}
                  >
                    <div
                      className={
                        styles.twofa__body__flex__flex__message__flex__img
                      }
                    >
                      <img
                        width="60"
                        src="images/Google_Authenticator_for_Android_icon.png"
                      />
                    </div>
                    <div
                      className={
                        styles.twofa__body__flex__flex__message__flex__text
                      }
                    >
                      <span>
                        Input the 6-digit code in your Google Authenticator app
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.twofa__body__flex__flex__input}>
                  <div className={styles.twofa__body__flex__flex__input__flex}>
                    <div
                      className={
                        styles.twofa__body__flex__flex__input__flex__message
                      }
                    >
                      <span>Google Authentication Code</span>
                    </div>
                    <div
                      className={
                        styles.twofa__body__flex__flex__input__flex__input
                      }
                    >
                      <input
                        id="pin1"
                        // maxLength="1"
                        tabIndex="1"
                        value={input[0] ? input[0] : ""}
                        onChange={handleChange}
                        autoFocus={true}
                      />
                      <input
                        id="pin2"
                        // maxLength="1"
                        tabIndex="2"
                        value={input[1] ? input[1] : ""}
                        onChange={handleChange}
                      />
                      <input
                        id="pin3"
                        // maxLength="1"
                        tabIndex="3"
                        value={input[2] ? input[2] : ""}
                        onChange={handleChange}
                      />
                      <input
                        id="pin4"
                        // maxLength="1"
                        tabIndex="4"
                        value={input[3] ? input[3] : ""}
                        onChange={handleChange}
                      />
                      <input
                        id="pin5"
                        // maxLength="1"
                        tabIndex="5"
                        value={input[4] ? input[4] : ""}
                        onChange={handleChange}
                      />
                      <input
                        id="pin6"
                        // maxLength="1"
                        tabIndex="6"
                        value={input[5] ? input[5] : ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.twofa__body__flex__help}>
                <span>Can't access Google Authenticator?</span>
              </div>
            </div>
          </div>
          {/* <div className={styles.twofa__footer}></div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
