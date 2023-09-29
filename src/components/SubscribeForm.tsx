'use client';

const SubscribeForm = () => {
  return (
    <form className='py-4'>
      <div className='grid gap-2'>
        <div className='flex justify-between'>
          <label htmlFor='subscribe'>Email address</label>
          <p className='text-red-600 italic'>error state!</p>
        </div>
        <input
          type='text'
          name='subscribe'
          id='subscribe'
          className='p-2 rounded-sm border'
          placeholder='email@company.com'
        />
      </div>
      <input
        type='button'
        value='Subscribe to monthly newsletter'
        className='bg-gray-950 text-white p-4 my-2 cursor-pointer rounded-md w-full'
      />
    </form>
  );
};

export default SubscribeForm;
