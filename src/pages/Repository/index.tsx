import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo-image.svg';

import { Header, RepositoryData, Issues } from './styles';

// import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  // useEffect(() => {
  //   api.get(`repos/${params.repository}`);
  // }, []);

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo"/>
        <Link to='/'>
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>
      <RepositoryData>
        <main>
          <img src="https://i.pinimg.com/564x/4c/01/5a/4c015a650d1ed9da7300690a6b0ff3e7.jpg" alt=""/>

          <div>
            <strong>Nome do repositorio</strong>
            <p>Descricao</p>
          </div>
        </main>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryData>

      <Issues>
        <Link
          key='repository.full_name'
          to={`/repository/repository.full_name`}
        >

        <div>
          <strong>repository.full_name</strong>
          <p>repository.description</p>
        </div>

        <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
