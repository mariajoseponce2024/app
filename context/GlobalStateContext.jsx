import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
  // Definición del estado inicial
  const initialState = {
    entrance: true,
    vehicleQR: '',
    vehicleQRChecked: false,
    personalQR: '',
    personalQRChecked: false,
    neumaticos: false,
    matafuego: false,
    remito: {
      checked: false,
      number: '',
      imageUri: '',
    },
    incident: {
      imageUri: '',
    },
  };

  // Hook useState para el estado global
  const [globalState, setGlobalState] = useState(initialState);

  // Funciones para actualizar el estado global
  const setEntrance = (isEntrance) => {
    setGlobalState(prevState => ({
      ...prevState,
      entrance: isEntrance,
    }));
  };

  const togglePersonalQRChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      personalQRChecked: !prevState.personalQRChecked,
    }));
  };

  const clearPersonalQR = () => {
    setGlobalState(prevState => ({
      ...prevState,
      personalQR: '',
    }));
  };

  const toggleVehicleQRChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      vehicleQRChecked: !prevState.vehicleQRChecked,
    }));
  };

  const clearVehicleQR = () => {
    setGlobalState(prevState => ({
      ...prevState,
      vehicleQR: '',
    }));
  };

  const toggleNeumaticos = () => {
    setGlobalState(prevState => ({
      ...prevState,
      neumaticos: !prevState.neumaticos,
    }));
  };

  const toggleMatafuego = () => {
    setGlobalState(prevState => ({
      ...prevState,
      matafuego: !prevState.matafuego,
    }));
  };

  const toggleRemitoChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        checked: !prevState.remito.checked,
      },
    }));
  };

  const setRemitoNumber = (number) => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        number: number,
      },
    }));
  };

  const setRemitoImageUri = (uri) => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        imageUri: uri,
      },
    }));
  };

  const setIncidentImageUri = (uri) => {
    setGlobalState(prevState => ({
      ...prevState,
      incident: {
        ...prevState.incident,
        imageUri: uri,
      },
    }));
  };

  const saveData = () => {
    console.log('Datos a guardar:', globalState);
    // Implementa aquí la lógica para guardar los datos, por ejemplo, enviándolos a una API.
  };

  const resetData = () => {
    setGlobalState(initialState);
  };

  // Proporcionando el estado global y las funciones a los componentes hijos
  return (
    <GlobalStateContext.Provider value={{ 
      ...globalState, 
      setEntrance,
      togglePersonalQRChecked,
      clearPersonalQR,
      toggleVehicleQRChecked,
      clearVehicleQR,
      toggleNeumaticos,
      toggleMatafuego,
      toggleRemitoChecked,
      setRemitoNumber,
      setRemitoImageUri,
      setIncidentImageUri,
      saveData,
      resetData,
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
