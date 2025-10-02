import React from 'react'

const Footer = () => {
    return (
        <footer className="relative border-t border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/15 dark:via-secondary/10 dark:to-accent/10">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 relative z-10">
                {/* Social Icons */}
                <div className="flex justify-center space-x-6">
                    {[
                        {
                            href: "#",
                            path: "M22.46,6.54a8.29,8.29,0,0,0-2.36-2.36C17.73,2.67,15,2,12,2S6.27,2.67,3.9,4.18A8.29,8.29,0,0,0,1.54,6.54,23.36,23.36,0,0,0,2,12a23.36,23.36,0,0,0-.46,5.46,8.29,8.29,0,0,0,2.36,2.36C6.27,21.33,9,22,12,22s5.73-.67,8.1-2.18a8.29,8.29,0,0,0,2.36-2.36A23.36,23.36,0,0,0,22,12,23.36,23.36,0,0,0,22.46,6.54ZM16.42,8.44l-5.69,5.69a1.6,1.6,0,0,1-2.26,0L7.58,13.24a1.6,1.6,0,0,1,2.26-2.26l.78.78,4.57-4.57a1.6,1.6,0,0,1,2.26,2.26Z"
                        },
                        {
                            href: "#",
                            path: "M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.862,8.14,6.839,9.456.5.092.682-.217.682-.482,0-.237-.009-.865-.014-1.698-2.778.602-3.364-1.34-3.364-1.34-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608,1.004.07,1.532,1.03,1.532,1.03.892,1.53,2.341,1.088,2.911.832.092-.647.35-1.088.635-1.338-2.22-.253-4.557-1.11-4.557-4.942,0-1.091.39-1.984,1.03-2.682-.103-.253-.446-1.27.098-2.64,0,0,.84-.269,2.75,1.029a9.547,9.547,0,0,1,5,0c1.91-1.298,2.748-1.029,2.748-1.029.546,1.37.202,2.387.098,2.64.64.698,1.03,1.59,1.03,2.682,0,3.842-2.338,4.685-4.567,4.934.359.308.678.92.678,1.852,0,1.338-.012,2.418-.012,2.745,0,.267.18.577.688.48C19.142,20.114,22,16.38,22,11.974,22,6.465,17.535,2,12.026,2Z"
                        },
                        {
                            href: "#",
                            path: "M22,5.2v13.6c0,1.3-1.1,2.4-2.4,2.4H4.4C3.1,21.2,2,20.1,2,18.8V5.2c0-1.3,1.1-2.4,2.4-2.4h15.2C20.9,2.8,22,3.9,22,5.2z M17,8.5l-4.2,4c-0.4,0.4-1.1,0.4-1.5,0L7,8.5c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l4.2,4c0.8,0.8,2.1,0.8,2.8,0l4.2-4c0.4-0.4,0.5-1,0.1-1.4S17.4,8.1,17,8.5z"
                        }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="group text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                        >
                            <svg aria-hidden="true" className="h-7 w-7 group-hover:scale-110 transform transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d={item.path}></path>
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-10 flex justify-center space-x-8">
                    <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                        href="#">Privacy Policy</a>
                    <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-secondary transition-colors"
                        href="#">Terms of Service</a>
                </div>

                {/* Copyright */}
                <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
                    © 2024 <span className="text-primary font-semibold">YE77I</span>. All rights reserved.
                </p>
            </div>

            {/* Background glowing elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute -top-24 right-0 w-80 h-80 bg-secondary/20 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/20 blur-[160px] rounded-full" />
            </div>
        </footer>
    )
}

export default React.memo(Footer)
