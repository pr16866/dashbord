import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return <>
   <ToastContainer
     position="top-right"
     autoClose={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
   />
  <Component {...pageProps} />
  </>
}

export default MyApp
