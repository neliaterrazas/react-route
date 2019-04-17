import React from 'react';



 function Buttons(){
   const bttn = {
     borderRadius: '5px',
     bottom: '100px',
     backgroundColor: 'pink',
     width: '50%'
   }
   return(
     <div>
       <button style={bttn}type='button'>Boop</button>
     </div>
   );
 }

export default Buttons;
