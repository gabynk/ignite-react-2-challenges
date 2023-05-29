import { useContext } from 'react';
import { Coffee } from 'phosphor-react';

import { Icon } from '../../components/Icon';
import { UserContext } from '../../contexts/UserContext';

import SendingOrder from '../../assets/sending.png';
import { InfoItemDescription, OrderInfo, OrderInfoContent, OrderSuccessContainer } from "./styles";

const paymentType = {
  CREDIT: 'Cartão de crédito',
  DEBID: 'Cartão de débito',
  CASH: 'Dinheiro'
}

export function OrderSuccess() {
  const { user } = useContext(UserContext);

  return (
    <OrderSuccessContainer>
      <OrderInfoContent>
        <h1>Uhu! Pedido confirmado</h1>
        Agora é só aguardar que logo o café chegará até você

        <OrderInfo>
          <div>
            <Icon bgColor="pink">
              <Coffee weight="fill" />
            </Icon>
            <InfoItemDescription>
              Entrega em <span>{user.street}, {user.houseNumber}</span> <br/>
              {user.neighborhood} - {user.city}, {user.state}
            </InfoItemDescription>
          </div>

          <div>
            <Icon bgColor="yellow">
              <Coffee weight="fill" />
            </Icon>
            <InfoItemDescription>
              Previsão de entrega <br/>
              <span>20 min - 30 min</span>
            </InfoItemDescription>
          </div>

          <div>
            <Icon bgColor="orange">
              <Coffee weight="fill" />
            </Icon>
            <InfoItemDescription>
              Pagamento na entrega <br/>
              <span>{paymentType[user.paymentType]}</span>
            </InfoItemDescription>
          </div>
        </OrderInfo>
      </OrderInfoContent>

      <img src={SendingOrder} />
    </OrderSuccessContainer>
  )
}