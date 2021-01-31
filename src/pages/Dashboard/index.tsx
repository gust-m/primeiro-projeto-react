import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-image.svg';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="logo"/>
    <Title>Explore repositorios no Github</Title>;

    <Form>
      <input placeholder="Type the name of the repository"/>
      <button type="submit" >Search</button>
    </Form>

    <Repositories>
      <a href="">
        <img
          src="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH.jpg"
          alt="Branquitao"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy higly scalable ReactJS form</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="">
        <img
          src="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH.jpg"
          alt="Branquitao"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy higly scalable ReactJS form</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="">
        <img
          src="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH.jpg"
          alt="Branquitao"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy higly scalable ReactJS form</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    </>
  );
};

export default Dashboard;
