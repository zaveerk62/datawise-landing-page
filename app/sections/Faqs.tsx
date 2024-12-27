export const Faqs = () => {
  const faqs = [
    {
      question: "Can DataWise's AI solutions be business systems?",
      answer:
        "Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems.",
    },
    {
      question: 'What types of AI services does DataWise offer?',
      answer:
        'Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently.',
    },
    {
      question: 'What customer support do you offer for your AI solutions?',
      answer:
        'Our services can benefit various industries, including healthcare, finance, retail, entertainment, and many more, wherever AI can be leveraged.',
    },
    {
      question: "Can your AI help improve my website's conversion rate?",
      answer:
        "We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology.",
    },
    {
      question:
        'Can your AI identify areas for A/B testing and personalization?',
      answer:
        'We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers.',
    },
    {
      question: "How can your AI help improve my website's SEO ranking?",
      answer:
        'Yes, our platform allows for custom model training with your proprietary datasets.',
    },
  ];

  return (
    <section className='py-16 lg:py-24'>
      <div className='container'>
        <div>
          <h3 className='uppercase text-primary-green mb-3 font-dm'>faq</h3>
          <h2 className='text-5xl md:text-6xl font-bold leading-normal font-dm'>
            Frequently asked questions
          </h2>
          <p className='mt-8 text-neutral-500 text-base w-[300px] md:w-[600px]'>
            Explore to learn more about how DataWise can empower your business
            with AI-driven solutions.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question} className="flex flex-col gap-4">
              <h4 className="font-dm font-semibold text-lg">
                {faq.question}
              </h4>
              <p className="text-neutral-500 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
