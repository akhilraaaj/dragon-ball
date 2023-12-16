/* eslint-disable react/prop-types */
import DragonBallImg from '../assets/dragonimg.png';
import SearchImg from '../assets/searchImg.svg';
import GitHubImg from '../assets/github-mark.svg';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className='fixed top-0 w-full z-30 bg-[rgb(238,46,43)] shadow-md'>
      <div className='flex items-center justify-between px-4 md:px-10'>
        <div className='flex items-center gap-1'>
          <a href="/">
            <img src={DragonBallImg} alt="Dragon Ball Image" width={180} height={180} className="p-3" />
          </a>
        </div>
        <form onSubmit={handleSearch} className="ml-auto mr-4 flex relative"> {/* Use ml-auto to push to the right */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search character..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="py-2 px-4 border border-gray-300 rounded-md pl-10"
              style={{ backgroundImage: `url(${SearchImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center', backgroundSize: '20px' }}
            />
          </div>
        </form>
        <div className='flex items-center gap-1'>
          {/* <a href='' */}
          <img src={GitHubImg} width={40} height={40} alt='' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
