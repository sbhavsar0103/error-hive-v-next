import React from "react";
import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <>
            <div className="bg-[#060010] min-h-screen text-gray-300 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-[#0a0a1a] rounded-2xl p-8 sm:p-12 border border-gray-800 shadow-2xl">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-sm sm:text-base leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">1. Introduction</h2>
                            <p>
                                Welcome to Error Hive Solutions. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">2. The Data We Collect About You</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                                <li><strong className="text-gray-300">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong className="text-gray-300">Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong className="text-gray-300">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                                <li><strong className="text-gray-300">Usage Data</strong> includes information about how you use our website, IT services, and products.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">3. How We Use Your Personal Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">5. Your Legal Rights</h2>
                            <p>
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-amber-500 mb-3">Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <Link href="mailto:contact@error-hive.com" className="text-amber-500 hover:text-amber-400 transition-colors">contact@error-hive.com</Link>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}