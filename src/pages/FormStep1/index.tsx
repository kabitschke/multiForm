import { Theme } from '@/components/Theme';
import * as C from './style';

export const FormStep1 = () => {

  const handleNextStep = () => {

  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="">Seu nome Completo
          <input type="text"
            autoFocus
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>

    </Theme>
  )
}