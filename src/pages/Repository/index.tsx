import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo-image.svg';

import { Header, RepositoryData, Issues } from './styles';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [currentRepository, setCurrentRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        await api.get<Repository>(`repos/${params.repository}`),
        await api.get<Issue[]>(`repos/${params.repository}/issues`),
      ]);

      setCurrentRepository(repository.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo"/>
        <Link to='/'>
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      {currentRepository && (
        <RepositoryData>
          <main>
            <img src={currentRepository.owner.avatar_url} alt={currentRepository.owner.login}/>

            <div>
              <strong>{currentRepository.full_name}</strong>
              <p>{currentRepository.description}</p>
            </div>
          </main>

          <ul>
            <li>
              <strong>{currentRepository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{currentRepository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{currentRepository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
      </RepositoryData>
      )}

      <Issues>
        {issues.map(issue => (
          <a
            key={issue.id}
            href={issue.html_url}
          >

            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
