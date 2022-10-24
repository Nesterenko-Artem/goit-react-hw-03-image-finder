import { MutatingDots } from 'react-loader-spinner';



export const Loader = () => {
  return (
     <>
        <MutatingDots
           height="100"
           width="100"
           radius="10"
           color="#3f51b5"
           secondaryColor='#5a69bd'
           ariaLabel="mutating-dots-loading"
           wrapperStyle={{ justifyContent:"center", }}
           wrapperClassName="loader"
           visible={true}
        />
    </>
  )
}
