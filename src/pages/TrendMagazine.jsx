import React from 'react';
import { Link } from 'react-router-dom';

export default function TrendMagazine() {
    return (
        <div className="bg-[#F8F8F8] dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 antialiased font-sans">
            <div className="relative mx-auto min-h-screen max-w-[430px] bg-white dark:bg-slate-950 shadow-2xl overflow-hidden flex flex-col">


                <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 ios-blur h-[60px] flex items-center justify-center border-b border-white/10 backdrop-blur-md">
                    <h1 className="text-[17px] font-semibold tracking-tight text-white">HAIRSTYLE AI</h1>
                </header>

                <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                    <section className="px-5 pt-6 pb-4">
                        <Link to="/magazine/american-vintage" className="block relative group cursor-pointer overflow-hidden rounded-[24px] bg-slate-100 dark:bg-slate-900 shadow-sm">
                            <div className="aspect-[4/5] w-full overflow-hidden">
                                <img alt="Modern Shag Cut Korean Model" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDERwbenH3sHDU4k3zszvFovPVvHxoX0fR_aHusIGIZQFqMe61TIG0gVJ2kMd6HXsTI7EIWjiiMmKLOB8B2dZyvm2s9MnHOdSrwvPPrWOneNQmp0yseiTDOFRSbeoDi-qcT-uX6akH2EfaR-TFh3XeLAugd0hakG-hNeO9ORoAsDcj1yCg4Uk89wtQPuUDd8xWzBryLT5FmwY-0ToDzwvirDZWKttmnXMNh9MPrFoqLMX5Hgsi3WAW8XcmZ2V8KBH-MYxMTcsaDJ3Ny" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-7">
                                <div className="mb-4">
                                    <span className="inline-block px-2.5 py-1 bg-[#d41132] text-white text-[10px] font-black tracking-[0.1em] rounded-sm mb-3 uppercase">Editor's Choice</span>
                                    <h2 className="text-[32px] font-black text-white leading-[1.1] mb-3" style={{ letterSpacing: '-0.02em' }}>American Vintage<br />&amp; Naturalism</h2>
                                    <p className="text-white/70 text-[14px] leading-relaxed font-medium line-clamp-2 max-w-[280px]">2026년 핵심 트렌드, 인위적인 꾸밈을 벗고 본연의 결감과 자연스러운 볼륨을 살리다.</p>
                                </div>
                                <div className="flex items-center gap-2 text-white/90 font-bold text-[13px] tracking-tight">
                                    <span>보러가기</span>
                                    <span className="material-symbols-outlined text-[16px]">east</span>
                                </div>
                            </div>
                        </Link>
                    </section>

                    <div className="flex gap-2.5 px-5 py-3 overflow-x-auto no-scrollbar">
                        <button className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">Trend Now</button>
                        <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-[12px] font-bold whitespace-nowrap">Volume &amp; Perm</button>
                        <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-[12px] font-bold whitespace-nowrap">Color</button>
                        <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-[12px] font-bold whitespace-nowrap">Short Cut</button>
                    </div>

                    <section className="px-5 py-8">
                        <div className="flex items-baseline justify-between mb-5">
                            <h3 className="text-[19px] font-black text-slate-900 dark:text-slate-100 tracking-tight">Weekly Highlights</h3>
                            <button className="text-slate-400 text-[12px] font-bold flex items-center gap-1">모두보기 <span className="material-symbols-outlined text-[14px]">chevron_right</span></button>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <Link to="/magazine/pixie-cut" className="flex flex-col gap-3 group">
                                <div className="aspect-[1/1] rounded-2xl overflow-hidden relative shadow-sm">
                                    <img alt="Pixie Cut" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBn71vy6uuplgnu7KTxdg1bp_DJfjuVjUE0VLZUiJx5xOYvJu9a2-NJ8P3DaC1CdyXhr_73UEksKiTfGS1N3I4tBfN_0IA6VxUN_6uf8wsNxrl3H8SQvu9auVYg-E9HVGj7K6zhxEAeb_F4kMzMCNMu29gcp7hWVqd2rV3BNR5Nmt0xJ1AbAPPqMboJtnPUKpA6aOmtyRnveb3kRP7Zy6eQmhWY4Wde8GzX5udBrKVj3ic6Cb6B-fsLmdc5uFgN_DWfiZVpW3YK91" />
                                    <div className="absolute top-3 right-3">
                                        <button className="w-8 h-8 bg-white/80 dark:bg-black/40 backdrop-blur-[20px] rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#d41132] text-[18px] filled-icon">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#d41132] font-black uppercase tracking-[0.1em] mb-1">Modern Classic</p>
                                    <h4 className="text-[15px] font-bold leading-tight text-slate-800 dark:text-slate-200 line-clamp-2">픽시 컷의 로맨틱한 귀환, 부드럽고 관능적인 무드</h4>
                                </div>
                            </Link>

                            <Link to="/magazine/natural-perm" className="flex flex-col gap-3 group">
                                <div className="aspect-[1/1] rounded-2xl overflow-hidden relative shadow-sm">
                                    <img alt="Natural Perm" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgB-9VkHFP1216gQiKI6eODypnQ_SLYybwx2NCht6bcaT6vJIVhyyD8r21bpAc6-qiszBYL8LgpOueMsP2qjr3akMqru6hRrR7SiVhXcThTbX2l77wQ-k14n2iRtZbR5UeErxh_LyCQT56uU-q0xv0voOvJ6g4e8t-H1zgJOH8evudbXsYWzsVWACtWzr-kBBRYbhmKNnqT1Ntd8q8HguA4OmcGcf74_NSoIif3TiIS-HKJtHPDSUzgb8tIDGG48fsstlEi7gqKVQV" />
                                    <div className="absolute top-3 right-3">
                                        <button className="w-8 h-8 bg-white/80 dark:bg-black/40 backdrop-blur-[20px] rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-400 text-[18px]">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#d41132] font-black uppercase tracking-[0.1em] mb-1">Naturalism</p>
                                    <h4 className="text-[15px] font-bold leading-tight text-slate-800 dark:text-slate-200 line-clamp-2">글래머 펌과 엘리자벳 펌의 우아하고 풍성한 볼륨감</h4>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className="px-5 pb-8">
                        <Link to="/magazine/color-melting" className="block bg-slate-900 dark:bg-white rounded-[24px] p-7 flex items-center justify-between gap-4 overflow-hidden relative cursor-pointer group">
                            <div className="relative z-10 flex-1">
                                <p className="text-[#d41132] font-black text-[10px] mb-2 uppercase tracking-[0.15em]">Color of 2026</p>
                                <h3 className="text-[24px] font-black text-white dark:text-slate-950 mb-3 tracking-tight leading-none group-hover:text-[#d41132] transition-colors">Color Melting</h3>
                                <p className="text-white/60 dark:text-slate-500 text-[13px] leading-relaxed font-medium">경계 없이 자연스럽게 스며드는<br />입체적이고 세련된 광채 컬러</p>
                            </div>
                            <div className="relative z-10 size-24 shrink-0 rounded-2xl overflow-hidden shadow-2xl rotate-6 border-2 border-white/10 dark:border-black/5">
                                <img alt="Color Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgKPFlWuUjTa1Lp4JA1QufHpwcj46T6DFSaFyIKLOrhuKfXjtagUxkY-05oL3Wbi0kLOp-O5Ecpz9u9Alm86E3kmgIFGh4j4Kd9fXsPKetEo_85oh-vZdzMZ4zGdiEUDPAhuuhmrEdyPcdTrKebCOFqt8o7BnNRXtfZgkohfiWMw02silFCZI6M06sneDRzJ7b-l9qCqvJb0K41CNZc4Apg80LNEBw1G-heiUF8LibkmUtkfA13sVXWhGMzdmE0RNvuXdhSXgqikTC" />
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#d41132]/20 rounded-full blur-3xl"></div>
                        </Link>
                    </section>

                    <section className="px-5 py-4 space-y-8">
                        <h3 className="text-[19px] font-black text-slate-900 dark:text-slate-100 tracking-tight">Trending Stories</h3>
                        <Link to="/magazine/birkin-bang" className="flex items-center gap-5 group cursor-pointer">
                            <div className="size-24 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                                <img alt="Accessory Trend" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkMSVuP4jgfGjz7Gakg2uiPCzok5EqF7aL8pY3NzOHSndQqDZZUkHaGZA9awZ0tnw7vOt-hoHzGVSOJYoy9wIGVWgMC5Tr4smvVgBYI0j7e3bp58aNCykTLaZC3CA7qDke9xIT3D1pJlRWbp9Tx9bRVBWb6G5KU5Uhg--vp18bHm0TnyVKGUylriFZLqi2s_WbtOJeVB12ome47waPwNG4KRYS1kX7CH_BbLWmEgo1LGvGS4UCzZyEukVATZXELJWEQeSRRyJUo_Di" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center h-24">
                                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Style Guide</span>
                                <h4 className="text-[16px] font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#d41132] transition-colors leading-snug">제인 버킨을 오마주한 '버킨 뱅'과 소프트 레이어</h4>
                            </div>
                        </Link>

                        <Link to="/magazine/men-texture" className="flex items-center gap-5 group cursor-pointer">
                            <div className="size-24 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                                <img alt="Wet Look Style" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7OTtmtOMDRmLQ8dSsc1feOcROzy8aX8sW1vCtr3yBAP8IwsFz03MLg711IFmsT5z_mVAL9sWh3JGkoggKW4ti-3UBekOk7scuYPkyhIFPmhFRGUOYwTjWnUBQg9Pg0ffuJiCQu-pCczXuQNC0ALsQhieMUi6GFMkNGetHJCR66IapDS3BBU9YIZLupD1YnxNqqV09pGvJMSalg441SBjRfnI9LbD1uuTZxUL8tnJphXTnrU4Sx56Pj5gOOBHfCA58XFYNENd3UsiQ" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center h-24">
                                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Editorial</span>
                                <h4 className="text-[16px] font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#d41132] transition-colors leading-snug">내추럴한 텍스처를 살린 남성 커튼 스타일 제안</h4>
                            </div>
                        </Link>
                    </section>
                </main>

                <nav className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-[20px] border-t border-slate-100 dark:border-slate-800 px-10 pb-9 pt-4 flex justify-around items-center z-50">
                    <Link to="/" className="flex flex-col items-center gap-1.5 text-slate-300 dark:text-slate-600 w-1/2">
                        <span className="material-symbols-outlined text-[28px] font-light">home</span>
                        <span className="text-[11px] font-bold tracking-tight">홈</span>
                    </Link>
                    <Link to="/trend-magazine" className="flex flex-col items-center gap-1.5 text-slate-900 dark:text-white w-1/2">
                        <span className="material-symbols-outlined text-[28px] filled-icon">article</span>
                        <span className="text-[11px] font-bold tracking-tight">트렌드</span>
                    </Link>
                </nav>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full z-50"></div>
            </div>
        </div>
    );
}
