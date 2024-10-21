import { useState } from 'react';

// 제출 버튼을 클릭 시 alert를 이용하여 이름과 성별을 보여주는 팝업
const SignUp = () => {
   // let name = "", gender = "";
   const [name, setName] = useState("");
   const [gender, setGender] = useGender("man");

   const handleChangeName = (ev) => {
      setName(ev.target.value);
   }

   const handleChangeGender = (ev) => {
      setGender(ev.target.value);
   }

   const handleSubmit = (ev) => {
      alert('이름 : ${name}, 성별 : ${gender}');

      ev.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            이름 :
            <input type="text" value={name} onchange={handleChangeGender} />
         </label>

         <br /><br />

         <label>
            성별 :
            <select value={gender} onChange={handelChangeGender}>
               <option value="man">남자</option>
               <option value="woman">여자</option>
            </select>
         </label>

         <br /><br />

         <button type="submit">제출</button>
      </form>
   )
}

export default SingUp