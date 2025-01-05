'use client';

import { useForm, FormActions } from '@/contexts/formContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Theme } from '@/components/Theme';
import { SelectOptions } from '@/components/SelectOption';
import * as C from './style';

export default function Step2() {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (!state.name) {
      router.push('/step1');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, [router, state.name, dispatch]);

  const handleNextStep = () => {
    if (state.level !== undefined) {
      router.push('/step3');
    } else {
      alert('Escolha uma opção.');
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

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

        <button onClick={() => router.push('/step1')} className="backButton">
          Voltar
        </button>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
