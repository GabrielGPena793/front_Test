import React from "react";
import "./styles.css";

export default function DescriptionFooter() {
  return (
    <div className="descrip_footer_all">
      <h3 className="descrip_footer_header_title">O que você precisa saber:</h3>
      <div className="descrip_footer_box">
        <div>
          <h4 className="descrip_footer_box_Tit">Regras da locadora</h4>
          <h6 className="descrip_footer_box_tex">Check-out: 10:00</h6>
          <h6 className="descrip_footer_box_tex">Não é permitido festas</h6>
          <h6 className="descrip_footer_box_tex">Não fumar</h6>
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
