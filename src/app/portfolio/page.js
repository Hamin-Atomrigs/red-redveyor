import Blog from '../components/blog/blog';
import { portfolios } from '../components/portfolios/portfolios';

export default function Portfolio() {
  return (
    <>
      <div className="my-11 max-w-xs md:max-w-3xl 2xl:max-w-7xl mx-auto">
        {portfolios.map((portfolio, i) => {
          return (
            <Blog
              key={i}
              name={portfolio.name}
              duration={portfolio.duration}
              type={portfolio.tags[0]}
              location={portfolio.location}
              desc={portfolio.desc}
              pics={portfolio.pics}
              tags={portfolio.tags}
            />
          );
        })}
      </div>
    </>
  );
}
