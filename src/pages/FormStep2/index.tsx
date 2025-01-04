import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '@/contexts/formContext'
import { Theme } from '@/components/Theme';
import * as C from './style';
import { useEffect } from 'react';
import { SelectOptions } from '@/components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();


  useEffect(() => {
    if (!state.name) {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, [navigate, state.name, dispatch]);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      alert('Preencha os dados.')
    }
  }
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });

  }


  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOptions
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOptions
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />


        <Link to={'/'} className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>

    </Theme>
  )
}