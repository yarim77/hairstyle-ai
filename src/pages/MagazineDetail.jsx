import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MAGAZINE_DATA = {
    'american-vintage': {
        category: "Editor's Choice",
        title: "American Vintage\n& Naturalism",
        description: "2026년 핵심 트렌드, 인위적인 꾸밈을 벗고 본연의 결감과 자연스러운 볼륨을 살리다.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDERwbenH3sHDU4k3zszvFovPVvHxoX0fR_aHusIGIZQFqMe61TIG0gVJ2kMd6HXsTI7EIWjiiMmKLOB8B2dZyvm2s9MnHOdSrwvPPrWOneNQmp0yseiTDOFRSbeoDi-qcT-uX6akH2EfaR-TFh3XeLAugd0hakG-hNeO9ORoAsDcj1yCg4Uk89wtQPuUDd8xWzBryLT5FmwY-0ToDzwvirDZWKttmnXMNh9MPrFoqLMX5Hgsi3WAW8XcmZ2V8KBH-MYxMTcsaDJ3Ny",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">2026년을 관통하는 가장 주요한 키워드는 바로 '자연스러움'과 '본연의 아름다움'입니다. 완벽하게 세팅된 인위적인 헤어보다는, 개개인의 곱슬기나 생머리가 가진 특징을 살려 내추럴한 텍스처를 강조하는 ‘아메리칸 빈티지(American Vintage)’ 무드가 큰 각광을 받고 있습니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">특히 1990년대 영화와 TV 시리즈 속에서 영감을 얻은 이 스타일은, 손으로 대충 빗어 넘긴 듯한 러프함을 특징으로 합니다. 과도한 고데기나 정형화된 컬 대신 블로우 드라이로 가볍게 공기를 불어넣은 듯한 볼륨감이 핵심입니다. 텍스처를 살리기 위해 가벼운 헤어 오일이나 무스를 활용하면 훨씬 세련된 연출이 가능합니다.</p>
            <h3 class="text-xl font-bold mt-8 mb-4">Styling Tip</h3>
            <p class="text-[15px] leading-loose text-slate-700 dark:text-slate-300">너무 무거운 젤이나 포마드 대신, 모발 속부터 채우는 수분 에센스와 부드러운 컬 크림을 추천합니다. 정수리 볼륨은 살리되 끝선은 가볍게 떨어지도록 커트하는 것이 중요합니다.</p>
        `
    },
    'pixie-cut': {
        category: "Modern Classic",
        title: "픽시 컷의 로맨틱한 귀환",
        description: "부드럽고 관능적인 무드로 재해석된 2026 픽시 컷 트렌드",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBn71vy6uuplgnu7KTxdg1bp_DJfjuVjUE0VLZUiJx5xOYvJu9a2-NJ8P3DaC1CdyXhr_73UEksKiTfGS1N3I4tBfN_0IA6VxUN_6uf8wsNxrl3H8SQvu9auVYg-E9HVGj7K6zhxEAeb_F4kMzMCNMu29gcp7hWVqd2rV3BNR5Nmt0xJ1AbAPPqMboJtnPUKpA6aOmtyRnveb3kRP7Zy6eQmhWY4Wde8GzX5udBrKVj3ic6Cb6B-fsLmdc5uFgN_DWfiZVpW3YK91",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">기존의 픽시 컷이 보이시하고 중성적인 매력을 강조했다면, 2026년의 픽시 컷은 한층 부드럽고 관능적으로 진화했습니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">앞머리나 구레나룻 주변 기장을 조금 길게 남기고 레이어를 층층이 내어 얼굴형을 부드럽게 감싸는 실루엣이 유행입니다. 귀 뒤로 무심하게 꽂은 머리 사이로 드러나는 턱선이 픽시 컷 특유의 세련된 분위기를 더욱 돋보이게 합니다.</p>
        `
    },
    'natural-perm': {
        category: "Naturalism",
        title: "우아하고 풍성한 볼륨감",
        description: "글래머 펌과 엘리자벳 펌",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgB-9VkHFP1216gQiKI6eODypnQ_SLYybwx2NCht6bcaT6vJIVhyyD8r21bpAc6-qiszBYL8LgpOueMsP2qjr3akMqru6hRrR7SiVhXcThTbX2l77wQ-k14n2iRtZbR5UeErxh_LyCQT56uU-q0xv0voOvJ6g4e8t-H1zgJOH8evudbXsYWzsVWACtWzr-kBBRYbhmKNnqT1Ntd8q8HguA4OmcGcf74_NSoIif3TiIS-HKJtHPDSUzgb8tIDGG48fsstlEi7gqKVQV",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">긴 머리의 경우 뿌리부터 강하게 말아 올리는 히피 펌 대신, 굵고 우아하게 떨어지는 볼륨 펌이 트렌드를 주도합니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">대표적으로 탄력있는 S컬이 얼굴선을 감싸며 우아함을 주는 '엘리자벳 펌'이나, 층이 들어간 헤어에 풍부한 볼륨감을 얹어 섹시하고 성숙한 느낌을 내는 '글래머 펌' 등이 인기를 끌고 있습니다. 과한 열기구나 세팅 대신 굵은 구르프(헤어 롤)를 사용해 집에서도 손쉽게 데일리로 관리할 수 있다는 것이 가장 큰 장점입니다.</p>
        `
    },
    'color-melting': {
        category: "Color of 2026",
        title: "Color Melting",
        description: "경계 없이 자연스럽게 스며드는 입체적이고 세련된 광채 컬러",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgKPFlWuUjTa1Lp4JA1QufHpwcj46T6DFSaFyIKLOrhuKfXjtagUxkY-05oL3Wbi0kLOp-O5Ecpz9u9Alm86E3kmgIFGh4j4Kd9fXsPKetEo_85oh-vZdzMZ4zGdiEUDPAhuuhmrEdyPcdTrKebCOFqt8o7BnNRXtfZgkohfiWMw02silFCZI6M06sneDRzJ7b-l9qCqvJb0K41CNZc4Apg80LNEBw1G-heiUF8LibkmUtkfA13sVXWhGMzdmE0RNvuXdhSXgqikTC",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">염색 트렌드에도 큰 변화가 찾아왔습니다. 플래티넘 블론드나 원색적인 컬러보다는 은은하게 결이 이어지는 '컬러 멜팅(Color Melting)' 기법이 대세입니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">뿌리부터 모발 끝까지 3~4가지의 비슷한 톤(예: 애쉬 밀크 브라운, 허니 블론드, 웜 샌드)을 겹겹이 섬세하게 발라, 하이라이트 경계 없이 완벽하게 스며들도록 연출합니다. 이 기법은 모발의 텍스처를 가장 아름답게 부각해주며 빛이 반사될 때마다 오묘하고 입체적인 매력을 제공합니다.</p>
        `
    },
    'birkin-bang': {
        category: "Style Guide",
        title: "제인 버킨을 오마주한 '버킨 뱅'",
        description: "비울수록 채워지는 아름다움과 소프트 레이어",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkMSVuP4jgfGjz7Gakg2uiPCzok5EqF7aL8pY3NzOHSndQqDZZUkHaGZA9awZ0tnw7vOt-hoHzGVSOJYoy9wIGVWgMC5Tr4smvVgBYI0j7e3bp58aNCykTLaZC3CA7qDke9xIT3D1pJlRWbp9Tx9bRVBWb6G5KU5Uhg--vp18bHm0TnyVKGUylriFZLqi2s_WbtOJeVB12ome47waPwNG4KRYS1kX7CH_BbLWmEgo1LGvGS4UCzZyEukVATZXELJWEQeSRRyJUo_Di",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">아이코닉한 스타일 아이콘 '제인 버킨'의 이름을 딴 버킨 뱅(Birkin Bang)이 2026년 여름 시즌부터 돌풍을 일으키고 있습니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">끝이 일정하지 않고 자유롭게 이마를 덮으면서 옆머리로 자연스럽게 흘러가는 앞머리가 특징입니다. 풀뱅보다 가볍고 사이드 뱅보다 프렌치한 감성이 가득하여, 묶었을 때 특히 아름다운 실루엣을 그려냅니다.</p>
        `
    },
    'men-texture': {
        category: "Editorial",
        title: "내추럴한 텍스처를 살린 남성 커튼 스타일",
        description: "The Wet Look & 텍스처 커트의 2026 트렌드 제안",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7OTtmtOMDRmLQ8dSsc1feOcROzy8aX8sW1vCtr3yBAP8IwsFz03MLg711IFmsT5z_mVAL9sWh3JGkoggKW4ti-3UBekOk7scuYPkyhIFPmhFRGUOYwTjWnUBQg9Pg0ffuJiCQu-pCczXuQNC0ALsQhieMUi6GFMkNGetHJCR66IapDS3BBU9YIZLupD1YnxNqqV09pGvJMSalg441SBjRfnI9LbD1uuTZxUL8tnJphXTnrU4Sx56Pj5gOOBHfCA58XFYNENd3UsiQ",
        content: `
            <p class="mb-5 text-lg font-medium leading-relaxed">남성 헤어에서도 인위적인 포마드 세팅보다는 결감을 살린 내추럴 스타일이 런웨이를 휩쓸고 있습니다.</p>
            <p class="mb-5 text-[15px] leading-loose text-slate-700 dark:text-slate-300">가르마를 자연스럽게 타서 내리는 '커튼 스타일(Curtain hair)'에 끝을 가볍게 질감 처리하여 답답해 보이지 않도록 하는 것이 특징입니다. 특별한 모임이 있을 때는 웨트 오일이나 수분 젤을 가볍게 발라 샤워하고 막 나온 듯한 촉촉한 '웨트 룩(Wet Look)'으로 연출하면 에디토리얼 모델 같은 분위기를 발산할 수 있습니다.</p>
        `
    }
};

export default function MagazineDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const article = MAGAZINE_DATA[id];

    if (!article) {
        return (
            <div className="flex bg-[#F8F8F8] dark:bg-[#0a0a0a] min-h-screen items-center justify-center font-sans antialiased text-slate-900 dark:text-slate-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">아티클을 찾을 수 없습니다.</h1>
                    <button onClick={() => navigate('/trend-magazine')} className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold">목록으로 돌아가기</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F8F8] dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 antialiased font-sans">
            <div className="relative mx-auto min-h-screen max-w-[430px] bg-white dark:bg-slate-950 shadow-2xl overflow-hidden flex flex-col">


                <div className="relative w-full h-[55dvh] overflow-hidden">
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20 flex flex-col justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="mt-[60px] ml-5 w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white"
                        >
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </button>

                        <div className="p-7">
                            <span className="inline-block px-2.5 py-1 bg-[#d41132] text-white text-[10px] font-black tracking-[0.1em] rounded-sm mb-3 uppercase">
                                {article.category}
                            </span>
                            <h1 className="text-[34px] font-black text-white leading-[1.2] mb-3 tracking-tight whitespace-pre-line">
                                {article.title}
                            </h1>
                            <p className="text-white/80 text-[15px] font-medium leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>

                <main className="flex-1 overflow-y-auto no-scrollbar pb-32 pt-8 px-7 bg-white dark:bg-slate-950 relative -mt-6 rounded-t-[30px]">
                    <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-8"></div>

                    <div
                        className="text-slate-800 dark:text-slate-200 prose-p:mb-5 prose-p:leading-loose prose-h3:text-lg prose-h3:font-bold prose-h3:mb-3"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-12 flex justify-center">
                        <button onClick={() => navigate('/trend-magazine')} className="px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-full text-[14px] font-bold shadow-sm inline-flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">featured_play_list</span>
                            매거진 목록
                        </button>
                    </div>
                </main>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full z-50"></div>
            </div>
        </div>
    );
}
