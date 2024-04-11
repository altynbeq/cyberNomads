// import React, { createContext, useState } from 'react';

// // Create the context with default value false
// export const ActiveContext = createContext({
//   active: false,
//   toggleActive: () => {}
// });

// // Function to toggle the active state
// export const toggleActive = () => {
//   setActive(prevActive => !prevActive);
// };

// // Create a custom provider component
// export const ActiveProvider = ({ children }) => {
//   const [active, setActive] = useState(false);

//   return (
//     <ActiveContext.Provider value={{ active, toggleActive }}>
//       {children}
//     </ActiveContext.Provider>
//   );
// };
