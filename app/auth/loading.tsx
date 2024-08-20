import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/Ghost-logo.png"
        alt="loading"
        width={200}
        height={200}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
