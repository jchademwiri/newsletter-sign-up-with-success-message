import SubscribeForm from '@/components/SubscribeForm';
import mobileImage from '/public/images/illustration-sign-up-mobile.svg';
import deskImage from '/public/images/illustration-sign-up-desktop.svg';
import iconList from '/public/images/icon-list.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex w-full justify-center h-screen gap-5  items-center mx-auto'>
      <div className='bg-white rounded-3xl max-w-4xl gap-2 w-[90%] mx-auto md:p-2 grid md:grid-cols-2'>
        <div className='md:hidden w-full '>
          <Image
            src={mobileImage}
            alt='mobile image'
            className='object-cover w-full'
          />
        </div>
        <div className='grid content-center p-10'>
          <div className=''>
            <h1 className='text-4xl md:text-5xl font-bold'> Stay updated!</h1>
            <p className='py-4'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul>
              <li className='flex gap-3 py-1'>
                <Image src={iconList} alt='list icon' className='' />
                Product discovery and building what matters
              </li>
              <li className='flex gap-3 py-1'>
                <Image src={iconList} alt='list icon' className='' />
                Measuring to ensure updates are a success
              </li>
              <li className='flex gap-3 py-1'>
                <Image src={iconList} alt='list icon' className='' />
                And much more!
              </li>
            </ul>
          </div>
          <SubscribeForm />
        </div>
        <div className='hidden md:block'>
          <Image
            src={deskImage}
            alt='desk image'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </main>
  );
}
