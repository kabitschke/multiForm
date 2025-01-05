'use client';

import { useForm, FormActions } from '@/contexts/formContext';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';
import { Theme } from '@/components/Theme';
import * as C from './style';

export default function Step1() {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name !== '') {
      router.push('/step2');
    } else {
      alert('Preencha os dados.');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
