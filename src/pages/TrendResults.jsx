import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TrendResults() {
    const location = useLocation();

    // Home.jsx에서 넘어온 단일 이미지 URL이 있으면 그것을 사용, 없으면 데모용 단일 이미지 사용
    const generatedImageUrl = location.state?.generatedImageUrl || "/sample-after-kr.png";
    const originalImage = location.state?.originalImage || "/sample-before-kr.png";

    const handleDownload = async () => {
        try {
            // Fetch the image as a blob
            const response = await fetch(generatedImageUrl);
            const blob = await response.blob();

            // Create a blob URL
            const url = window.URL.createObjectURL(blob);

            // Create a temporary link element and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = `hairstyle_ai_2026_trend_${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("다운로드 오류:", error);
            alert("이미지 다운로드에 실패했습니다. 다시 시도해 주세요.");
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                // Fetch the image as blob to share the file directly if possible
                const response = await fetch(generatedImageUrl);
                const blob = await response.blob();
                const file = new File([blob], 'hairstyle_ai_result.png', { type: blob.type });

                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        title: 'HAIRSTYLE AI - 2026 트렌드 헤어',
                        text: '나에게 어울리는 20가지 헤어스타일을 확인해보세요!',
                        files: [file]
                    });
                } else {
                    // Fallback to sharing current URL or message without file
                    await navigator.share({
                        title: 'HAIRSTYLE AI - 2026 트렌드 헤어',
                        text: '나에게 어울리는 20가지 헤어스타일을 확인해보세요!',
                        url: window.location.origin
                    });
                }
            } else {
                alert("현재 사용 중인 브라우저에서는 공유하기 기능을 지원하지 않습니다.");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("공유하기 오류:", error);
            }
        }
    };

    return (
        <div className="bg-[#F9F9F9] dark:bg-background-dark text-[#111] dark:text-slate-100 min-h-screen">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between px-4 h-[52px]">
                    <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-full active:opacity-50 transition-opacity text-black dark:text-white">
                        <span className="material-symbols-outlined text-[22px]">arrow_back_ios_new</span>
                    </Link>
                    <h1 className="text-[17px] font-bold tracking-tight">AI 분석 결과</h1>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full active:opacity-50 transition-opacity">
                        <span className="material-symbols-outlined text-[22px]">more_horiz</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-md mx-auto">
                <section className="p-5 flex gap-4 items-center">
                    <div className="relative">
                        <div className="w-[120px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white">
                            <img alt="User original selfie" className="w-full h-full object-cover" src={originalImage} />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-3 py-1 rounded-full font-bold tracking-widest uppercase">Original</div>
                    </div>
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-1 text-accent-blue mb-1">
                            <span className="material-symbols-outlined text-[14px] filled-icon">verified</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#135bec]">Analysis Complete</span>
                        </div>
                        <h2 className="text-[20px] font-extrabold leading-tight tracking-tight mb-2">당신에게 어울리는<br />2026 트렌드 헤어</h2>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-snug">분석 결과 계란형 얼굴에 가장 잘 어울리는 20가지 스타일링이 생성되었습니다.</p>
                    </div>
                </section>

                <section className="px-2 pb-16">
                    <div className="w-full relative shadow-sm border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden bg-white mb-6">
                        {/* 
                            나노바나나 API는 하나의 5x4 Grid가 포함된 단일 이미지를 반환합니다. 
                            따라서 20장으로 자르지 않고 직접 1장의 결과로 렌더링합니다.
                        */}
                        <img
                            alt="20 Hairstyle Grid Generated by AI"
                            className="w-full h-auto object-cover"
                            src={generatedImageUrl}
                        />
                    </div>

                    <div className="flex justify-center gap-3 mb-8 w-full">
                        <button onClick={handleDownload} className="flex-1 bg-white text-black h-[52px] rounded-full flex items-center justify-center gap-2.5 font-bold text-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            <span>전체 저장</span>
                        </button>
                        <button onClick={handleShare} className="flex-1 bg-black text-white dark:bg-slate-800 h-[52px] border border-white/10 rounded-full flex items-center justify-center gap-2.5 font-bold text-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                            <span>SNS 공유하기</span>
                        </button>
                    </div>

                </section>
            </main>



        </div>
    );
}
