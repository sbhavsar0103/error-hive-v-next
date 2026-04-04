import React from "react";

export default function TermsOfService() {
    return (
        <>
            <div className="bg-[#060010] min-h-screen text-gray-300 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-[#0a0a1a] rounded-2xl p-8 sm:p-12 border border-gray-800 shadow-2xl">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                        Terms of Service
                    </h1>

                    <div className="space-y-8 text-sm sm:text-base leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Error Hive Solutions ("Company," "we," "us," or "our"), concerning your access to and use of our website as well as any other media form, media channel, IT services, software development, consulting, or linked services related thereto (collectively, the "Site" and "Services").
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">3. User Representations</h2>
                            <p>
                                By using the Site and Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">4. IT Services and Software Development</h2>
                            <p>
                                Whenever you engage Error Hive Solutions for IT services, consulting, or software development, specific Statements of Work (SOW) or Service Level Agreements (SLA) will govern the specifics of those engagements. In the event of a conflict between these Terms of Service and a specific SOW/SLA, the SOW/SLA shall prevail for that specific engagement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">5. Limitations of Liability</h2>
                            <p>
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site or our Services, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">6. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of India. Error Hive Solutions and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}