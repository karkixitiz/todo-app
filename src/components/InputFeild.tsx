import React from 'react'
import './styles.css'

const InputFeild = () => {
  return (
	<div>
	  <form className='input'>
		  <input type="input" placeholder='Enter a task' className='input__box' />
		  <button className='input_submit' type='submit'>Go</button>
	</form>
	</div>
  )
}

export default InputFeild
