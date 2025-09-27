import React from 'react'

const ReadytoTransformYourBusiness = () => {
    return (
        <section className="py-16 px-4">
            <div className="flex flex-col justify-center items-center gap-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl max-w-2xl">Ready to Transform
                    Your Business?</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Get in touch with us today to discuss your project
                    and discover how YE77I can help you achieve your technology goals.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all grow">
                        <span className="truncate">Contact Us</span>
                    </button>
                    <button
                        className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-base font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-all grow">
                        <span className="truncate">Start a Project</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ReadytoTransformYourBusiness)