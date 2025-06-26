// src/components/common/BackgroundBlur.jsx

export const BackgroundBlurTop = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[120px] sm:-top-80"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-1/2 w-[40rem] sm:w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#ffffff66] via-[#90cdf4] to-[#a78bfa] opacity-40"
      />
    </div>
  );
};

export const BackgroundBlurBottom = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-[120px] sm:bottom-[-20rem]"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-1/2 w-[40rem] sm:w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-[#f472b6] via-[#a78bfa] to-[#60a5fa] opacity-40"
      />
    </div>
  );
};