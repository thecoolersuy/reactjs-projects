//What does Context API do? If we need a prop called username in Card.jsx components we need to pass it down
// form its parent componenets like Leftdiv.jsx, Home.jsx So we need to pass the username prop through these components which doesnt need that prop
// So context api makes a global variable where the username is defined there so Cards.jsx can simple access the global variable instaed of prop drilling

import { createContext } from "react";

const userContext = createContext()

export default userContext;