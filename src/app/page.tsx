import backgroundImg from '@/assets/img/PERFIL.png'
import styles from '@/app/styles.module.scss'
import Link from 'next/link'
import LogoPreta from '@/assets/img/LOGO COMPLETA PRETA.png'

export default function Login() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_figure}>
          <figure className={styles.content_figure__fig}>
            <img src={LogoPreta.src} alt="Logo massojonas" className={styles.content_figure__img} />
          </figure>
        </div>
        <div className={styles.content_forms}>
          <form className={styles.forms}>
            <h2 className={styles.forms__title}>Login</h2>
            <div className={styles.forms__content_input}>
              <label className={styles.forms__label}>Email</label>
              <input type="email" placeholder='Digite seu email aqui' className={styles.forms__input} />
            </div>
            <div className={styles.forms__content_input}>
              <label className={styles.forms__label}>Senha</label>
              <input type="password" placeholder='Digite sua senha aqui' className={styles.forms__input} />
            </div>
            <div className={styles.forms__content_buttons}>
              <button className={styles.forms__button}>Entrar</button>
              <Link href={'/register'} className={styles.forms__link}>Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
