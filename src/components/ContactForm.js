import React, { useState, useRef, useEffect } from 'react';

import { toast } from 'react-toastify';
import Button from './generics/Button';
import InputText from './generics/InputText';
// import emailjs from 'emailjs-com';


const ContactForm = () => {

    const form = useRef(null)

    const nameReg = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'-]+$/;
    const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [captcha, setCaptcha] = useState("");

    const [answer, setAnswer] = useState("");


    useEffect(() => {
        function genWord() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 7; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            setCaptcha(text);
        }
        genWord();
    }, []);
   

    // RESET VALUES -----------------------------------------------------

    const resetValues = () => {
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
        setAnswer("");
        genWord();
    }

    const genWord = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 7; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        setCaptcha(text);
    }
    // HANDLE -------------------------------------------------------------------------------------------

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleNameChange = (e) => {
        let val = e.target.value;
        if (nameReg.test(val) || val === "") setName(val);
    }
    
    const handleSubjectChange = (e) => setSubject(e.target.value);

    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleAnswerChange = (e) => setAnswer(e.target.value);

    const sendEmail = (e) => {
        e.preventDefault();
        if (emailReg.test(email)) {
            if (answer === captcha) {
                // emailjs.sendForm('service_yp9mjg9', 'lycee_template', form.current, 'user_kJVhkhpgVxlSmIHEaC2pI');
                toast.success("Votre message a été envoyé avec succès !");
                resetValues();
            }
            else toast.error("Le captcha entré est incorrect.");
        }
        else toast.error("L'adresse email saisie est incorrecte.");
    }

    return (
        <>
            <form className="contact__form" onSubmit={sendEmail} ref={form}>
                <div className="contact__input">

                    <div className="input__name-email">
                        <InputText value={name} handleChange={handleNameChange} placeholder="Name"/>
                        <InputText value={email} handleChange={handleEmailChange} placeholder="Email"/>
                    </div>

                    <InputText value={subject} handleChange={handleSubjectChange} placeholder="Subject"/>

                    <div className="textarea">
                        <textarea classplaceholder="Message" onChange={(e) => handleMessageChange(e)} value={message} placeholder="Message" />
                    </div>

                    <div className="input__answer">
                        <span>Type {captcha} : </span>
                        <InputText value={answer} handleChange={handleAnswerChange} placeholder="Captcha" />
                    </div>
                   

                    <div className="input__btn">
                        <Button text={"Send message"} onClick={sendEmail} />
                    </div>
                </div>
            </form>
        </>
    );
}

export default ContactForm;