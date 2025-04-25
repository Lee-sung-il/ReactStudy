import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk.js';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Detail from './pages/Detail.jsx';
import Search from './pages/Search.jsx';
import Favorite from './pages/Favorite.jsx';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  return (
    <>
      <h1 className="text-[40px] text-center ">포멧몬 도감 </h1>
      <nav className="flex gap-10 justify-center ">
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap gap-[20px] pt-[20px]  justify-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
