import styles from '@/scss/components-scss/register.module.scss'
import Link from 'next/link'

export default function Register() {
    return (
        <main className={styles.container}>
            <div className={styles.forms__content}>
                <form className={styles.form}>
                    <div className={styles.form__header}>
                        <h2 className={styles.form__title}>Cadastro</h2>
                        <Link href={'/'} className={styles.form__link}>Página de login</Link>
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Name</label>
                        <input type="text" placeholder='Digite seu nome aqui' className={styles.form__input} />
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Email</label>
                        <input type="email" placeholder='Digite seu email aqui' className={styles.form__input} />
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Senha</label>
                        <input type="password" placeholder='Digite sua senha aqui' className={styles.form__input} />
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Data de nascimento</label>
                        <input type="text" placeholder='Digite sua data aqui aqui' className={styles.form__input} />
                    </div>

                    <button className={styles.form__button}>Cadastrar-se</button>
                </form>
            </div>
        </main>
    )
}
