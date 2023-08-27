import Blog from '../components/blog/blog';

const portfolios = [
  {
    num: '01',
    name: 'Project name',
    duration: '6 months',
    type: 'belt conveyor',
    location: 'Seoul',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pics: '/first-project.png',
    firstTags: '#hashtags',
    secondTags: '#hashtagsss',
  },
  {
    num: '02',
    name: 'Project name',
    duration: '6 months',
    type: 'belt conveyor',
    location: 'Seoul',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pics: '/second-project.png',
    firstTags: '#hashtags',
    secondTags: '#hashtagsss',
  },
  {
    num: '03',
    name: 'Project name',
    duration: '6 months',
    type: 'belt conveyor',
    location: 'Seoul',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pics: '/third-project.png',
    firstTags: '#hashtags',
    secondTags: '#hashtagsss',
  },
  {
    num: '04',
    name: 'Project name',
    duration: '6 months',
    type: 'belt conveyor',
    location: 'Seoul',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pics: '/fourth-project.png',
    firstTags: '#hashtags',
    secondTags: '#hashtagsss',
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="my-24">
        {portfolios.map((portfolio, i) => {
          return (
            <Blog
              key={i}
              name={portfolio.name}
              duration={portfolio.duration}
              type={portfolio.type}
              location={portfolio.location}
              desc={portfolio.desc}
              pics={portfolio.pics}
              firstTags={portfolio.firstTags}
              secondTags={portfolio.secondTags}
            />
          );
        })}
      </div>
    </>
  );
}
