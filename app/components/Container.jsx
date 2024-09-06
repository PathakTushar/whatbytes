const Container = ({ pl = false, children }) => {
    return ( 
      <div
        className={`w-full md:w-[75%] mx-auto ${pl ? 'xl:px-20 md:px-10 sm:px-4 px-4' : 'px-4' } pt-24 pb-10`}
      >
        {children}
      </div>
     );
  }
   
  export default Container;