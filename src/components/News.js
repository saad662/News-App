import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const News = ({ country, pageSize, Cname, category }) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4f2c64dfe6c945ecaaf9adde732302dc&page=${page}&pageSize=${pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    };

    fetchNews();
  }, [country, category, page, pageSize]);

  const handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4f2c64dfe6c945ecaaf9adde732302dc&page=${page - 1}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setPage(page - 1);
    setArticles(parsedData.articles);
  };

  const handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4f2c64dfe6c945ecaaf9adde732302dc&page=${page + 1}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setPage(page + 1);
    setArticles(parsedData.articles);
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center'>
        Top Headlines of {Cname} on {category}
      </h1>
      <div className='row'>
        {articles.map((e) => (
          <div key={e.url} className='col-md-4'>
            <NewsItem
              title={e.title ? e.title : ''}
              description={e.description ? e.description : ''}
              urlToImage={e.urlToImage}
              Newsurl={e.url}
              publishedAt={e.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className='container d-flex justify-content-between'>
        <button
          type='button'
          disabled={page <= 1}
          className='btn btn-success'
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type='button'
          className='btn btn-success'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  Cname: 'USA',
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  Cname: PropTypes.string,
  category: PropTypes.string,
};

export default News;
