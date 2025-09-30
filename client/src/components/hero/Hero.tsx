import React from 'react'

const Hero = () => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBt7eIz8f9leEaNAaU1jqsfp0LpCAYYGJelXRIXB3lijHjsX8MLGkxWCnEFgY1aHCHX5aiidqSFXCCZT8-EXN3htJi8stn06sU2SomZFjI9IJbZrBpxLjgqH1NVKmYla5XIqMSDC1IereZ0JXbmVzzGU1ckb-se6lzc51_4YG5ySZxclZNB8vsBJpdD7Uwjmttc4VigKa58fXKOkT3YgxIA4cR89di8-eCD2d3PGWohmwfsIqOxvh668lX-JWJpXq2HdUqZwS8wQyA")'
                    }}>
                    <div className="flex flex-col gap-4 text-left">
                        <h1 className="text-white text-4xl font-black md:text-5xl">Innovating the Future of Technology</h1>
                        <p className="text-slate-200 text-sm md:text-base max-w-2xl">YE77I is a leading technology company
                            dedicated to providing cutting-edge solutions and exceptional service. We specialize in full-stack
                            development, mobile applications, and AI, delivering tailored solutions to meet your unique needs.
                        </p>
                    </div>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
                        <span className="truncate">Explore Our Services</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Hero)