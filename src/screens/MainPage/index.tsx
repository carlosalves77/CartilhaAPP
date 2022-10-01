import * as S from "./styles";
import React, { useState } from "react";

import { ContentCard } from "../../components/ContentCard";
import { Highlight } from "../../components/Highlight";
import Logo from "../../assets/capa.png";
import { ScrollView } from "react-native";
import { TextCard } from "../../components/TextCard";

export function MainPage() {
  return (
    <S.Container>
      <S.Logo source={Logo} />
      <Highlight title="Quais são os sintomas?" subtitle="Veja abaixo" />
      <ScrollView style={{ width: "100%" }}>
        <ContentCard title="Transtorno Mentais" />

        <TextCard text="Você sabia que praticamente todas as pessoas que cometeram suicidio apresentavam pelo menos um transtorno psiquiátrico Pessoas com depressão, transtorno bipolar, transtornos relacionados ao uso de drogas lícitas ou ilícitas (álcool, macoinha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalizade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos transtornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicidio." />

        <ContentCard title="Historias pessoal:" />
        <TextCard text="Tentativa prévia é o principal fator de risco para o suícidio. Individuos que já tentaram o suicidio têm de cinto a seis vezes mais chances de tentar novamente" />

        <ContentCard title="ideação suicida:" />
        <TextCard text="Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida." />

        <ContentCard title="Fatores estressores crônicos e recentes:" />
        <TextCard text="Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que levem a prejuízo econômico e social" />

        <ContentCard title="Organizar detalhes e fazer despedidas:" />
        <TextCard text="É de extrema importância observar se existe algum comportamento que sugira uma preparação para o suicídio: mensagens de despedidas (bilhetes ou recados nas mídias sociais), cartaz, testamentos, doações de posses importantes e acúmulo de comprimidos são alguns exemplos." />

        <ContentCard title="Meios acessíveis para suicidar-se" />
        <TextCard text="Acesso a armas de fogo, locais elevados e medição em grande quantidade aumenta a chance de que um eventual tentativa de suicídio seja efetiva" />

        <ContentCard title="Impulsividade:" />
        <TextCard text="O suicídio, por mais planejado que tenha sido, muitas vezes parte de um ato motivado por eventos negativos. O impulso para cometer o suicídio é geralmente transitório, com duração de alguns minutos ou horas e poder está presente particularmente em jovens e adolescentes" />

        <ContentCard title="Eventos adversos na infância e na adolescência:" />
        <TextCard text="Ter sofrido maus tratos e abuso físico, sexual ou psicológico na infância, apresentar abuso ou dependência de substâncias lícitas ou ilícitas e falta de apoio social estão associados a maior risco de suicídio" />

        <ContentCard title="Motivos aparentes ou ocultos:" />
        <TextCard text="Algumas pessoas com pensamentos suicidas podem considerar a morte como um meio de sair do sentimento momentâneo de infelicidade. " />

        <ContentCard title="Presença de outras doenças:" />
        <TextCard text="Doenças crônica, incluindo neoplasias em fase terminal, são fatores de risco para suicídio. " />
      </ScrollView>
    </S.Container>
  );
}
