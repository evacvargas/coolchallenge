import { useRouter } from 'next/router';
import CardDetails from '@/components/CardDetail';
import 'tailwindcss/tailwind.css';
import Nav from '@/components/Nav';


const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
        <Nav />
        <CardDetails id={id} />
    </>
  );
};

export default Details;