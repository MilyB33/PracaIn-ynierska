<template>
  <div class="info-cards">
    <InfoCard
      variant="plant"
      icon="mdi-clock-outline"
      title="Idealne rośliny idealne dla zapracowanych"
      content="Sukulenty są wyjątkowo łatwe w pielęgnacji – potrzebują minimalnej ilości wody i świetnie radzą sobie w różnych warunkach. Idealne dla osób, które chcą cieszyć się zielenią bez codziennego podlewania."
    />
    <InfoCard
      variant="plant"
      icon="mdi-leaf"
      title="Niezwykła różnorodność"
      content="Od rozetowatych echeverii po kolczaste aloesy – sukulenty występują w setkach gatunków, które zaskakują unikalnym wyglądem. Dodadzą charakteru każdemu wnętrzu!"
    />
    <InfoCard
      variant="plant"
      icon="mdi-air-filter"
      title=" Naturalni mistrzowie oczyszczania powietrza"
      content="Sukulenty nie tylko pięknie wyglądają, ale również poprawiają jakość powietrza, wchłaniając szkodliwe substancje i uwalniając tlen. Idealny wybór do domu i biura."
    />
    <InfoCard
      variant="plant"
      icon="mdi-shield-check"
      title="Symbol siły i wytrwałości"
      content="Sukulenty to rośliny przystosowane do trudnych warunków, dzięki czemu symbolizują odporność i siłę. Są doskonałym prezentem, który niesie wyjątkowe przesłanie."
    />
  </div>
</template>

<style lang="scss" scoped>
.info-cards {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 880px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
