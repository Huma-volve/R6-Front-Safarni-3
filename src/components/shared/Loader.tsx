import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#3F52B4"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
    </>
  )
}
