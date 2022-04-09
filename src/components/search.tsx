import { SearchProp } from '../redux/types';

export default function Search({ value, handleChange }: SearchProp) {

  return (
    <div>
      <label className='title'>  </label>
      <input type="text" value={value} onChange={handleChange} placeholder= "search here.."/>
    </div>
  );

}