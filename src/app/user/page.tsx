'use client';

import Link from 'next/link';
import FormField from '../components/FormField/FormField';
import Input from '../components/Input/Input';
import { useState } from 'react';
import Label from '../components/Label/Label';
import ErrorHint from '../components/ErrorHint/ErrorHint';

type Errors = {
  name?: string;
  surname?: string;
  address?: string;
};

type Message = 'success' | 'error';

export default function User() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState<Message>();

  const setErrorsMessage = (id: string, message: string) =>
    setErrors((prev) => ({ ...prev, [id]: message }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    setErrorsMessage('name', !name ? 'Campo Nome é obrigatório!' : '');
    setErrorsMessage(
      'surname',
      !surname ? 'Campo Sobrenome é obrigatório!' : ''
    );
    setErrorsMessage(
      'address',
      !address ? 'Campo Endereço é obrigatório!' : ''
    );

    if (name && surname && address) {
      setTimeout(() => {
        setMessage('Dados enviados com sucesso!');
        setTypeMessage('success');
      }, 600);
    } else {
      setMessage('Verifique os campos obrigatórios!');
      setTypeMessage('error');
    }
  };

  return (
    <div className="w-full flex flex-col  items-center">
      <form
        className="flex flex-col gap-2 w-1/3 p-4 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-black font-bold text-3xl">Cadastro de usuários</h1>
        <FormField>
          <Label text="Nome" />
          <Input value={name} onChange={setName} hasError={!!errors?.name} />
          <ErrorHint text={errors?.name} />
        </FormField>
        <FormField>
          <Label text="Sobrenome" />
          <Input
            value={surname}
            onChange={setSurname}
            hasError={!!errors?.surname}
          />
          <ErrorHint text={errors?.surname} />
        </FormField>
        <FormField>
          <Label text="Endereço" />
          <Input
            value={address}
            onChange={setAddress}
            hasError={!!errors?.address}
          />
          <ErrorHint text={errors?.address} />
        </FormField>

        <div className="flex justify-between items-center">
          <Link
            className="border border-pink-600 font-black items-center justify-center p-4 rounded-2xl text-pink-600 shadow-2xl hover:bg-pink-900 hover:text-white"
            href="/"
          >
            Voltar
          </Link>
          <button
            type="submit"
            className="bg-pink-600 font-black items-center justify-center p-4 rounded-2xl text-white shadow-2xl hover:bg-pink-500"
          >
            Salvar
          </button>
        </div>
      </form>
      {message && (
        <div
          className={`p-4 my-4 w-1/3 font-bold uppercase text-white rounded-lg ${
            typeMessage === 'error' ? 'bg-red-600' : 'bg-green-600'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
