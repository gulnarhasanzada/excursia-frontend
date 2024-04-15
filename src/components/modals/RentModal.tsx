import React, { Suspense, useMemo, useState, lazy, useEffect, useCallback } from "react";
import Modal from "./Modal";
import useRentModal from "../../hooks/useRentModal";
import ReactDOM from "react-dom";
import CategoryInput from "../inputs/CategoryInput";
import { Category, categories } from "../header/Categories";
import Heading from "../Heading";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import Counter from "../inputs/Counter";
import {amenities as amenityList, Amenity, amenities} from "../inputs/Amenities";
import AmenityBox from "../inputs/AmenityBox";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  AMENITIES = 3,
  IMAGES = 4,
  DESCRIPTION = 5,
  PRICE = 6,
}

const Map = lazy(() => import("../Map"));

const LoginModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isMapLoaded, setIsMapLoaded] = useState(false); 

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      location: null,
      capacity: {
        guests: 1,
        bedrooms: 1,
        bathrooms: 1,
        beds: 1,
      },
      amenities: [],
      images: [],
      price: null,
    },
  });
  const category = watch("category");
  const location = watch("location");
  const guestCount = watch('capacity.guests')
  const bedroomCount = watch('capacity.bedrooms') 
  const bedsCount = watch('capacity.beds') 
  const bathroomCount = watch('capacity.bathrooms')


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleAmenityClick = useCallback((amenity: Amenity) => {
    const currentAmenities = watch("amenities") || [];
    const isAmenitySelected = currentAmenities.includes(amenity.label);

    if (isAmenitySelected) {
      // Remove amenity if already selected
      const updatedAmenities = currentAmenities.filter((item: string) => item !== amenity.label);
      setCustomValue("amenities", updatedAmenities);
      console.log(updatedAmenities)
    } else {
      // Add amenity if not selected
      const updatedAmenities = [...currentAmenities, amenity.label];
      setCustomValue("amenities", updatedAmenities);
    }
   
  }, [watch, setCustomValue]);

  useEffect(() => {
    if (location) {
      setIsMapLoaded(true);
    }else{
      setIsMapLoaded(false);
    }
  }, [location]); 


  const onPrev = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Prev";
  }, [step]);

  let content = (
    <div className="max-w-[60vw] m-auto flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item: Category) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    content = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        {isMapLoaded && ( 
        <Suspense fallback={<div>Loading...</div>}>
          <Map center={location?.latlng} />
        </Suspense>
        )}
      </div>
    );
  }

  if(step === STEPS.AMENITIES){
    content = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell guests what your place has to offer"
          subtitle="You can add more amenities after you publish your listing."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {amenityList.map((amenity: Amenity, index:number)=>{
                const {selected, label, icon} = amenity;
                const isSelected = (watch("amenities") || []).includes(label);
                return (<div className="col-span-1" key={label}><AmenityBox icon={icon} label={label} selected={isSelected} onClick={() => handleAmenityClick(amenity)}/></div>
          )
            })}
        </div>
        <hr />
      </div>
    )
  }
  
  if(step === STEPS.INFO){
    content = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="How many rooms do you have?"
        />
        <Counter 
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value)=>setCustomValue('capacity.guests', value)}
        />
        <hr />
        <Counter 
          title="Bedrooms"
          subtitle="How many bedrooms do you have?"
          value={bedroomCount}
          onChange={(value)=>setCustomValue('capacity.bedrooms', value)}
        />
        <hr />
        <Counter 
          title="Beds"
          subtitle="How many beds do you have?"
          value={bedsCount}
          onChange={(value)=>setCustomValue('capacity.beds', value)}
        />
        <hr />
        <Counter 
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(value)=>setCustomValue('capacity.bathrooms', value)}
        />
      </div>
    )
  }

  return ReactDOM.createPortal(
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onPrev}
      body={content}
      title="Rent your home!"
    />,
    document.getElementById("portal-root") as Element
  );
};

export default LoginModal;
