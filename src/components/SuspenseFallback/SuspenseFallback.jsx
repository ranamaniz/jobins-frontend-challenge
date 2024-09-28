import Spinner from "../ui/Spinner/Spinner";

const SuspenseFallback = () => {
  return (
    <section
      aria-label="loading"
      className="w-full h-full flex justify-center items-center"
    >
      <Spinner size="lg" />
    </section>
  );
};

export default SuspenseFallback;
