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
    const postTest = { name, company, companySize, email, message };
    console.log(postTest)
  }

  return (
    <section id={styles.contactPage}>

      <div id={styles.contactTitleBlock}>
        <h2 id={styles.contactTitle}>Vamos bater um papo?</h2>
      </div>

      <form id={styles.contactForm} onSubmit={handleSubmit}>

        <label>
          <h3 className={styles.formTitle}>Nome</h3>
          
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
          <h3 className={styles.formTitle}>Empresa</h3>
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
          <h3 className={styles.formTitle}>Tamanho da empresa</h3>

          <select
            id={styles.multiSelection}
            className={styles.formInput}
            name="tamanho-da-empresa"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            required
          >
            <option value="up-to-ten">Até 10 funcionários</option>
            <option value="between-ten-and-fifty">Entre 10 e 50 funcionários</option>
            <option value="more-than-fifty">Acima de 50 funcionários</option>
          </select>
        </label>
        
        <label>
          <h3 className={styles.formTitle}>E-mail</h3>

          <input
            type="email"
            name="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <h3 className={styles.formTitle}>Mensagem</h3>

          <textarea
            className={styles.formInput}
            id={styles.messageFieldDesktop}
            name="mensagem"
            placeholder="Conte-nos um pouco do que precisa"
            rows="1"
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <textarea
            className={styles.formInput}
            id={styles.messageFieldMobile}
            name="mensagem"
            placeholder="Conte-nos o que precisa"
            rows="1"
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>

          <button id={styles.contactCta} name="botao-para-contato"> BORA CONVERSAR! </button>

      </form>

    </section>
  )
}