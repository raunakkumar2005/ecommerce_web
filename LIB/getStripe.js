import { loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe('pk_test_51MGxLuSHVbOeShqKCVZoZK1brOywV6yXBMakKqB2SWyflNOz4CgGAtjF1LacvnZQQKArwKH9W3rxpiwHK1mgoZYT00SYpjqoH1');
    }
  
    return stripePromise;
  }
  
  export default getStripe;