import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import CoffeeCup from '../../../../assets/coffee-cup.png';

import { DashboardContainer, DashboardContent, Descriptions, Option, Options, Subtitle, Title } from "./styles";
import { Icon } from '../../../../components/Icon';

export function Intro() {
  return (
    <DashboardContainer>
      <DashboardContent>
        <Descriptions>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Subtitle>

          <Options>
            <Option>
              <Icon bgColor="orange">
                <ShoppingCart weight="fill" />
              </Icon>
              Compra simples e segura
            </Option>
            <Option>
              <Icon bgColor="gray">
                <Package weight="fill" />
              </Icon>
              Embalagem mantém o café intacto
            </Option>
            <Option>
              <Icon bgColor="yellow">
                <Timer weight="fill" />
              </Icon>
              Entrega rápida e rastreada
            </Option>
            <Option>
              <Icon bgColor="pink">
                <Coffee weight="fill" />
              </Icon>
              O café chega fresquinho até você
            </Option>
          </Options>
        </Descriptions>

        <img src={CoffeeCup} />
      </DashboardContent>
    </DashboardContainer>
  )
}