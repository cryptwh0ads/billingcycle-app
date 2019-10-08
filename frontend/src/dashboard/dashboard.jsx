import React, { Component } from "react";
import { connect } from 'react-redux'

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {

    const { credit, debit} = this.props.summary

    return (
      <div>
        <ContentHeader title="Dashboard" small="Versao 0.1" />
        <Row>
          <Content>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Creditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debit}`}
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debit}`}
              text="Total Consolidado"
            />
          </Content>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})

export default connect(mapStateToProps)(Dashboard)
