import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/general/envio.module.css'
import styles1 from '../../styles/preEd/PreEdSignup.module.css'
import supabase from '../../utils/supabase'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/Auth'
import { Radio } from '@mantine/core'

export default function Address({ nextStage, updateDbStage, createPurchase }) {
  const [addresses, setAddresses] = useState([])
  const [editing, setEditing] = useState(true);
  const [radioValue, setRadioValue] = useState(null)
  const user = useAuth();

  const{register, setError, clearErrors, handleSubmit, formState} = useForm({
    mode: 'onSubmit',
    reValidateMode: "onChange"
  });
  const{ errors } = formState

  const renderAddresses = () => {
    const styledAddress = (address) => {
      return (
        <div>
          <span>{address.street}, {address.apt}</span>
          <p>{address.city}, {address.state}</p>
          <p>{address.state}, {address.zip}</p>
        </div>
      )
    }
    return (
      <>
    <div className='w-full'>
      {addresses.length ? <div className={styles.cardContainer}>
          <Radio.Group
          orientation='vertical'
          value={radioValue} onChange={setRadioValue}
          >
            {addresses.map((address) => (
              <Radio key={address.uuid} classNames={{
                radioWrapper: styles.checkboxRoot,
                label: styles.checkboxLabel,
                radio: styles.checkboxInput
            }} value={address.uuid} label={styledAddress(address)} />
            ))} 
          </Radio.Group>
      </div> : <></>
      }
  
    </div>
    <button onClick={() => setEditing(!editing)} className={styles.button}>
          Nueva Direccion
        </button>
        <button onClick={submitAddress} className={styles.submitButton}>
        Siguiente
      </button>
    </>
    )
  }

  const submitAddress = () => {
    addresses.map(async (address) => {
      const { error } = await supabase
      .from('addresses')
      .update({ favorite: address.uuid === radioValue})
      .eq('uuid', address.uuid)
    })
    const favAddress = addresses.filter((address) => address.uuid === radioValue)
    createPurchase(favAddress)
    // updateDbStage()
    // nextStage('checkout', null)
    
  }

  const renderAddAddress = () => {

    return (
    <section className={styles1.formContainer} >

    <form onSubmit={handleSubmit(saveAddress)} className={styles1.form}>
      <div
      className={styles1.upperForm}>

        <div className={styles1.inputWrapper}>
          <input
            {...register('street', {
              required: 'Enter your street'
            })}
            type="text"
            placeholder='Street Address'
            className={`${styles1.formInput} ${errors.street && styles1.inputError}`}
          />
          {errors.street ? <span className={styles1.formError}>{errors.street .message}</span> : ''}
        </div>

        <div className={styles1.inputWrapper}>
          <input
            {...register('apt', {
              required: 'Enter your apt'
            })}
            type="text"
            placeholder='Apt/Suite'
            className={`${styles1.formInput} ${errors.apt && styles1.inputError}`}
          />
          {errors.apt ? <span className={styles1.formError}>{errors.apt.message}</span> : ''}
        </div>

        <div className={styles1.inputWrapper}>
          <input
            {...register('city', {
              required: 'Enter your city'
            })}
            type="text"
            placeholder='City'
            className={`${styles1.formInput} ${errors.city && styles1.inputError}`}
          />
          {errors.city ? <span className={styles1.formError}>{errors.city.message}</span> : ''}
        </div>

        <div className={styles1.inputWrapper}>
          <input
            {...register('state', {
              required: 'Enter your state'
            })}
            type="text"
            placeholder='State'
            className={`${styles1.formInput} ${errors.state && styles1.inputError}`}
          />
          {errors.state ? <span className={styles1.formError}>{errors.state.message}</span> : ''}
        </div>

        <div className={styles1.inputWrapper}>
        <input
          {...register('zip', {
            required: 'Enter your zipcode',
            minLength: {
              value: 2,
              message: 'zipcode must be at least 2 characters'
            }
          })}
          type="number"
          placeholder='Zip'
          onFocus={() => {}}
          className={`${styles1.formInput} ${errors.zip && styles1.inputError}`}
        />
        {errors.zip && <span className={styles1.formError}> {errors.zip.message} </span>}
        </div>

        <div className={styles1.inputWrapper}>
          <input
            {...register('country', {
              required: 'Enter your country'
            })}
            type="text"
            placeholder='Country'
            className={`${styles1.formInput} ${errors.country && styles1.inputError}`}
          />
          {errors.country ? <span className={styles1.formError}>{errors.country.message}</span> : ''}
        </div>
           
      </div>

      <button onClick={() => setEditing(!editing)} className={styles.button}>
        Usar otra direccion
      </button>

      <button type='submit' className={styles.submitButton}>
       Guardar
      </button>
    </form>

    </section>
    )
  }

  const saveAddress = async (formData) => {
    console.log('here')
    const {error} = await supabase
      .from('addresses')
      .insert({ id: user.user.id, street: formData.street, apt: formData.apt, city: formData.city, state: formData.state, zip: formData.zip, favorite: false })

    if (error) {
      console.log(error)
    } else {
      fetchAddresses()
      setEditing(!editing)
    }
  }

  const fetchAddresses = async () => {
    const { data: address, error } = await supabase
      .from('addresses')
      .select()
      .eq('id', user.user.id)
      console.log(address)
      setAddresses(address)
  }

  useEffect(() => {
    fetchAddresses()
  }, [user])

  console.log(addresses)

  return (
    <>
      <section className={styles.card}>
        {editing ?
          <>
            {renderAddresses()} 
          </>
        : 
          <>
            {renderAddAddress()}
          </> 
        }
      </section>
  

    </>
  )
}