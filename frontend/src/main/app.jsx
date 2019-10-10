import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

import Messages from '../common/messages/messages'

export default props => (
  <div className='wrapper'>
    <Messages />
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      {props.children}
    </div>
    <Footer />
  </div>
)