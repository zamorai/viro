import styles from '../../../styles/preEd/PreEdSignup.module.css'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@mantine/core';
import supabase from '../../../utils/supabase';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';


export default function PreEdRegister({ nextSubStage }) {
  const router = useRouter()
  const{register, setError, clearErrors, handleSubmit, formState} = useForm({
    mode: 'onSubmit',
    reValidateMode: "onChange"
  });
  const{ errors } = formState
  const[checked, setChecked] = useState(false)
  const[supabaseErrors, setSupabaseErrors] = useState(null)

  const submitHandler = async (formData) => {
    const {user, session, error} = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    })

    if (user) {
      console.log(user)
      await supabase
        .from('profiles')
        .insert([{ email: formData.email, id: user.id }])
      await supabase
        .from(router.query.tratamiento)
        .insert([{ stage: 0, id: user.id }])
      console.log('ttttest')
      nextSubStage('extra')
    }

    if (error) {
      setSupabaseErrors(error)
    }
  }

  useEffect(() => {
    if(supabaseErrors) {
      console.log(supabaseErrors)
      switch(supabaseErrors.message) {
        case 'User already registered':
          setError('supabase', {
            type: 'manual',
            message: 'Email is already registered'
          })
          break;
      }
    }
  }, [supabaseErrors])

  return (
    <div className={styles.container}>
      <span className={styles.monthly}>Aplicamos tu consulta gratis!</span>
      <h1 className={styles.title}>Registrate para abrir una cuenta con nuestros doctores!</h1>
      <span className={styles.description}>A continuacion, vamos a hacerte algunas preguntas sobre tu salud, historial medico y sintomas
<br/><br/>
Crea una cuenta para ver opciones de tratamientos</span>

      <div className={styles.altContainer}>

      <section className={styles.formContainer} >

          <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
            <div
            className={styles.upperForm}>

              <div className={styles.inputWrapper}>
                <input
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email'
                    }
                  })}
                  type="text"
                  autoComplete="email"
                  placeholder='Email Address'
                  onFocus={() => clearErrors('supabase')}
                  className={`${styles.formInput} ${errors.email && styles.inputError}`}
                />
                {errors.email ? <span className={styles.formError}>{errors.email.message}</span> : ''} {errors.supabase ? <span className={styles.formError}>{errors.supabase.message}</span> : ''}
              </div>
              
              <div className={styles.inputWrapper}>
              <input
                {...register('password', {
                  required: 'Enter your password',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
                type="password"
                autoComplete="current-password"
                placeholder='Create Password'
                onFocus={() => {}}
                className={`${styles.formInput} ${errors.password && styles.inputError}`}
              />
              {errors.password && <span className={styles.formError}> {errors.password.message} </span>}
              </div>

              <div className='flex flex-col mt-4 items-center gap-6 px-16'>
                <div className='flex gap-4'>
                <Checkbox
                  {...register('check', {
                    required: 'You must agree to the terms and privacy policy to continue'
                  })}
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  color={'gray'}
                />
                <p className='text-2xl'>Estoy de acuerdo con los <a className={styles.links}>Terminos y Condiciones</a>, <a className={styles.links}>Politica de Privacidad</a> y <a className={styles.links}>Consentimiento de Telemedicina</a></p>
                </div>
                {errors.check && <p className={styles.checkError}>{errors.check.message}</p> }
                <p className='text-2xl'>Ya tienes una cuenta?<a onClick={() => nextSubStage('iniciar')} className={styles.register}>Iniciar sesion</a></p>
              </div>

              
            </div>

            <div className={styles.lowerForm}>
              <button onClick={console.log(errors)} type='submit' className={styles.submitButton}>
                Sign In
              </button>
            </div>
          </form>
      
      </section>

    </div>
    </div>
  )
}


