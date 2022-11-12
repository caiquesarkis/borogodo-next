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
  return (
    <section id={styles.contactPage}>
      <div id={styles.contactTitleBlock}>
        <h2 id={styles.contactTitle}>Vamos bater um papo?</h2>
      </div>
      <form id={styles.contactForm}>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitles}>Nome</h3>
          <input type="text" className={styles.formInput} required />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitles}>Empresa</h3>
          <input type="text" className={styles.formInput} required />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitles}>Tamanho da empresa</h3>
          <select id={styles.multiSelection} className={styles.formInput} required>
            <option value="less-than-ten">Menos de 10 funcionários</option>
            <option value="up-to-ten">Até 10 funcionários</option>
            <option value="more-than-ten">Mais de 10 funcionários</option>
          </select>
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitles}>E-mail</h3>
          <input type="email" className={styles.formInput} required />
        </label>
        <label className={styles.contactFormLabel}>
          <h3 className={styles.formTitles}>Mensagem</h3>
          <textarea className={styles.formInput} id={styles.desktop} placeholder="Conte-nos um pouco do que precisa" rows="1" required></textarea>
          <textarea className={styles.formInput} id={styles.mobile} placeholder="Conte-nos o que precisa" rows="1" required></textarea>
        </label>
        <button id={styles.contactCta}>BORA CONVERSAR!</button>
      </form>
    </section>
  )
}