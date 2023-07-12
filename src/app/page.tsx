'use client';
import styles from '@/app/styles.module.scss'
import Link from 'next/link'
import LogoPreta from '@/assets/img/LOGO COMPLETA PRETA.png'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { loginSchema, loginSchemaType } from '@/schema/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '@/context/Auth.Context';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'

export default function Login() {
  const { loginFunction } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_figure}>
          <figure className={styles.content_figure__fig}>
            <img src={LogoPreta.src} alt="Logo massojonas" className={styles.content_figure__img} />
          </figure>
        </div>
        <div className={styles.content_forms}>
          <form className={styles.forms} onSubmit={handleSubmit(loginFunction)}>
            <h2 className={styles.forms__title}>Login</h2>
            <div className={styles.forms__content_input}>
              <label className={styles.forms__label}>Email</label>
              <input type="email" placeholder='Digite seu email aqui' className={styles.forms__input} {...register('email')} />
              {errors.email?.message && <p className='text-[14px] text-red-500'>{errors.email?.message}</p>}
            </div>
            <div className={styles.forms__content_input}>
              <label className={styles.forms__label}>Senha</label>
              <input type="password" placeholder='Digite sua senha aqui' className={styles.forms__input} {...register('password')} />
              {errors.password?.message && <p className='text-[14px] text-red-500'>{errors.password?.message}</p>}
            </div>
            <div className={styles.forms__content_buttons}>
              <button className={styles.forms__button}>Entrar</button>
              <Link href={'/register'} className={styles.forms__link}>Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  )
}
