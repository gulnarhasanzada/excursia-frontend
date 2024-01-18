import { Link} from "react-router-dom";
import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

const Header = ()=>{
    return (
        <header className="w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Link to="/"><img src="images/logo.png" alt="excursia-logo" title="Excursia" className="hidden md:block cursor-pointer" width={140}/></Link>
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
            <Categories />
        </header>
      )
}

export default Header;