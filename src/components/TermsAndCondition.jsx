import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const TermsAndCondition = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sections = [
        {
            id: 1,
            icon: 'mdi:account-plus',
            title: 'Account Registration',
            content: 'When you create an account on Feane, you need to give your valid email and password. Your account is only for your personal use. Don\'t share your login details with others. You are responsible for everything that happens with your account. If we find any misuse, we can suspend or delete your account anytime. By creating an account, you agree to follow Feane\'s rules and terms.'
        },
        {
            id: 2,
            icon: 'mdi:account-check',
            title: 'User Responsibilities',
            content: 'When you use Feane, you should not do anything illegal, harmful, or rude. No fake orders, spam, or wrong use is allowed. You must act honestly and responsibly. If anyone breaks the rules, Feane can block or remove their account without warning. We want everyone to use the app respectfully and safely.'
        },
        {
            id: 3,
            icon: 'mdi:credit-card',
            title: 'Ordering and Payments',
            content: 'You must pay for your orders using accepted methods like cards, UPI, or wallets. Prices shown include taxes and delivery fees if any. Payment happens after order confirmation. Refunds only happen in certain cases like wrong or bad food or failed delivery. If you have payment problems, contact support quickly. Fake orders can lead to legal trouble.'
        },
        {
            id: 4,
            icon: 'mdi:cash-refund',
            title: 'Cancellation and Refunds',
            content: 'You can cancel orders only before food preparation starts. If the food is being made, cancellation is not allowed. Refunds happen only if delivery fails or food is damaged. Refund process can take 5-7 days. Use the app or contact support for cancellations. Misuse of refund rules can lead to no refund.'
        },
        {
            id: 5,
            icon: 'mdi:truck-fast',
            title: 'Delivery Policy',
            content: 'Feane delivers only in specific areas. Delivery usually takes 30 to 60 minutes but may delay due to traffic or weather. Please provide a correct address or your order might be canceled. Delivery staff are polite, and you should cooperate. If delivery fails due to your mistake, no refund will be given. You can track your order in the app.'
        },
        {
            id: 6,
            icon: 'mdi:cellphone',
            title: 'Use of Platform',
            content: 'Use Feane only for personal and legal purposes. Don\'t misuse features, try to hack, or harm the system. No sharing of viruses or bad code allowed. Feane monitors all activity and will act if someone breaks rules. We want a safe and fair experience for all users.'
        },
        {
            id: 7,
            icon: 'mdi:copyright',
            title: 'Intellectual Property',
            content: 'All logos, images, and content on Feane belong to Feane or its partners. Don\'t copy, reuse, or change them without permission. Unauthorized use can lead to legal actions. You can only use the app for its intended purpose. Feedback and suggestions become Feane\'s property.'
        },
        {
            id: 8,
            icon: 'mdi:shield-lock',
            title: 'Privacy and Data Usage',
            content: 'Feane keeps your personal data safe and does not share it without your permission. We only collect data needed to provide the service, like email and location. Your data is stored securely and protected by encryption. Please read our Privacy Policy for more details. Contact us if you notice suspicious activity.'
        },
        {
            id: 9,
            icon: 'mdi:file-edit',
            title: 'Modifications and Termination',
            content: 'Feane can change these terms anytime and changes apply immediately. Check the terms regularly. If you don\'t agree with new terms, you can delete your account. Repeated rule-breaking can lead to account removal without notice. Feane service can also be stopped at any time.'
        },
    ];

    const scrollToSection = (id) => {
        setActiveSection(id);
        document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="poppins transition-colors duration-500">

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black pt-20">
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-amber-500/10 rounded-full"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-32 left-20 text-amber-500/20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Icon icon="mdi:file-document" width="50" height="50" />
                    </div>
                    <div className="absolute top-40 right-32 text-orange-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                        <Icon icon="mdi:shield-check" width="40" height="40" />
                    </div>
                    <div className="absolute bottom-40 left-32 text-amber-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                        <Icon icon="mdi:scale-balance" width="45" height="45" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative text-center px-5 py-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Icon icon="mdi:gavel" className="text-amber-400" width="16" height="16" />
                        <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Legal</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                        <span className="text-white">Terms & </span>
                        <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Conditions</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Please read these terms carefully before using our services. By using Feane, you agree to these terms.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <Icon icon="mdi:calendar" width="18" height="18" />
                            <span>Last Updated: January 2024</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <Icon icon="mdi:clock-outline" width="18" height="18" />
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="py-16 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Table of Contents - Sticky Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-zinc-800">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <Icon icon="mdi:format-list-bulleted" className="text-amber-500" width="20" height="20" />Contents</h3>
                                    <nav className="space-y-2">
                                        {sections.map((section) => (
                                            <button key={section.id} onClick={() => scrollToSection(section.id)} className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${activeSection === section.id ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30' : 'text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800'}`}> 
                                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${activeSection === section.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-zinc-800' }`}>{section.id}</span>
                                                <span className="truncate">{section.title}</span>
                                            </button>
                                        ))}
                                    </nav>

                                    {/* Quick Actions */}
                                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
                                        <Link to="/contact" className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-600 font-medium" >
                                            <Icon icon="mdi:help-circle" width="18" height="18" /> Have questions? Contact us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Main Content */}
                        <div className="lg:col-span-3 space-y-6">

                            {/* Introduction Card */}
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Introduction</h2>
                                        <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                                            This document is an electronic record in terms of the Information Technology Act, 2000 and the applicable rules thereunder, as well as the amended provisions related to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with Rule of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. It mandates the publication of rules and regulations, privacy policy, and Terms of Use for access or usage of the www.feane.com website and the Feane mobile and handheld applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Sections */}
                            {sections.map((section, index) => (
                                <div key={section.id} id={`section-${section.id}`} className="group bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 scroll-mt-28" >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-semibold">Section {section.id}</span>
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-amber-500 transition-colors">{section.title}</h2>
                                            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{section.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Contact Card */}
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                            <Icon icon="mdi:headset" className="text-white" width="28" height="28" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Need Help?</h3>
                                            <p className="text-gray-500 dark:text-zinc-400">Contact our support team</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300" >
                                            <Icon icon="mdi:email" width="20" height="20" /> Contact Us
                                        </Link>
                                        <Link to="/" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-semibold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300" >
                                            <Icon icon="mdi:home" width="20" height="20" /> Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndCondition;
