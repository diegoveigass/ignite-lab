import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

import codeMockup from '../../src/assets/code-mockup.png'

interface Fields {
  name: string
  email: string
}

export function Subscribe() {
  const navigate = useNavigate()
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>()

  const handleSubscribe: SubmitHandler<Fields> = async data => {
    const { name, email } = data
    await createSubscriber({
      variables: {
        name,
        email,
      },
    })
    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubmit(handleSubscribe)}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              {...register('name')}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">E-mail é obrigatório</span>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} alt="" className="mt-10" />
    </div>
  )
}
