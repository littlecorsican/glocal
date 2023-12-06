import { createContext } from 'react';

export const TourContext = createContext();
export const TourProvider = TourContext.Provider
export const TourConsumer = TourContext.Consumer

export const CruiseContext = createContext({});
export const CruiseProvider = CruiseContext.Provider
export const CruiseConsumer = CruiseContext.Consumer

export const UmrahContext = createContext();
export const UmrahProvider = UmrahContext.Provider
export const UmrahConsumer = UmrahContext.Consumer