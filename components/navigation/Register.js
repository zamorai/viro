import styles from '../../styles/navigation/Login.module.css'
import { useForm } from 'react-hook-form'
import {motion, AnimatePresence } from 'framer-motion'
import { Checkbox } from '@mantine/core';
import supabase from '../../utils/supabase';
import { useEffect, useState } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Register({ setLoginState, setProfileOpen }) {
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
      const { data, error } = await supabase
        .from('profiles')
        .insert({ email: formData.email, id: user.id })

      await supabase
      .from('ed')
      .insert({ stage: 0, id: user.id })

      setProfileOpen(false)
      setLoginState('userActive')
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
      
      <div className={styles.header}>
        <h2 className={styles.title}> Welcome To Viro </h2>
        <p className={styles.sub}> Fill in your details to create an account </p>
      </div>

      <AnimatePresence exitBeforeEnter>

      <section className={styles.formContainer} >

          <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
            <motion.div
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            key='login'
            transition={{type: 'spring', duration:0.6}}
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
                  onFocus={() => clearErrors('supabase')}
                  autoComplete="email"
                  placeholder='Email Address'
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
                <p className='text-2xl'>I agree to the <a className={styles.links}>Terms and Conditions</a>, <a className={styles.links}>Privacy Policy</a> and <a className={styles.links}>Telehealth Consent</a></p>
                </div>
                {errors.check && <p className={styles.checkError}>{errors.check.message}</p> }
                <p className='text-2xl'>Already have an account?<a onClick={() => setLoginState('returningUser')} className={styles.register}>Sign In</a></p>
              </div>

              
            </motion.div>

            <div className={styles.lowerForm}>
              <button onClick={console.log(errors)} type='submit' className={styles.submitButton}>
                Sign In
              </button>
            </div>
          </form>
      
      </section>
      </AnimatePresence>

    </div>
  )
}
