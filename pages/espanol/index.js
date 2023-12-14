import { Suspense } from "react";

const indexesp = () => {
    return ( 
        <Suspense fallback={<h1>Loading...</h1>}><h1>Spanish page</h1>
            </Suspense>

        
        
     );
}
 
export default indexesp;

export async function getServerSideProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  
    return {
      props: {},
    }
  }
  