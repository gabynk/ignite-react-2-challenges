import { useEffect, useState } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";

import api from "../../services/api";

import { CoffeeCards, HomeContainer, HomeContent } from "./styles";

interface CoffeeData {
  id: string;
  image: string;
  types: string[];
  name: string;
  description: string;
  value: number;
  quantity: number;
}

export function Home() {
  const [coffeeList, setCoffeeList] = useState<CoffeeData[]>([]);

  useEffect(() => {
    async function getCoffeeList() {
      const response = await api.get('/coffees');

      setCoffeeList(response.data);
    }

    getCoffeeList();
  }, [])

  return (
    <HomeContainer>
      <Intro />

      <HomeContent>
        <span>Nossos cafés</span>

        <CoffeeCards>
          {!!coffeeList.length && coffeeList.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeCards>
      </HomeContent>
    </HomeContainer>
  )
}