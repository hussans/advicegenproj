import { useState, useEffect } from 'react';
import { getAdvice } from '../Services/dataService';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState({ text: '', id: '' });

  const fetchNewAdvice = async () => {
    try {
      const { slip } = await getAdvice();
      setAdvice({
        text: slip.advice,
        id: slip.id.toString(),
      });
    } catch (error) {
      setAdvice({
        text: 'Failed to fetch advice. Please try again.',
        id: 'error',
      });
    }
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <section className="relative bg-[#323A49] rounded-xl p-10 max-w-[540px] mx-4 text-center shadow-2xl">
      <h1 className="text-[#52FFA8] text-[13px] tracking-[0.3em] mb-6">
        ADVICE #{advice.id || '...'}
      </h1>
      <blockquote className="text-[#CEE3E9] text-[28px] leading-[1.4] mb-8 font-bold">
        {`"${advice.text}"`}
      </blockquote>
      <div className="mb-10">
        <img src="./public/pattern-divider-desktop.svg" alt="divider" className="mx-auto w-full" />
      </div>
      <button onClick={fetchNewAdvice} className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#53ffab] p-5 rounded-full hover:shadow-[0_0_15px_0] hover:shadow-[#53ffab] transition-all duration-200" >
        <img className="w-7 h-7" src="./public/icon-dice.svg" alt="dice icon" />
      </button>
    </section>
  );
};

export default AdviceGenerator;