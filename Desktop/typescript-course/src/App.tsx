import React, {FC, createContext} from 'react';

import './App.css';
import { Person} from './Components/Person';
import { HairColor } from './Components/Enums';


interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Brandon",
    age: 29,
    country: "Brazil"
  }
 return (
  <AppContext.Provider value={contextValue}>
    <div className="App">
   <Person name="Brandon" age={29} email="brandon@gmail.com" hairColor={HairColor.Pink} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
