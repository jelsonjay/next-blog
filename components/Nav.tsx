import NavItem from "../components/NavItem";

interface IAppProps {}

const Nav: React.FC<IAppProps> = (props) => {
  return (
  <div>
    <ul className='flex justify-center space-x-10'>
    <NavItem>Home</NavItem>
    <NavItem>About</NavItem>
    <NavItem>Skills</NavItem>
    <NavItem>Projects</NavItem>
    <NavItem>Contact Us</NavItem>
    </ul>
  </div>
);
};

export default Nav;