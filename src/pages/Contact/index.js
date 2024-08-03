import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function Contact() {
  const form = useRef();
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validationHandler = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name cannot be empty";
    }

    if (!email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const recaptchaHandler = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationHandler() && verified) {
      emailjs
        .sendForm(
          "service_118im9r",
          "template_9w2y73m",
          form.current,
          "G810kYjrbq7ffQ8SD"
        )
        .then(
          (result) => {
            toast("Request Completed Successfully", {
              type: "success",
            });
            setMessage("");
            setEmail("");
            setName("");
            console.log(result.text);
          },
          (error) => {
            toast(error.text, {
              type: "error",
            });
            console.log(error.text);
          }
        );
    }
  };

  return (
    <React.Fragment>
      <div className="content-body">
        <section className="max-w-1280 mx-auto ">
          <div className="card responsive-card">
            <div className="card-header">
              <h5 className="header-title f-48 fw-700">Contact.</h5>
              <h6 className="sub-header-title f-18">GET IN TOUCH</h6>
            </div>
            <div className="card-body pd-t-20">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your good name?"
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="error">
                      <i className="fas fa-exclamation-circle"></i>{" "}
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email Address"
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span className="error">
                      <i className="fas fa-exclamation-circle"></i>{" "}
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    rows="7"
                    type="text"
                    className="form-control"
                    placeholder="What you want to say?"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6Ldr4V4pAAAAAC9zhtuGpSCzzIg4_kIbEblt6rBB"
                  onChange={recaptchaHandler}
                  theme="dark"
                />
                <div className="card-footer justify-content-end">
                  <button
                    type="submit"
                    value="Send"
                    className="btn-success min-w-135"
                    disabled={!verified}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.Fragment>
  );
}

export default Contact;
