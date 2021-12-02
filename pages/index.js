import useSwr from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr('/api/users', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        API para visualizar os voos que chegam e que partem do Aeroporto
        Deputado Luis Eduardo Magalhães em Salvador - BA
      </h2>

      <h3> Rotas de Chegada</h3>

      <p>
        /voos/chegadas/company/{'Nome da Companhia Aérea'} // Para visualizar{' '}
      </p>
    </div>
  );
}
