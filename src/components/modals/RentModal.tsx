import React, { useMemo, useState } from "react"
import Modal from "./Modal";
import useRentModal from "../../hooks/useRentModal";
import ReactDOM from "react-dom";
import CategoryInput from "../inputs/CategoryInput";
import { Category, categories } from "../header/Categories";
import Heading from "../Heading";
import {useForm} from "react-hook-form"

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const LoginModal = () => {
  const rentModal = useRentModal(); 

 
  const [step, setStep] = useState(STEPS.CATEGORY);

  const onPrev = () => {
    setStep((value)=> value - 1);
  }

  const onNext = () => {
    setStep((value)=> value + 1);
  }

  const actionLabel = useMemo(()=>{
    if(step === STEPS.PRICE){
        return 'Create';
    }
    return 'Next';
  },[step])

  const secondaryActionLabel = useMemo(()=>{
    if(step === STEPS.CATEGORY){
        return undefined;
    }
    return "Prev";
  }, [step])

  let content = (
    <div className="max-w-[60vw] m-auto flex flex-col gap-8">
        <Heading title="Which of these best describes your place?" subtitle="Pick a category"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {categories.map((item: Category) => (
                <div className="col-span-1" key={item.label}>
                     <CategoryInput 
                        onClick={()=>{}}
                        selected={false}
                        label={item.label}
                        icon={item.icon}
                     />
                </div>))}
        </div>
    </div>
  );

  return  ReactDOM.createPortal(
    <Modal isOpen={rentModal.isOpen}
           onClose={rentModal.onClose}
           onSubmit={rentModal.onClose}
           actionLabel={actionLabel}
           secondaryActionLabel={secondaryActionLabel}
           secondaryAction={step===STEPS.CATEGORY ? undefined : onPrev}
           body={content}
           title="Rent your home!"
           />, document.getElementById('portal-root') as Element);
    
  
};

export default LoginModal;
