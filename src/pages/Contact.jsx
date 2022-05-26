import React from "react";
import "style/Contact.css";
import { Formik, Field, Form } from "formik";

function Contact() {
  return (
    <div className="contacts">
      <div className="data-info">
        <div className="contact">
          <i className="fa-solid fa-phone"></i>
          <p className="infos">(050) 825 75 15</p>
        </div>
        <div className="contact">
          <i className="fa-solid fa-envelope"></i>
          <p className="infos">eltacem@code.edu.az</p>
        </div>
        <div className="contact">
          <i className="fa-solid fa-envelope"></i>
          <p className="infos">ejtacmalik@gmail.com</p>
        </div>
        <div className="contact">
          <i className="fa-brands fa-linkedin"></i>
          <p className="infos">Eltac malik</p>
        </div>
        <div className="contact">
          <i className="fa-brands fa-facebook-square"></i>
          <p className="infos">Eltac Melikmemmedov</p>
        </div>
        <div className="contact">
          <i className="fa-brands fa-github-square"></i>
          <p className="infos">eltac-malik</p>
        </div>
      </div>
      <div className="mail">
        <Formik
          initialValues={{
            name: "",
            title: "",
            area: "",
          }}
        >
          <Form className='form'>
            <Field className='inp' type="text" name="name" placeholder="name" />
            <Field className='inp' type="text" name="title" placeholder="title" />
            <Field className='area' as='textarea' name="area" />
            <input type="submit" className='btn-sub' value='Send Mail'/>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
