import styles from '../../../styles/preEd/PreEdLogin.module.css'
import { useForm } from 'react-hook-form'
import supabase from '../../../utils/supabase';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';


export default function PreEdLogin({ nextSubStage }) {
  const{register, setError, clearErrors, handleSubmit, formState} = useForm({
    mode: 'onSubmit',
    reValidateMode: "onChange"
  });
  const{ errors } = formState
  const[supabaseErrors, setSupabaseErrors] = useState(null)

  const submitHandler = async (data) => {
    const { user, session, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password
    })

    if (user) {
      const { data: profile, error } = await supabase
      .from('profiles')
      .select('birth')
      .eq('id', user.id)
      .single()

      if (profile?.birth) {
        nextSubStage('finalizar')
      } else {
        nextSubStage('extra')
      }
    }

    if (error) {
      setSupabaseErrors(error)
    }
  }

  useEffect(() => {
    if(supabaseErrors) {
      console.log(supabaseErrors)
      switch(supabaseErrors.message) {
        case 'Invalid login credentials':
          setError('supabase', {
            type: 'manual',
            message: 'Incorrect username or password'
          })
          break;
      }
    }
  }, [supabaseErrors])

  return (
    <div className={styles.container}>
      <span className={styles.monthly}>Hola! Que bueno verte de nuevo</span>
      <h1 className={styles.title}>Entra a tu cuenta</h1>

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
                  className={`${styles.formInput} ${(errors.email || errors.supabase) && styles.inputError}`}
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
                onFocus={() => clearErrors('supabase')}
                className={`${styles.formInput} ${(errors.password || errors.supabase) && styles.inputError}`}
              />
              {errors.password ? <span className={styles.formError}>{errors.password.message}</span> : ''} {errors.supabase ? <span className={styles.formError}>{errors.supabase.message}</span> : ''}
              </div>

              <div className='flex flex-col mt-4 items-center gap-6 px-16'>
                <p className='text-2xl'>Need an account?<a onClick={() => nextSubStage('registrar')} className={styles.register}>Register</a></p>
                <a className={styles.forgotPassword}>
                    Forgot your password?
                </a>
              </div>

              
            </div>

            <div className={styles.lowerForm}>
              <button onClick={() => console.log('clicked')} type='submit' className={styles.submitButton}>
                Sign In
              </button>
            </div>
          </form>
      
      </section>

    </div>
    </div>
  )
}


