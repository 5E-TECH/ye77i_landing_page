import React from 'react'

const FrequentlyAskedQuestions = () => {
    return (
        <section className="py-20 px-4">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center">
                Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
                {[
                    {
                        q: "What services does YE77I offer?",
                        a: "YE77I provides a wide range of technology services, including full-stack development, mobile application development for both iOS and Android, and advanced AI solutions. We tailor our services to meet the unique needs of each client."
                    },
                    {
                        q: "How does YE77I ensure the quality of its projects?",
                        a: "We follow a rigorous development process that includes comprehensive planning, continuous testing, and client feedback at every stage. Our experienced team uses the latest tools and best practices to deliver high-quality, reliable, and scalable solutions."
                    },
                    {
                        q: "What is the typical timeline for a project?",
                        a: "The timeline for a project varies depending on its scope and complexity. After an initial consultation to understand your requirements, we will provide a detailed project plan with estimated timelines for each phase of development."
                    },
                    {
                        q: "How can I get started with YE77I?",
                        a: "Getting started is easy! Simply contact us through our website to schedule a free consultation. We'll discuss your project ideas, answer any questions you have, and provide a no-obligation proposal to get your project off the ground."
                    }
                ].map((item, i) => (
                    <details
                        key={i}
                        className="group rounded-xl bg-background-light dark:bg-background-dark/50 p-6 border border-primary/20 dark:border-primary/30 
                                   transition-all duration-300 ease-in-out hover:border-primary/40 hover:shadow-xl 
                                   [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {item.q}
                            </h3>
                            <span className="relative size-6 shrink-0 text-primary transition-transform duration-300 group-open:rotate-90">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6v12m6-6H6" />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400 transition-all duration-500 group-open:opacity-100 opacity-80">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default React.memo(FrequentlyAskedQuestions)
