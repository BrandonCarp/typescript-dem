import {FC, ChangeEvent, useState} from 'react';
import { User } from './Interfaces';


// export enum HairColor {
//   Blonde = "Your hair is blonde, good for you",
//   Brown = "Cool Hair color",
//   Pink = "Wow thats so cool",
// }



// interface Props {
//   name: string;
//   age: number;
//   email: string;
//   hairColor: HairColor;
// }


export const  Person: FC<User> = ({name, email, age, hairColor}) =>  {

  const [country, setCountry] = useState<string | null>("")

  // type NameType = "Brandon" | "Jack" |  "Pedro"
  // const nameForType: NameType = "Jack"



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder='Write down your country..' onChange={handleChange} />

<br />
      {country}
      {hairColor}
      <br />
      
      
    </div>
  );
}
