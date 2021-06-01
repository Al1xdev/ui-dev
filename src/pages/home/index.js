import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { getCards } from '../../api';

import house1 from '../../assets/cards/house1.jpg';
import arrow from '../../assets/icons/arrow-right.svg';

const Home = () => {
  const [data, setdata] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getCards().then((res) => {
      setIsLoaded(true);
      setdata(res);
    });
  }, []);

  const handelSearch = (e) => setSearchValue(e.target.value);

  return (
    <main>
      <h1 className="title">Our Latest Developments</h1>
      <div className="search-block search-block__block">
        <label className="search-block__lable">Filter</label>
        <input
          className="search-block__input"
          type="text"
          value={searchValue}
          onChange={handelSearch}
        />
      </div>
      <section className="cards cards__top">
        {isLoaded ? (
          data
            .filter((val) => {
              if (searchValue === '' || searchValue.length < 3) {
                return val;
              } else if (val.title.toLowerCase().includes(searchValue.toLowerCase())) return val;
            })
            .map((item) => {
              return (
                <div key={item.id} className="cards__item">
                  <NavLink to={`/details/${item.id}`}>
                    <div className="cards__img">
                      <img src={house1} alt="house" />
                      <div
                        className={classnames(
                          'cards__type',
                          item.type === 'IndependentLiving' ? 'cards__isblue' : 'cards__isorange',
                        )}
                      >
                        {item.type}
                      </div>
                    </div>
                    <div className="cards__wrapper">
                      <div className="cards__title">{item.title}</div>
                      <div className="cards__address">{item.address}</div>
                      <div className="cards__descr">
                        New Properties for Sale from £
                        <span className="cards__prise">{item.price}</span>
                      </div>
                      <div className="cards__text">Shared Ownership Available</div>
                    </div>
                  </NavLink>
                </div>
              );
            })
        ) : (
          <p>Loading data!!!</p>
        )}
        {isLoaded && (
          <div className="cards__btn-container">
            <button className="cards__button">
              See more <img src={arrow} alt="arrow" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
