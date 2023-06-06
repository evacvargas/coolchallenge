import { useRouter } from 'next/router';
import CardDetails from '@/components/CardDetail';
import Nav from '@/components/Nav';


const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(typeof id);

  return (
    <>
      <Nav />
      <CardDetails id={parseInt(id)}/>
    </>
  );
};

export default Details;