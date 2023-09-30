import SubscriberEmail from '@/components/SubscriberEmail';
import Image from 'next/image';
import iconList from '/public/images/icon-list.svg';
import Link from 'next/link';

const Success = () => {
  return (
    <main className='flex w-full justify-center  h-screen gap-5  items-center mx-auto'>
      <section className='bg-white flex flex-col h-full pt-28 justify-between md:rounded-lg md:w-80 md:h-auto md:p-4 md:m-4 p-6'>
        <div>
          <Image src={iconList} alt='checkmark' className='h-14 w-auto mb-6' />
          <h1 className='text-5xl md:text-4xl my-4 font-bold'>
            Thanks For Subscribing!
          </h1>
          <p className='md:text-sm'>
            A confirmation email has been sent to <SubscriberEmail />. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <Link
          href='/'
          className='bg-darkSlateGrey text-center rounded-lg text-white my-4 py-4 hover:bg-gradient-to-r from-pink-400 to-pink-600'
        >
          Dismiss message
        </Link>
      </section>
    </main>
  );
};
export default Success;
