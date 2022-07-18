import Nav from "../components/navigation";

const Home = ({ user, setter }) => {
  return (
    <div>
      <Nav user={user} setter={setter} />
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Home;
