import { Avatar} from "@mui/material";
import { useCallback, useState } from "react";
import {AiOutlineMenu} from "react-icons/ai"
import MenuItem from "./MenuItem";
import { Form, Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import useRentModal from "../../hooks/useRentModal";

const UserMenu = () => {
  const token: any = useRouteLoaderData('root');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal();
  
  const toggleOpen = useCallback(()=>{
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(()=>{
    if(!token){
      return navigate("/auth?mode=login");
    }
    
    rentModal.onOpen();
  }, [rentModal, token])
  
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={onRent} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full no-underline text-neutral-800 hover:bg-neutral-100 transition cursor-pointer">
              Rent your home
        </div>
        <div onClick={toggleOpen}
             className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition">
            <AiOutlineMenu />
            <div className="hidden md:block">
                <Avatar />
            </div>
        </div>
        {isOpen && 
        <div className="absolute rounded-xl shadow-sm w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
                <>
                {!token && <MenuItem label="Login" mode="/auth?mode=login"/>}
                {!token && <MenuItem label="Sign up" mode="/auth?mode=signup"/>}
                {token && 
                <>
                <MenuItem label="My trips" mode="/"/>
                <MenuItem label="My favourites" mode="/"/>
                <MenuItem label="My reservations" mode="/"/>
                <MenuItem label="My properties" mode="/"/>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={onRent}>Rent my home</div>
                <hr />
                <Form method="post" action="/logout">
                  <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  <button name="logout" type="submit" className="bg-none">Logout</button>
                  </div>
                </Form>
                </>}
                </>
            </div>
        </div>}

      </div>
    </div>
  )
};

export default UserMenu;
