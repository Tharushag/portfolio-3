import { useState } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Button from '@mui/material/Button';

function Message() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const [emailError, setEmailError] = useState("");
  const [emptyError, setEmptyError] = useState({
    name: "",
    email: "",
    msg: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });

    setEmptyError((preVal) => {
      return {
        ...preVal,
        [name]: ""
      };
    });

    if (name === "email") {
      checkEmail(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    isEmpty();

    if (!areThereErrors()) {
      console.log("Nicely done!");
    }
  }

  function areThereErrors() {
    if ((emailError === "") && (emptyError.name === "") && (emptyError.email === "") && (emptyError.msg === "")) {
      return false;
    } else {
      return true; 
    }
  }

  function checkEmail(email) {
    let emailRegx = /^[\w-.]+@([\w-]+.)+[\w-]{2,}$/i;

    if (emailRegx.test(email)) {
      setEmailError("");
    } else {
      setEmailError("*Invalid email address.");
    }
  }

  function isEmpty() {
    ["name", "email", "msg"].forEach(name => {
      if (input[name].length === 0) {
        setEmptyError((preVal) => {
          return {
            ...preVal,
            [name]: "*Please fill all fields."
          };
        });
      }
    });
  }

  return (
    <section id="landing-page" className="msg-me">
      <Navbar page="message-me" />

      <div className="msg-wrapper">
        <Title title="Let's talk" />

        <form className="msg-box" onSubmit={ handleSubmit } >
          <p className="regular-para">Want to  about discussa project or a question in general? Feel free to send me a message.</p>

          <div>
            <div className="error-box">
              <label className="regular-para">Name</label>
              <p className="error">{ emptyError.name }</p>
            </div>
            <input 
              type="text"
              name="name" 
              className="regular-para" 
              onChange={ handleChange } 
              value={ input.name } 
            />
          </div>

          <div>
            <div className="error-box">
              <label className="regular-para">Email</label>
              <p className="error">{ emailError || emptyError.email }</p>
            </div>
            <input 
              type="email" 
              name="email" 
              className="regular-para" 
              onChange={ handleChange } 
              value={ input.email } 
            />
          </div>

          <div>
            <div className="error-box">
              <label className="regular-para">Message</label>
              <p className="error">{ emptyError.msg }</p>
            </div>
            <textarea 
              name="msg" 
              className="regular-para" 
              onChange={ handleChange } 
              value={ input.msg } 
            />  
          </div>

          <div className="send-box">
            <Button type="submit" className="send-btn">Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Message;
