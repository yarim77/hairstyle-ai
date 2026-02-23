import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MALE_PROMPT = `Use the uploaded selfie as a strict identity reference.
The face must remain exactly identical.
Do NOT alter facial features.
ONLY change the hairstyle.

Generate ONE image with a 5×4 grid (20 portraits).
Do NOT reduce the number of portraits.
All 20 slots must be filled.

Camera framing:
Head-and-shoulders only.
Cropped at the shoulders.
No arms, no torso.
Front-facing, eye-level.
Neutral background, soft studio lighting.

IMPORTANT STRUCTURE:
Each ROW is a different hairstyle category.
Never merge, skip, or remove a slot.
If two styles look similar, exaggerate differences in length, parting, or texture.

ROW 1 – Ultra Short / Clean:
1. Uniform buzz cut
2. Skin fade buzz cut
3. Clean military cut (square outline)
4. Ultra short textured crop
5. Shaved head (near skin)

ROW 2 – Classic Short:
6. Ivy league with hard side part
7. Low taper classic cut (no fringe)
8. Slick side part (flat, sleek)
9. Blunt short fringe
10. Short textured crop (choppy fringe)

ROW 3 – Medium / Parted:
11. Center-part curtain hair
12. Deep side-part medium hair
13. Comma hair (single curved strand)
14. Soft side-swept medium cut
15. Medium layered actor cut

ROW 4 – Wavy / Long:
16. Shadow perm (subtle wave)
17. Defined S-wave perm
18. Messy textured perm
19. Medium wolf cut
20. Long natural waves

Quality:
High resolution.
Realistic hair texture.
No cartoon or AI artifacts.
This is a hairstyle comparison sheet.`;

const FEMALE_PROMPT = `Use the uploaded selfie as a strict identity reference.
The face must remain exactly identical.
Do NOT alter facial features.
ONLY change the hairstyle.

Generate ONE image with a 5×4 grid (20 portraits).

Camera framing:
Head-and-shoulders only.
Cropped at the shoulders.
No arms, no torso.
Front-facing, eye-level.
Neutral background, soft studio lighting.

Style rules:
Ultra-realistic Korean female hairstyle trends (2026).
Each hairstyle must differ clearly in length, bangs, parting, or texture.

Hairstyles:
1. Ultra short pixie
2. Long pixie with fringe
3. French bob with blunt bangs
4. Chin-length layered bob
5. Blunt straight bob
6. Shaggy textured bob
7. Lob with soft waves
8. Straight lob with center part
9. Medium layered cut (no bangs)
10. Curtain bangs with medium hair
11. Wispy bangs with soft waves
12. Shoulder-length natural perm
13. Defined S-wave perm
14. Loose beach waves
15. Straight long hair with curtain fringe
16. Face-framing long layers
17. Soft spiral perm (long hair)
18. Sleek long straight hair
19. Modern shag cut
20. Actor-style natural long waves

Quality:
High resolution.
Realistic hair texture.
No beauty filter.
No cartoon or AI artifacts.
This is a hairstyle comparison sheet.`;

