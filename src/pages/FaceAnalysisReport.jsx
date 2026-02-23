import React from 'react';
import { Link } from 'react-router-dom';

export default function FaceAnalysisReport() {
    return (
        <div className="bg-white dark:bg-[#0a0a0c] font-sans text-slate-900 dark:text-slate-100">
            <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-[#0a0a0c] max-w-[430px] mx-auto shadow-2xl overflow-x-hidden pb-32">
                <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-xl px-5 py-4 justify-between">
                    <div className="flex items-center w-10">
                        <Link to="/" className="material-symbols-outlined text-slate-900 dark:text-slate-100 cursor-pointer text-2xl font-light">chevron_left</Link>
                    </div>
                    <h1 className="text-slate-900 dark:text-slate-100 text-[17px] font-bold tracking-tight">얼굴형 분석 리포트</h1>
                    <div className="flex items-center justify-end w-10">
                        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100 cursor-pointer text-xl font-light">ios_share</span>
                    </div>
                </header>

                <section className="px-5 pt-4">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 group">
                        <img alt="AI Face Analysis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL4CNCLySVPD81IkXvmLs-U3dWue4pIRYiU8Sx-K54NfnutrU6QJLx-Q3yVzTtFyTuvH88X2DfP0sLfgp0YStQOzDbYxPxyzbQuLqpY7hsoIdkjnJYsmuhINrN3GtqVHZaIhA_3pRcj_HtfA2E49nyqweWrsFiB0sWo2jbpgSRw1Tj3D6pccd5BV2XF_5tlUfUJBNXsPHZu4-dO0xO0Zy_pZpaOWLrYHtw-XHFRuV40XzUMC597rdc_nRz8us9vx2uIlwBOnCoLX8g" />
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/10"></div>
                            <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#135bec]/60"></div>
                            <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#135bec]/60"></div>
                            <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#135bec]/60"></div>
                            <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#135bec]/60"></div>

                            <div className="absolute top-[32%] left-[34%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                            <div className="absolute top-[32%] left-[66%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                            <div className="absolute top-[52%] left-[50%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                            <div className="absolute top-[72%] left-[50%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                            <div className="absolute top-[65%] left-[28%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                            <div className="absolute top-[65%] left-[72%] w-1 h-1 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>

                            <div className="absolute w-full h-[2px] opacity-40 top-1/2 left-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(19, 91, 236, 0.5), transparent)', boxShadow: '0 0 15px rgba(19, 91, 236, 0.8)' }}></div>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[88%] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl py-5 px-6 rounded-2xl shadow-2xl border border-white/20 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-1">
                                <span className="material-symbols-outlined text-[#135bec] text-[14px] font-bold">verified</span>
                                <p className="text-[10px] text-[#135bec] font-bold uppercase tracking-[0.2em]">AI ANALYSIS COMPLETE</p>
                            </div>
                            <p className="text-slate-900 dark:text-white text-[20px] font-bold">귀하의 얼굴형은 <span className="text-[#135bec]">계란형</span> 입니다</p>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <div className="px-5 mb-5 flex justify-between items-end">
                        <div>
                            <h2 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">Top 3 추천 스타일</h2>
                            <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">얼굴형에 최적화된 2026 트렌드</p>
                        </div>
                        <button className="text-[13px] font-semibold text-[#135bec]/80 hover:text-[#135bec] transition-colors flex items-center gap-0.5">
                            전체보기 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                    </div>

                    <div className="flex overflow-x-auto pb-6 px-5 gap-5 no-scrollbar">
                        <div className="flex-none w-64">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 group cursor-pointer">
                                <img alt="As Perm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKaDPnjWOdXq9dqK9_9IuOc5i1lI-myvejpVgC-oovoD4XgSBxVhbtHiHKeLUxABldhOR78nRSGip1zm_nsPwsWeGISYQTAQmSQlXWuZEW6HWebFoaNepJJlz95vbDLm357z_1apc30k6wjm1KhIo3J-EkfLD5B2f6JTCFWTctXkX43JygiFSlGDWO6wROtE4cfsrel_9b0hWPChVsHLqqpEQua8V4Ef2vkKieKEhjBgUgxy8Rtqofh63HSaiLpRMlh3XoHnnu7rdN" />
                                <div className="absolute top-4 left-4 bg-[#135bec]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                                    MATCH 98%
                                </div>
                            </div>
                            <div className="px-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-[17px]">애즈 펌</h3>
                                <p className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-snug mt-1.5">이마를 살짝 드러내어 계란형의 장점을 극대화하고 턱선을 부드럽게 보완합니다.</p>
                            </div>
                        </div>

                        <div className="flex-none w-64">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 group cursor-pointer">
                                <img alt="Leaf Cut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2xicnK-NrcmaDuxWB2Ap61EWqgKUl9OPoUHWvDRyqm_5iWDCYenEz2MHtzhimK9it2X1CayBGHPFDdEDncPe4S2ABlSP_Qd6bUz--MT6oJB4TQDxqMIEf94YZ7QDJRjcLG-iW6MISFS1W3SzDoz0m5wiLNhocWDk3m1ntdfLN8rTDX45U240vhQZPs_8uL4wrRrF7P3VLHHijyrD_Qm8OF2KcdYWBZex1T3CMd8_5RYeCNYNAJ1dgXiHxTc8ckzOgaFCPS3UEUhI" />
                                <div className="absolute top-4 left-4 bg-[#135bec]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                                    MATCH 95%
                                </div>
                            </div>
                            <div className="px-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-[17px]">리프 컷</h3>
                                <p className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-snug mt-1.5">자연스럽게 흐르는 옆머리가 광대 라인을 슬림하게 연출해줍니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-6 px-5">
                    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800/50">
                        <h2 className="text-[16px] font-bold text-slate-900 dark:text-white mb-10 text-center tracking-tight">상세 비율 분석</h2>
                        <div className="relative w-full aspect-square max-w-[200px] mx-auto mb-10 flex items-center justify-center">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                                <polygon style={{ stroke: '#e2e8f0', strokeWidth: 0.5, fill: 'none' }} points="50,10 90,50 50,90 10,50"></polygon>
                                <polygon style={{ stroke: '#e2e8f0', strokeWidth: 0.5, fill: 'none' }} points="50,25 75,50 50,75 25,50"></polygon>
                                <line style={{ stroke: '#e2e8f0', strokeWidth: 0.5 }} x1="50" x2="50" y1="10" y2="90"></line>
                                <line style={{ stroke: '#e2e8f0', strokeWidth: 0.5 }} x1="10" x2="90" y1="50" y2="50"></line>
                                <polygon style={{ fill: 'rgba(19, 91, 236, 0.15)', stroke: '#135bec', strokeWidth: 2, strokeLinejoin: 'round' }} points="50,18 82,50 50,82 18,50"></polygon>
                                <text className="fill-slate-400 dark:fill-slate-500 font-bold" fontSize="5" textAnchor="middle" x="50" y="2">상안부</text>
                                <text className="fill-slate-400 dark:fill-slate-500 font-bold" fontSize="5" textAnchor="start" x="96" y="52">가로폭</text>
                                <text className="fill-slate-400 dark:fill-slate-500 font-bold" fontSize="5" textAnchor="middle" x="50" y="101">하안부</text>
                                <text className="fill-slate-400 dark:fill-slate-500 font-bold" fontSize="5" textAnchor="end" x="4" y="52">세로폭</text>
                            </svg>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-slate-100/80 dark:border-slate-800">
                                <p className="text-[11px] text-slate-400 font-bold uppercase mb-1.5 tracking-wider">비율 균형</p>
                                <p className="text-[17px] font-bold text-slate-900 dark:text-white">최상 <span className="text-[#135bec] text-[14px] ml-1">98%</span></p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-slate-100/80 dark:border-slate-800">
                                <p className="text-[11px] text-slate-400 font-bold uppercase mb-1.5 tracking-wider">황금비율</p>
                                <p className="text-[17px] font-bold text-slate-900 dark:text-white">A+ <span className="text-[#135bec] text-[14px] ml-1">등급</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="px-5 mt-10 mb-6">
                    <Link to="/trend-results" className="w-full bg-[#111111] dark:bg-white dark:text-[#111111] text-white font-bold h-[58px] rounded-2xl shadow-xl shadow-slate-200 dark:shadow-none transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
                        <span className="text-[16px]">모든 추천 스타일 보기</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-2xl border-t border-slate-100 dark:border-slate-800/50">
                    <div className="max-w-[430px] mx-auto flex items-center justify-around px-2 pt-3 pb-8">
                        <Link to="/" className="flex flex-col items-center gap-1 w-1/2 group">
                            <span className="material-symbols-outlined text-[26px] text-slate-400 group-hover:text-[#111111] transition-colors font-light">home</span>
                            <span className="text-[11px] font-medium text-slate-400 group-hover:text-[#111111]">홈</span>
                        </Link>
                        <Link to="/trend-magazine" className="flex flex-col items-center gap-1 w-1/2 group">
                            <span className="material-symbols-outlined text-[26px] text-slate-400 group-hover:text-[#111111] transition-colors font-light">auto_awesome</span>
                            <span className="text-[11px] font-medium text-slate-400 group-hover:text-[#111111]">트렌드</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
