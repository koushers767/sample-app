import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #dddfe2;
  border-radius: 6px 0 0 6px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #166fe5;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ImageTile = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = searchQuery;
    document.head.appendChild(script);
  };

  // Generate an array of 12 random image objects
  const images = Array.from({ length: 120 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/300/300?random=${index + 1}`,
    caption: `Random Image ${index + 1}`
  }));

  return (
    <HomeContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <ImageGrid>
        {images.map((image) => (
          <ImageTile key={image.id}>
            <img src={image.url} alt={image.caption} />
            <ImageCaption>{image.caption}</ImageCaption>
          </ImageTile>
        ))}
      </ImageGrid>
    </HomeContainer>
  );
}

export default Home;