import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const  App = () => {
  return (
    <section className='app-wrapper' >
      <Header />
      <Navbar />
      <Profile />
    </section>
  );
}

export default App;