'use client';
import { useSearchParams } from 'next/navigation';

const SubscriberEmail = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('subscriber');
  return <span className='font-bold'>{email}</span>;
};
export default SubscriberEmail;
