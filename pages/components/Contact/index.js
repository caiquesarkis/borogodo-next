import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import styles from "./index.module.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return setInvalidEmailError("Por favor, insira seu endereço de e-mail no seguinte formato: seunome@exemplo.com")
    } else {
        const postData = { name, company, companySize, email, message };
      
        fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then(res=>{
        console.log(res,"el")
      })
    };
  };

  return (
    <section id="contact-form" className={styles.contactPage}>

      <div id={styles.contactTitleBlock}>
        <h2 id={styles.contactTitle}> Vamos bater um papo? </h2>
      </div>

      <form id={styles.contactForm} onSubmit={handleSubmit}>

        <label>
          <p className={styles.formLabel}> Nome </p>
          
          <input 
            type="text"
            name="nome"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          <p className={styles.formLabel}> Empresa </p>
          <input
            type="text"
            name="empresa"
            className={styles.formInput}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>

        <label>
          <p className={styles.formLabel}> Tamanho da empresa </p>

          <select
            id={styles.multiSelection}
            className={styles.formInput}
            name="tamanho da empresa"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            required
          >
            <option value=""> Selecione uma opção </option>
            <option value="Até 10 funcionários"> Até 10 funcionários </option>
            <option value="Entre 10 e 50 funcionários"> Entre 10 e 50 funcionários </option>
            <option value="Acima de 50 funcionários"> Acima de 50 funcionários </option>
          </select>
        </label>
        
        <label>
          <p className={styles.formLabel}> E-mail </p>

          <input
            type="email"
            name="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {invalidEmailError 
        ? <p className={styles.invalidEmail}> {invalidEmailError} </p>
        : null}

        <label>
          <p className={styles.formLabel}> Mensagem </p>

          <TextareaAutosize
            className={styles.formInput}
            id={styles.messageFieldDesktop}
            name="mensagem"
            placeholder="Conte-nos um pouco do que precisa"
            maxRows={6}
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <TextareaAutosize
            className={styles.formInput}
            id={styles.messageFieldMobile}
            name="mensagem"
            placeholder="Conte-nos o que precisa"
            maxRows={4}
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

          <button id={styles.contactCta} name="botão para contato"> BORA CONVERSAR! </button>

      </form>

    </section>
  )
}