import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        {/* The Pizza Palace. */}
        <br />
        <span className="text-blue-700">
          Hot and Fresh Delights: Discover the Pizza Paradise at Pizza Palace
        </span>
      </h1>
      <h2 className="md:text-l  mb-8 text-xl font-semibold">
        Welcome to Pizza Palace! Our diverse menu is designed to satisfy every
        pizza lover's cravings. Taste the difference that quality ingredients
        make! Browse our menu, make your selections, and have your pizza
        delivered straight to your doorstep. Explore now our website, place your
        order, and embark on a culinary adventure that will keep you coming back
        for more. Join us at Pizza Palace, where pizza dreams come true!
      </h2>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
