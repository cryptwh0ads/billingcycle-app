import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import CreditList from './creditList'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits } = this.props
    // console.log(handleSubmit)
    return (
      <div>
        <form role='form' onSubmit={handleSubmit}>
          <div className='box-body'>
            <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly} />
            <Field name='month' component={LabelAndInput} label='Mes' cols='12 4' placeholder='Informe o mes' readOnly={readOnly} />
            <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={readOnly} />
            <CreditList cols='12 6' list={credits} readOnly={readOnly} />
          </div>
          <div className='box-footer'>
            <button type='submit' className={`btn btn-${this.props.btnClass}`}>{this.props.btnLabel}</button>
            <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits')
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)