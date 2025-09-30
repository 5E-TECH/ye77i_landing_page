import React from 'react'

const Header = () => {
    return (
        <header
            className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 dark:border-primary/30 px-10 py-3">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold">YE77I</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-6">
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                        href="#">About Us</a>
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                        href="#">Services</a>
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                        href="#">Team</a>
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                        href="#">Contact</a>
                </div>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    <span className="truncate">Get Started</span>
                </button>
            </div>
        </header>
    )
}

export default React.memo(Header)