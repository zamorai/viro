import React, { useState } from 'react'
import styles from '../../styles/userProfile/Profile.module.css'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const{register, setError, clearErrors, handleSubmit, formState} = useForm({
    mode: 'onSubmit',
    reValidateMode: "onChange"
  });
  const[editing, setEditing] = useState(false)

  const submitHandler = () => {
    return 0;
  }

  const renderEditing = () => (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <input
          {...register('nombre', {
            required: 'Enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email'
            }
          })}
          type="text"
          autoComplete="off"
          placeholder='Nombre'
          onFocus={() => clearErrors('supabase')}
          className={`${styles.formInput}`}
        />

        <input
          {...register('apellido', {
            required: 'Enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email'
            }
          })}
          type="text"
          autoComplete="off"
          placeholder='Apellido'
          onFocus={() => clearErrors('supabase')}
          className={`${styles.formInput}`}
        />

        <input
          {...register('telefono', {
            required: 'Enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email'
            }
          })}
          type="text"
          autoComplete="off"
          placeholder='Celular'
          onFocus={() => clearErrors('supabase')}
          className={`${styles.formInput}`}
        />

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
          className={`${styles.formInput}`}
        />

        <input
          {...register('nacimiento', {
            required: 'Enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email'
            }
          })}
          type="text"
          autoComplete="off"
          placeholder='Fecha de nacimiento'
          onFocus={() => clearErrors('supabase')}
          className={`${styles.formInput}`}
        />

        <div className={styles.lowerForm}>
          <button onClick={() => console.log('clicked')} type='submit' className={styles.submitButton}>
              Guardar
          </button> 
          <button onClick={() => setEditing(false)} type='submit' className={styles.cancelButton}>
              Cancelar
          </button> 
        </div>
      </form>
    </div>
  )

  const renderStatic = () => (
    <div className={styles.staticWrapper}>
      <section className={styles.staticContainer}>
        <span className={styles.description}>Nombre</span>
        <p className={styles.info}>Iker Zamora</p>
      </section>
      <section className={styles.staticContainer}>
        <span className={styles.description}>Correo</span>
        <p className={styles.info}>ikerzamora@gmail.com</p>
      </section>
      <section className={styles.staticContainer}>
        <span className={styles.description}>Celular</span>
        <p className={styles.info}>6178809590</p>
      </section>
      <section className={styles.staticContainer}>
        <span className={styles.description}>Fecha de nacimiento</span>
        <p className={styles.info}>20-04-1998</p>
      </section>

      <button onClick={() => setEditing(true)} className={styles.editButton}>
        Editar
      </button>
    </div>
  )
  

  return (
    <div>
      {editing ? renderEditing() : renderStatic()}
    </div>
  )
}
