import { JobCards } from "./JobCards";
import { Main } from "./Main";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Main />
      <JobCards />
    </Container>
  );
}
