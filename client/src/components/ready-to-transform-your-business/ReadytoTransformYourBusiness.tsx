import React from 'react'

const ReadytoTransformYourBusiness = () => {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 dark:from-primary/15 dark:via-secondary/10 dark:to-accent/10 overflow-hidden rounded-3xl shadow-lg">
            {/* Dekorativ rangli blur effektlar */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/30 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/25 blur-[160px] rounded-full" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/30 blur-[140px] rounded-full" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center items-center gap-8 text-center max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Ready to <span className="bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">Transform</span> Your Business?
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                    Partner with <span className="font-semibold text-primary">YE77I</span> — our experts are here to help you 
                    turn ideas into innovation and achieve your technology goals.
                </p>

                <div className="flex flex-wrap gap-5 justify-center">
                    {/* Primary CTA */}
                    <button
                        className="flex items-center justify-center h-14 px-8 min-w-[160px] rounded-xl text-lg font-semibold 
                                   bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg 
                                   hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                        Contact Us
                    </button>

                    {/* Secondary CTA */}
                    <button
                        className="flex items-center justify-center h-14 px-8 min-w-[160px] rounded-xl text-lg font-semibold 
                                   border-2 border-primary/40 text-primary dark:text-secondary 
                                   bg-white/70 dark:bg-white/5 
                                   hover:border-secondary hover:text-secondary 
                                   hover:scale-105 transition-all duration-300 ease-out">
                        Start a Project
                    </button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ReadytoTransformYourBusiness)
