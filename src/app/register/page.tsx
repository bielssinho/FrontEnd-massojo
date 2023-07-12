'use client';

import { AuthContext } from '@/context/Auth.Context'
import { registerSchema, registerSchemaType } from '@/schema/user.schema'
import styles from '@/scss/components-scss/register.module.scss'
import Link from 'next/link'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Register() {
    const { registerFunction } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm<registerSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data: registerSchemaType) => {
        console.log(data)
        registerFunction(data);
    };

    return (
        <main className={styles.container}>
            <div className={styles.forms__content}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__header}>
                        <h2 className={styles.form__title}>Cadastro</h2>
                        <Link href={'/'} className={styles.form__link}>Página de login</Link>
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Name</label>
                        <input type="text" placeholder='Digite seu nome aqui' className={styles.form__input} {...register('name')} />
                        {errors.name?.message && <p className='text-[14px] text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Email</label>
                        <input type="email" placeholder='Digite seu email aqui' className={styles.form__input} {...register('email')} />
                        {errors.email?.message && <p className='text-[14px] text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Senha</label>
                        <input type="password" placeholder='Digite sua senha aqui' className={styles.form__input} {...register('password')} />
                        {errors.password?.message && <p className='text-[14px] text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Data de nascimento</label>
                        <input type="text" placeholder='Digite sua data aqui' className={styles.form__input} {...register('birthdate')} />
                        {errors.birthdate?.message && <p className='text-[14px] text-red-500'>{errors.birthdate?.message}</p>}
                    </div>
                    <div className={styles.form__content_input}>
                        <label className={styles.form__label}>Telefone</label>
                        <input type="text" placeholder='Digite seu telefone celular aqui' className={styles.form__input} {...register('phone')} />
                        {errors.phone?.message && <p className='text-[14px] text-red-500'>{errors.phone?.message}</p>}
                    </div>

                    <button className={styles.form__button}>Cadastrar-se</button>
                </form>
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
