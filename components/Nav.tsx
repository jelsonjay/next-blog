import NavItem from "../components/NavItem";
import classnames from 'classnames'
interface IAppProps {
dir?: any;
scheme: any;
}

const Nav: React.FC<IAppProps> = ({dir, scheme}) => {

const dirs = {
horizontal: "justify-center space-x-10",
vertical: "flex-col space-y-6"
}

const pickedDir = dirs[dir];
  return (
  <div>
    <ul className={classnames("flex ", pickedDir)}>
    <NavItem scheme={scheme} href="/">Home</NavItem>
    <NavItem scheme={scheme} href="#about">About</NavItem>
    <NavItem scheme={scheme} href="#skills">Skills</NavItem>
    <NavItem scheme={scheme} href="#project">Projects</NavItem>
    <NavItem scheme={scheme} href="#contact">Contact Us</NavItem>
    </ul>
  </div>
);
};

export default Nav;