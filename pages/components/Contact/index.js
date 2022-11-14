import { useState } from 'react';

import styles from "./index.module.css";

// Function to create an auto-resizing textarea

// const textArea = document.getElementsByTagName("textarea");
// for (let i = 0; i < textArea.length; i++) {
//   textArea[i].setAttribute("style", "height: " + (textArea[i].scrollHeight) + "px; overflow-y: scroll;");
//   textArea[i].addEventListener("input", OnInput, false);
// }

// function OnInput() {
//   this.style.height = 0;
//   this.style.height = (this.scrollHeight) + "px";
// }

export default function Contact() {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [companySize, setCompanySize] = useState('up-to-ten')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
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
  }

  return (
    <section id="contact-form" className={styles.contactPage}>

      <div id={styles.contactTitleBlock}>
        <h2 id={styles.contactTitle}>Vamos bater um papo?</h2>
      </div>

      <form id={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitle}>Nome</h3>
          <input 
            type="text"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitle}>Empresa</h3>
          <input
            type="text"
            className={styles.formInput}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitle}>Tamanho da empresa</h3>
          <select
            id={styles.multiSelection}
            className={styles.formInput}
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            required
          >
            <option value="Até 10 funcionários">Até 10 funcionários</option>
            <option value="Entre 10 e 50 funcionários">Entre 10 e 50 funcionários</option>
            <option value="Acima de 50 funcionários">Acima de 50 funcionários</option>
          </select>
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitle}>E-mail</h3>
          <input
            type="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitle}>Mensagem</h3>
          <textarea
            className={styles.formInput}
            id={styles.desktop}
            placeholder="Conte-nos um pouco do que precisa"
            rows="1"
            required
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <textarea
            className={styles.formInput}
            id={styles.mobile}
            placeholder="Conte-nos o que precisa"
            rows="1"
            required
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button id={styles.contactCta}>BORA CONVERSAR!</button>
      </form>

    </section>
  )
}