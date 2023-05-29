import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'phosphor-react';

import { ShoppingCartButton } from '../ShoppingCartButton';

import CoffeeLogo from '../../assets/coffee-logo.svg';

import { DeliveryInfoContainer, HeaderContainer, LocaleButton } from "./styles";
import { UserContext } from '../../contexts/UserContext';

export function Header() {
  const navigate = useNavigate();
  const { userLocale } = useContext(UserContext);

  function handleGoCartPage() {
    navigate("/check-order");
  }

  function handleGoInitialPage() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="" onClick={handleGoInitialPage} />

      <DeliveryInfoContainer>
        <LocaleButton>
          <MapPin size={22} weight="fill" />
          {userLocale.city && userLocale?.state && (
            `${userLocale?.city}, ${userLocale?.state}`
          )}
        </LocaleButton>

        <ShoppingCartButton
          iconColor="orange"
          bgColor="lightYellow"
          hasCounter
          onClick={handleGoCartPage}
        />
      </DeliveryInfoContainer>
    </HeaderContainer>
  )
}