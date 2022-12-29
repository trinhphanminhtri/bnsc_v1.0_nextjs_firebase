import React, { Fragment, useRef } from "react";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import Head from "next/head";
import CommonHero from "../components/ui/common-hero";
import classes from "../styles/Contact.module.css";
import Button from "../components/ui/button";

const Contact = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = emailInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      text: enteredFeedback,
    };
    
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // {email: 'test@test.com', text:'some feedback text'}
  };

  return (
    <Fragment>
      <Head>
        <title>Benison - Liên hệ</title>
      </Head>
      <CommonHero title={"Liên hệ"} />

      <section className={classes.contactSection}>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">
                Hãy nhập thông tin để chúng tôi liên lạc
              </h3>
              <Form
                onSubmit={submitFormHandler}
                className={classes.contactForm}
              >
                <FormGroup className={classes.inputForm}>
                  <input
                    type="text"
                    required
                    placeholder="Tên"
                    ref={nameInputRef}
                  />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    ref={emailInputRef}
                  />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <textarea
                    id="feedback"
                    rows={5}
                    required
                    placeholder="Nội dung..."
                    ref={feedbackInputRef}
                  />
                </FormGroup>
                <Button>Gửi</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;
