import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TrendResults() {
    const location = useLocation();

    // Home.jsx에서 넘어온 단일 이미지 URL이 있으면 그것을 사용, 없으면 데모용 단일 이미지 사용
    const generatedImageUrl = location.state?.generatedImageUrl || "/sample-after-kr.png";
    const originalImage = location.state?.originalImage || "/sample-before-kr.png";

    const handleDownload = async () => {
        const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        try {
            // 1. 이미지를 데이터(Blob)로 가져옵니다.
            const response = await fetch(generatedImageUrl);
            const blob = await response.blob();

            // 2. 스마트폰 네이티브 공유 및 저장 API 우선 시도 (iOS Safari, Android Chrome 등)
            if (isMobile && navigator.canShare) {
                const file = new File([blob], 'hairstyle_ai_result.png', { type: blob.type || 'image/png' });
                if (navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share({
                            files: [file],
                            title: 'HAIRSTYLE AI - 나만의 결과 저장하기'
                        });
                        // 공유/저장 메뉴가 떴다면 여기서 처리가 끝납니다. (사용자가 '이미지 저장'을 누를 수 있음)
                        return;
                    } catch (shareErr) {
                        // 사용자가 취소(AbortError)했거나 권한 문제라면 아래의 PC형 다운로드 방식으로 마저 시도합니다.
                    }
                }
            }

            // 3. 데스크탑(PC) 또는 네이티브 공유가 취소/실패한 경우, 강제 HTML5 다운로드 트리거
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `hairstyle_ai_2026_trend_${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            // 추가 설명: 카카오톡/네이버 인앱 브라우저나 일부 아이폰 환경에서는 위 link.click() 다운로드를 아예 막아버립니다. 
            // 이를 대비해 사용자에게 확실하게 수동 저장법을 안내해줍니다.
            if (isMobile) {
                setTimeout(() => {
                    alert("혹시 자동 다운로드가 안 되셨나요?\n\n모바일 인앱 브라우저(카카오톡, 네이버, 인스타그램 등)나 특정 환경에서는 보안 상 파일 자동 저장이 차단되어 있을 수 있습니다.\n\n해결법: 지금 화면에 보이는 사진을 손가락으로 '길게 꾹' 누르시면 나타나는 메뉴에서 [내 사진첩에 저장]을 직접 선택하실 수 있습니다! 📸");
                }, 500);
            }
        } catch (error) {
            console.error("다운로드 오류:", error);
            alert("이미지 처리 중 예상치 못한 오류가 발생했습니다. 이미지 파일의 크기가 문제일 수 있습니다.\n대신 화면의 이미지를 '길게 꾹' 눌러 직접 저장해주세요!");
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                let shareData = {
                    title: 'HAIRSTYLE AI - 2026 트렌드 헤어',
                    text: '나에게 어울리는 20가지 헤어스타일을 생성해봤어요! 지금 바로 확인해보세요.',
                    url: window.location.origin
                };

                try {
                    // 이미지 파일을 공유용으로 변환 시도 (Web Share API Level 2)
                    const response = await fetch(generatedImageUrl);
                    const blob = await response.blob();
                    const file = new File([blob], 'hairstyle_ai_result.png', { type: blob.type || 'image/png' });

                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        shareData.files = [file];
                    }
                } catch (e) {
                    console.warn("파일 변환 실패 (URL 공유로 대체):", e);
                }

                await navigator.share(shareData);
            } else {
                // 지원하지 않는 브라우저(데스크탑 등)의 경우 클립보드 복사로 대체
                await navigator.clipboard.writeText(window.location.origin);
                alert("링크가 클립보드에 복사되었습니다! 원하는 곳에 붙여넣어 공유해주세요.");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("공유하기 실패:", error);

                // 공유 모듈이 강제 취소/에러 난 경우 클립보드 복사 백업 시도
                try {
                    await navigator.clipboard.writeText(window.location.origin);
                    alert("링크가 클립보드에 복사되었습니다! (공유 기능을 일시적으로 사용할 수 없는 환경입니다)");
                } catch (clipboardErr) {
                    alert("공유하기 기능을 실행할 수 없습니다. 브라우저 설정을 확인해주세요.");
                }
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
