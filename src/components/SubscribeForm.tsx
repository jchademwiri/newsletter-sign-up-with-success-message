'use client';

import { TSubscribe, subscribeSchema } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

const SubscribeForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSubscribe>({
    resolver: zodResolver(subscribeSchema),
  });

  async function onSubmit({ email }: TSubscribe) {
    router.push(`/success?subscriber=${email}`);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='py-4'>
      <div className='grid gap-2'>
        <div className='flex justify-between'>
          <label htmlFor='email'>Email address</label>
          {errors.email && (
            <p className='text-red-600 italic'>{`${errors.email.message}`}</p>
          )}
        </div>
        <input
          {...register('email')}
          type='email'
          placeholder='email@company.com'
          className={`${
            errors.email
              ? 'border-2 border-red-500 text-red-500'
              : 'py-2 px-4 rounded-sm'
          } `}
        />
      </div>

      <button
        disabled={isSubmitting}
        type='submit'
        className='bg-darkSlateGrey text-white p-4 my-2 cursor-pointer rounded-md w-full hover:bg-gradient-to-r from-pink-400 to-pink-600'
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default SubscribeForm;
