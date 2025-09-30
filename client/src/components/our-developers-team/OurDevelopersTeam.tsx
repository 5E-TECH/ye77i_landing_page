import React from 'react'

const OurDevelopersTeam = () => {
    return (
        <section className="py-16 px-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Developers Team</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Our team comprises highly skilled full-stack developers,
                mobile app developers, and AI specialists. Each member brings a wealth of experience and a passion for
                technology, ensuring we deliver innovative and effective solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl7EPu-UOVCX_P61taEyL7mTH5vCFfFi2e6eKpNsjb1GxRwDAMeOMva-k3_-0oQxztqSeVrzUbq2UIIU2Z7gLvFDpcrQcaSOfX-Pw8WQdNbxKZrS3Km8L_jrbMJm5xh2UfbIbCDvooCGLIIxJcA0sI4n0_obM2RlF081a-gIRsyhIp-q48IETmAiCXg9tQaZjkF5NrZjh3VvR2IoG6jmSt1QhUjsVGhQyF1-4abGRgroC3aTSgU3VyzzWA_gcfFiCYaTA85JDirnk")' }}>
                    </div>
                    <div>
                        <h3 className="text-slate-900 dark:text-white text-lg font-medium">Full-Stack Developers</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Expertise in front-end and back-end development,
                            creating seamless web applications.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdpjvWO2EU1rLB1UlNDRJqwWOX3ZoKVJoq49pGOoNvW41Dm59iB9YPH1v03jt919I_OTZ8CVqLxpntusA97fhxmWZE8EQtyTJm1FLXJaCRLsZP_wSG8usPTB4fEqJwizCEL4uONZd_mbXfUZxdGJphWWCLbPHPATvx3x9CTu3DqHObOVIai4nQPa-B1vCJvAnGJmVqORHobKfxUFU6y5QkkVLwo2JLUf--Zr4yVkOey1mp_XJv8XXeN3h9Kg6_i_dzajH-xePMJds")' }}>
                    </div>
                    <div>
                        <h3 className="text-slate-900 dark:text-white text-lg font-medium">Mobile App Developers</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Specialized in developing native and
                            cross-platform mobile applications for iOS and Android.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHQeOky-IBefsJHgJD0KquXmLVqdWs2-AobU7rcry3NcmN3ICGyu1X2BRStF008_2bzAIhcu8usOUT3emPPRomX-0PtDY98NwXWVcSqu1NVhWT_1HFrGptM2GgHFJ_A1GPKulN3CRdayiVekWG0RCy9h6PRs5gf3q7B--PuuwZTk6-Q4bib-MJL-hF3M7pRiqZ4PApvfW2VALFKHOcpIyFo7vwcUQJ8PWpO-e2MdSc2zxWab5gWLuTjdov-YtsSrMI77fEv8S-iUM")' }}>
                    </div>
                    <div>
                        <h3 className="text-slate-900 dark:text-white text-lg font-medium">AI Specialists</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Focused on creating intelligent systems and
                            solutions using the latest AI technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(OurDevelopersTeam)