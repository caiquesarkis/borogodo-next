import styles from "./index.module.css";
import Image from "next/image"

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className={styles.whatWeDo}>
      <div className={styles.whatWeDoFirstContainerWrapper}>
        <div className={styles.whatWeDoFirstContainerYellowBlockOne} />
        <div className={styles.whatWeDoFirstContainerOne}>
          <div className={styles.whatWeDoFirstContainerOneTitleWrapper}>
            <h2>O que fazemos?</h2>
          </div>
          <Image alt="O que fazemos" width={479} height={512} src="/o-que-fazemos.png" />
        </div>
        <div className={styles.whatWeDoFirstContainerTwo}>
          <p>
            Mapeamos todo o ecossistema de influência para dar aquele Borogodó
            para a sua marca ser mais vista, vender mais e seu perfil crescer de
            forma estruturada. Não adianta fazer post e site pensando somente na
            estrutura do digital, é necessário ter estratégia para seu negócio
            começar a andar, e depois acelerar. E para traçar a melhor
            estratégia é preciso achar as pessoas certas.
          </p>
          <button>
            <a href="#contact-form"><p>MAPEAR INFLUENCIADORES</p></a>
          </button>
        </div>
        <div className={styles.whatWeDoFirstContainerYellowBlockTwo} />
      </div>
      <div className={styles.whatWeDoSecondContainerWrapper}>
        <div className={styles.whatWeDoSecondContainerOne}>
          <p>
            Só contratar uma plataforma de influenciadores não é suficiente.
            Temos acesso aos maiores bancos de dados de influenciadores do
            mercado. Você não precisa aprender a usá-los, deixe o trabalho
            pesado com a gente! Nascemos para facilitar seu crescimento.
            Encontramos o influenciador com o fit perfeito para sua marca: tipo
            de perfil (pessoal ou empresa), número de seguidores e temas
            abordados - tudo é levado em conta. Além disso, conte com nossa
            consultoria para fechar o negócio com melhor custo-benefício, com
            decisões pautadas em dados.
          </p>
        </div>
        <div className={styles.whatWeDoSecondContainerTwo}>
          <h2>
            Quanto <span>maior</span> o crescimento, <span>melhor</span>!
          </h2>
        </div>
      </div>
      <div className={styles.whatWeDoThirdContainerWrapper}>
        <div className={styles.whatWeDoThirdContainerOne}>
          <div className={styles.whatWeDoThirdContainerTitle}>
            <h2>
              Case de <span>sucesso</span>
            </h2>
          </div>
          <div className={styles.whatWeDoThirdContainerPurpleBox} />
        </div>
        <div className={styles.whatWeDoThirdContainerTwo}>
          <div className={styles.whatWeDoThirdContainerCaseText}>
            <p>
              Camila Silveira, conhecida como <strong>CamilotaXp</strong> atualmente tem 28 anos,
              é carioca e mora em São Paulo. Um ícone da comunidade Gamer,
              Camila é atriz, dançarina, apresentadora, streamer e embaixadora
              de diversas marcas, como Santander, Lenovo, Fusion e Logitech.
              Cheia de estilo, seus cabelos azul e roxo deixam sua marca pessoal
              por onde passa. Atualmente, a atriz busca sair da bolha gamer e
              contratou nossa consultoria estratégica e dedica seus esforços
              para se tornar também uma referência fashion para a geração Z.
            </p>
          </div>
          <Image alt="Influencers" className={styles.whatWeDoThirdContainerCaseImage} width={540} height={514} src="/influencers.png"/>
          <div className={styles.whatWeDoThirdContainerBlueBox}/>
        </div>
      </div>
    </section>
  );
}
