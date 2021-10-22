import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/talissonoliveira.png" alt="Talisson Oliveira" />
                        </div>
                        <span>Talisson Oliveira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Esse vai ser simplesmente fantástico! Bora aprender tudo em relação a montagem de APIs GraphQL. Sem contar com as palestras e painéis.
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/talissonoliveira.png" alt="Talisson Oliveira" />
                        </div>
                        <span>Talisson Oliveira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Sem dúvida as palestras vão ser úteis para a minha carreira e para a de muitos 😍 #gorocket
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/talissonoliveira.png" alt="Talisson Oliveira" />
                        </div>
                        <span>Talisson Oliveira</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}