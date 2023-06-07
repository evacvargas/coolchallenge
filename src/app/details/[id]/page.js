import CardDetails from '@/components/CardDetail';

const details = ({params}) => {
  const { id } = params;

  return (
    <>
      <CardDetails id={parseInt(id)}/>
    </>
  );
};

export default details;