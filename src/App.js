import AuthProvider from "./auth/authProvider";
import Routers from "./components/routers/routes";

function App() {


  return (
    <>
    <AuthProvider>
    <Routers/>
    </AuthProvider>
   
    </>

  );

}

export default App;
