import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import List from './components/List';
import Card from './components/Card';
import { all_countris } from './components/config';
import Pagination from './components/Pagination';

const perPage = 16;

function App() {
  const [countris, setCountris] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(all_countris).then(({ data }) => setCountris(data));
  }, []);

  const totalPages = Math.ceil(countris.length / perPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <Main>
        <List>
          {countris
            .slice((currentPage - 1) * perPage, currentPage * perPage)
            .map((coun) => {
              const countryInfo = {
                img: coun.flags.png,
                name: coun.name.common,
                info: [
                  {
                    title: 'Population',
                    description: coun.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: coun.region,
                  },
                  {
                    title: 'Capital',
                    description: coun.capital,
                  },
                ],
              };
              return <Card key={coun.capital} {...countryInfo} />;
            })}
        </List>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Main>
    </div>
  );
}

export default App;
