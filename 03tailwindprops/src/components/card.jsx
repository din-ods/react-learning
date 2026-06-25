import react from "react";

function Card({username,btnText="visit me"}) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://imgs.search.brave.com/Bt-QBRSgYqpd-tZhyZLIldFNTjr__pQGbI6p_j9pZsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/MTI4MHB4LUltYWdl/X2NyZWF0ZWRfd2l0/aF9hX21vYmlsZV9w/aG9uZS5wbmc"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitia?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
         {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
