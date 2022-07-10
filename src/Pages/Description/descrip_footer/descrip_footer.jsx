import React from "react";
import "./descrip_footer.css";

export default function Descrip_footer() {
  return (
    <div className="descrip_footer_all">
      <h3 className="descrip_footer_header_title">Política de locação</h3>
      <div className="descrip_footer_box">
        <div>
          <h4 className="descrip_footer_box_Tit">Regras da locadora</h4>
          <h6 className="descrip_footer_box_tex">Para retirar o veículo, você precisa ter no mínimo 18 anos de idade, sem tempo mínimo de habilitação e ter cartão crédito em seu nome aprovado pela Autolux. Com cartão de crédito, a aprovação poderá ser imediata.
            <br />
            A diária do carro é de 24 horas, com até 1 hora de tolerância para devolução. A partir da 25ª hora, incidirá cobrança de hora extra (1/5 do valor da diária para cada hora extra), sendo cobrada, inclusive, a hora de tolerância.</h6>
        </div>
        <div>
          <h4 className="descrip_footer_box_Tit">Saúde e segurança</h4>
          <h6 className="descrip_footer_box_tex">
            Diretrizes de distanciamento social e outras regulamentações
            relacionadas ao coronavírus se aplicam
          </h6>
          <h6 className="descrip_footer_box_tex">Detector de fumaça</h6>
          <h6 className="descrip_footer_box_tex">Depósito de segurança</h6>
        </div>
        <div>
          <h4 className="descrip_footer_box_Tit">Política de cancelamento</h4>
          <h6 className="descrip_footer_box_tex">
            Adicione as datas da viagem para obter detalhes de cancelamento para
            esta locadora.
          </h6>
        </div>
      </div>
    </div>
  );
}