export default function Home() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [gender, setGender] = useState('male');
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleButtonClick = (selectedGender) => {
        if (isGenerating) return;
        setGender(selectedGender);
        fileInputRef.current?.click();
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    // 이미지 압축 로직 (최대 1024px, 품질 80%) -> Payload Too Large CORS 에러 방지
                    const MAX_WIDTH = 1024;
                    const MAX_HEIGHT = 1024;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
                    resolve(compressedBase64);
                };
                img.onerror = (error) => reject(error);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleGenerate = async () => {
        if (!selectedFile) {
            alert("먼저 정면 셀카를 업로드해주세요.");
            return;
        }

        setIsGenerating(true);

        try {
            const apiKey = import.meta.env.VITE_NANOBANANA_API_KEY;

            if (!apiKey) {
                // API 키가 없을 때의 목업 시뮬레이션
                alert("VITE_NANOBANANA_API_KEY가 설정되지 않아 테스트용 결과 화면으로 이동합니다. (.env 파일을 확인해주세요)");

                const base64Image = await fileToBase64(selectedFile);
                await new Promise(resolve => setTimeout(resolve, 3000));

                navigate('/trend-results', { state: { originalImage: base64Image } });
                return;
            }

            // 진짜 나노바나나 API 연동
            const base64Image = await fileToBase64(selectedFile);

            const promptToUse = gender === 'female' ? FEMALE_PROMPT : MALE_PROMPT;

            // API 키가 'AIzaSy'로 시작한다면 Google AI Studio (Gemini) 키입니다.
            let API_ENDPOINT = "https://api.nanobananaapi.ai/api/v1/nanobanana/generate";
            let requestBody = {
                prompt: promptToUse,
                images: [base64Image],
                model: "google/nano-banana-pro", // 혹은 nano-banana
                aspect_ratio: "1:1"
            };

            // 구글 자체 엔드포인트 세팅 (Google AI Studio Key일 경우)
            if (apiKey.startsWith("AIzaSy")) {
                // Gemini API 엔드포인트 (기본 모델으로 폴백)
                API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent?key=${apiKey}`;

                // base64 문자열에서 헤더(data:image/jpeg;base64,)를 제거하여 순수 데이터 부분 추출
                const base64Data = base64Image.split(',')[1];
                const mimeType = base64Image.split(';')[0].split(':')[1] || "image/jpeg";

                // Gemini API 스펙에 맞는 request body 구성
                requestBody = {
                    contents: [
                        {
                            parts: [
                                { text: promptToUse },
                                {
                                    inlineData: {
                                        mimeType: mimeType,
                                        data: base64Data
                                    }
                                }
                            ]
                        }
                    ]
                };
            }

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 구글 API는 url parameter로 key를 받으므로 헤더에 Bearer 생략
                    ...(!apiKey.startsWith("AIzaSy") && { 'Authorization': `Bearer ${apiKey}` })
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                const errMsg = errData.error?.message || errData.message || `API 요청 실패 (코드: ${response.status})`;

                if (response.status === 429 && errMsg.includes("Quota exceeded")) {
                    throw new Error("Google AI Studio 무료 티어 계정은 나노바나나(gemini-3-pro-image)의 할당량이 0건입니다.\n\n결제가 연동된 계정의 API 키를 사용하시거나 서드파티 Nano Banana API 키를 사용해주세요.");
                }

                throw new Error(errMsg);
            }

            const data = await response.json();

            let generatedImageUrl = null;

            if (apiKey.startsWith("AIzaSy")) {
                // Google AI Studio (gemini-3-pro-image-preview) 응답 포맷 추출 
                let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                let parsedResult = null;

                if (responseText) {
                    // 마크다운 JSON 형식이 씌워져 돌아올 수 있으므로 완전 제거
                    const cleanJsonStr = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
                    try {
                        parsedResult = JSON.parse(cleanJsonStr);
                    } catch (e) {
                        // ignore parse error and fallback
                    }
                }

                if (parsedResult && (parsedResult.image_url || parsedResult.url)) {
                    generatedImageUrl = parsedResult.image_url || parsedResult.url;
                } else {
                    const base64Output = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
                    if (base64Output) {
                        const outMime = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || 'image/png';
                        generatedImageUrl = `data:${outMime};base64,${base64Output}`;
                    } else if (responseText && responseText.includes("http")) {
                        // URL이 텍스트에 덩그러니 있을 때 추출
                        const urlMatch = responseText.match(/https?:\/\/[^\s"']+/);
                        if (urlMatch) {
                            generatedImageUrl = urlMatch[0];
                        }
                    } else if (responseText) {
                        // 구글이 이미지 반환을 거부하고 경고 문구를 보냈을 때
                        throw new Error(`AI의 거절 메시지: ${responseText}`);
                    }
                }
            } else {
                // 서드파티 Nano Banana 응답 포맷 추출
                generatedImageUrl = data.image_url || data.images?.[0] || data.output?.[0] || data.url;
            }

            if (generatedImageUrl) {
                navigate('/trend-results', { state: { generatedImageUrl, originalImage: base64Image } });
            } else {
                throw new Error("API 응답에서 이미지 URL을 찾을 수 없습니다.");
            }

        } catch (error) {
            console.error("생성 중 오류 발생:", error);

            const isCorsOrNetworkError = error.message.includes("Failed to fetch") || error.message.includes("NetworkError");

            if (isCorsOrNetworkError) {
                alert(`API 통신 실패 (사진 용량이 너무 커서 차단되었거나 인터넷 연결 문제가 있을 수 있습니다.)\n\n오류: ${error.message}\n\n(오류로 인해 테스트 시뮬레이션 모드로 넘어갑니다.)`);
            } else {
                alert(`이미지 생성 중 오류가 발생했습니다.\n${error.message}\n\n(시뮬레이션 모드로 테스트 화면으로 이동합니다.)`);
            }

            // 사용자가 계속 무한로딩 화면에 머무르지 않도록 테스트 화면으로 강제 전환
            const fallbackBase64Image = await fileToBase64(selectedFile).catch(() => null);
            navigate('/trend-results', { state: { originalImage: fallbackBase64Image } });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans antialiased">
            <header className="sticky top-0 z-50 flex items-center justify-center h-[60px] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
                <h1 className="text-[17px] font-semibold tracking-tight text-white">HAIRSTYLE AI</h1>
            </header>

            <main className="flex-1 px-5 pt-8 pb-32 max-w-md mx-auto w-full">
                <div className="mb-10 text-center">
                    <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white">
                        셀카 한 장으로<br />
                        <span className="text-white">20가지 스타일</span> 비교
                    </h2>
                    <p className="text-white/60 text-[15px] font-normal mt-3">나에게 가장 잘 어울리는 2026 트렌드 찾기</p>
                </div>

                <div className="mb-10 bg-slate-900 rounded-[24px] p-5 shadow-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">AI Preview</span>
                        <div className="flex gap-1.5">
                            <span className="text-[10px] font-semibold bg-[#1a1a1a] border border-white/10 text-white/70 px-2.5 py-1 rounded-full">Natural AI</span>
                            <span className="text-[10px] font-semibold bg-white text-black px-2.5 py-1 rounded-full">2026 TREND</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-1/3 relative group">
                            <img alt="Original selfie" className="w-full aspect-[3/4.2] object-cover rounded-xl" src={selectedImage || "/sample-before-kr.png"} />
                            <div className="absolute inset-0 bg-black/20 rounded-xl border border-white/10"></div>
                            <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">Before</div>
                        </div>

                        <div className="w-2/3 relative bg-black/50 rounded-xl overflow-hidden border border-white/10">
                            <div className="grid-preview h-full">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <img key={i} alt={`style ${i + 1}`} className="aspect-square object-cover opacity-80" src={selectedImage || "/sample-after-kr.png"} />
                                ))}
                            </div>
                            <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm border border-black/5">After (20 styles)</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                    />
                    {!selectedFile ? (
                        <div className="flex gap-3">
                            <button onClick={() => handleButtonClick('male')} className="flex-1 flex flex-col items-center justify-center border border-dashed border-blue-500/30 bg-[#111] py-10 rounded-[24px] hover:border-blue-500/60 transition-all active:bg-[#1a1a1a] shadow-lg group">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-[28px] text-blue-400">man</span>
                                </div>
                                <h3 className="text-[15px] font-semibold mb-1 tracking-tight text-white">남자 셀카 업로드</h3>
                                <p className="text-white/40 text-[11px] font-normal mt-1">남성 추천 스타일 20</p>
                            </button>
                            <button onClick={() => handleButtonClick('female')} className="flex-1 flex flex-col items-center justify-center border border-dashed border-pink-500/30 bg-[#111] py-10 rounded-[24px] hover:border-pink-500/60 transition-all active:bg-[#1a1a1a] shadow-lg group">
                                <div className="w-14 h-14 bg-pink-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-[28px] text-pink-400">woman</span>
                                </div>
                                <h3 className="text-[15px] font-semibold mb-1 tracking-tight text-white">여자 셀카 업로드</h3>
                                <p className="text-white/40 text-[11px] font-normal mt-1">여성 추천 스타일 20</p>
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center border border-solid border-green-500/30 bg-[#111] py-8 px-6 rounded-[24px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none"></div>

                            <div className="relative w-24 h-24 mb-5 rounded-full overflow-hidden border-4 border-[#1a1a1a] shadow-[0_0_0_2px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_0_4px_rgba(34,197,94,0.4)] transition-all">
                                <img src={selectedImage} alt="Uploaded selfie" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay"></div>
                                <div className="absolute top-1 right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-[14px] text-white">check</span>
                                </div>
                            </div>

                            <p className="text-white text-[16px] font-bold tracking-tight mb-1">
                                사진 업로드 완료!
                            </p>
                            <p className="text-white/50 text-[13px] mb-6">
                                {gender === 'male' ? '남성' : '여성'} 스타일 분석 준비됨
                            </p>

                            <div className="flex gap-2 w-full max-w-[200px]">
                                <button onClick={() => handleButtonClick(gender)} className="flex-1 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white text-[13px] py-2.5 rounded-xl transition-colors font-medium tracking-tight flex items-center justify-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px]">replay</span>
                                    다시 선택
                                </button>
                                <button onClick={() => { setSelectedFile(null); setSelectedImage(null); }} className="px-4 bg-[#1a1a1a] hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 border border-white/10 text-white/50 text-[13px] py-2.5 rounded-xl transition-all font-medium flex items-center justify-center">
                                    취소
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`w-full font-semibold text-[16px] py-4.5 rounded-full shadow-lg h-[56px] flex items-center justify-center gap-2 transition-all ${isGenerating
                            ? "bg-slate-800 text-white/50 cursor-not-allowed"
                            : "bg-white text-black hover:bg-slate-200 active:scale-[0.98]"
                            }`}
                    >
                        {isGenerating ? (
                            <>
                                <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                                AI가 헤어스타일을 생성중입니다... (약 1분 소요)
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[20px]">face_retouching_natural</span>
                                AI 분석 시작하기
                            </>
                        )}
                    </button>
                </div>
            </main>
        </div>
    );
}
