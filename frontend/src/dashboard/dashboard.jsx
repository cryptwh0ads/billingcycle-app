import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versao 0.1" />
        <Row>
          <Content>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$ 10"
              text="Total de Creditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 10"
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="R$ 0"
              text="Total Consolidado"
            />
          </Content>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
