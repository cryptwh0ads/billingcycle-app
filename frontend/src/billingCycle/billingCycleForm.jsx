import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props
    // console.log(handleSubmit)
    return (
      <div>
        <form role='form' onSubmit={handleSubmit}>
          <div className='box-body'>
            <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
            <Field name='month' component={LabelAndInput} label='Mes' cols='12 4' placeholder='Informe o mes' />
            <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' />
          </div>
          <div className='box-footer'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)