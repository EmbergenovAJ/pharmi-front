import {Link} from "react-router-dom";

const data = [
    {
        mainId: 1,
        title: 'Institut',
        link: '/institut',
        subItems: [
            { subId: 1, title: 'Rektor tabrigi', link: '/institut/greeting' },
            { subId: 2, title: 'Institut haqida', link: '/institut/about' },
            { subId: 3, title: 'O`quv binolari', link: '/institut/buildings' },
            { subId: 4, title: 'Institut nizomi', link: '/institut/institut-nizomi' },
            { subId: 5, title: 'Institut pasporti', link: '/institut/pass' },
            { subId: 6, title: 'Institut tuzilmasi', link: '/institut/tuzilma' },
            { subId: 7, title: 'Normativ huquqiy hujjatlar', link: '/institut/docs' },
            { subId: 8, title: "Aloqa ma'lumotlari", link: "/institut/contacts" }]
    },
    {
        mainID: 2,
        title: "Institut tuzilmasi",
        subItems: [
            { subId: 1, title: 'Kuzatuv kengashi', link: '/structure/observ' },
            { subId: 2, title: 'Institut kengashi', link: '/structure/council' },
            { subId: 3, title: 'Institut rahbariyati', link: '/institut-rahbariyati' },
            { subId: 4, title: 'Fakultetlar', link: '/study/bachelor/facult' },
            { subId: 5, title: 'Markazlar', link: '/markazlar' },
            { subId: 6, title: 'Bo`limlar', link: "/bo'limlar" },
            { subId: 7, title: 'Kafedralar', link: '/kafedralar' },
            { subId: 8, title: 'Institut laboratoriyasi', link: '/institut-laboratoriyasi' },
            { subId: 9, title: 'Institut litseyi', link: '/institut-litseyi' },
            { subId: 10, title: 'Institut texnikumlari', link: '/institut-texnikumlari' }
        ]
    },
    {
        mainID: 3,
        title: "O'quv faoliyat",
        subItems: [
            { subId: 1, title: 'Malakaviy tavsifnoma', link: '/malakaviy-tavsifnoma' },
            { subId: 2, title: 'Malaka talablari', link: '/malaka-talablari' },
            { subId: 3, title: 'Reyting nizomi', link: '/reyting-nizomi' },
            { subId: 4, title: 'Ta`lim standartlari', link: '/talima-standartlari' },
            { subId: 5, title: 'O`quv rejalar', link: '/oquv-rejalar' },
            { subId: 6, title: "Na'munaviy fan dasturlari", link: '/namunaviy-fan-dasturlari' },
            { subId: 7, title: 'Kredit-modul tizimi', link: '/kredit-modul-tizimi' },
            { subId: 8, title: 'Talabalar bilimini baholash markazi', link: '/talabalar-bilimini-baholash-markazi' },
            { subId: 9, title: 'Bakalavriat', link: '/facult' },
            { subId: 10, title: 'Magistratura', link: '/magistratura' },
        ]
    },
    {
        mainID: 4,
        title: "Ilmiy faoliyat",
        subItems: [
            { subId: 1, title: "Ilmiy Kengash", link: '/ilmiy-kengash' },
            { subId: 2, title: "Muammo Hay'atlari", link: '/muammo-hayatlari' },
            { subId: 3, title: "Ilmiy faoliyat vazifalari", link: "/ilmiy-faoliyat-vazifal" },
            { subId: 4, title: "Ilmiy jurnallar", link: "/ilmiy-jurnall" },
            { subId: 5, title: "Doktorantura", link: "/doktorantura" },
            { subId: 6, title: "Ilmiy-innovatsion grantlar", link: "/ilmiy-innovatsion-grantlar" },
            { subId: 7, title: "Tibbiy ta'limga tatbiq etilgan ilmiy-tadqiqot ishlar", link: "/tibbiy-talimga-tatbiq-etilgan-ilmiy-tadqiqot-ishlar" },
            { subId: 8, title: "Ilmiy-tadqiqot yo'nalishlari", link: "/ilmiy-tadqiqot-yo'nalishlari" },
            { subId: 9, title: "Ilmiy anjumanlar", link: "/ilmiy-anjumanlar" },
            { subId: 10, title: "Scopus maqolalar repositoriysi", link: "/scopus-maqolalar-repositoriysi" },
            { subId: 11, title: "Ilmiy faoliyatni baholash mezonlari", link: "/ilmiy-faoliyatni-baholash-mezonlari" },
            { subId: 12, title: "Ilmiy maktablar", link: "/ilmiy-maktablar" },
        ]
    },
    {
        mainID: 5,
        title: "Yoshlar bilan ishlash, ma'naviy marifiy faoliyat",
        subItems: [
            { subId: 1, title: "Xodimlar kasaba uyushmasi", link: "/xodimlar-kasaba-uyushmasi" },
            { subId: 2, title: "O'zbekiston yoshlar ittifoqi", link: "/ozbekiston-yoshlar-ittifoqi" },
            { subId: 3, title: "Xotin-qizlar maslahat kengashi", link: "/xotin-qizlat-maslahat-kengashi" },
            { subId: 4, title: "Jamoatchilik kengashi", link: "/jamoatchilik-kengashi" },
            { subId: 5, title: "Talabalarni rag'batlantirish", link: "/talabalarni-ragbatlantirish" },
        ]
    },
    {
        mainID: 6,
        title: "Xalqaro faoliyat",
        subItems: [
            { subId: 1, title: "Xalqaro ta'lim (chet el fuqarolari uchun)", link: "/xalqaro-talim-chet-el-fuqarolari-uchun" },
            { subId: 2, title: "Xalqaro ta'lim loyihalari", link: "/xalqaro-talim-loyhalari" },
            { subId: 3, title: "Xalqaro ta'lim tashkilotlar", link: "/xalqaro-talim-tashkilotlar" },
            { subId: 4, title: "Xalqaro hamkorlik strategiyasi", link: "/xalqaro-hamkorlik-stategiyasi" },
            { subId: 5, title: "Xalqaro grantlar va stipendiyalar", link: "/xalqaro-grantlar-va-stipendiyalar" },
            { subId: 6, title: "Xalqaro faoliyatni baholash mezonlari", link: "/xalqaro-faoliyatni-baholash-mezonlari" },
            { subId: 7, title: "Chet ellik talabalar haqida ma'lumot", link: "/chet-ellik-talabalar-haqida-malumot" },
        ]
    },
    {
        mainID: 7,
        title: "Moliyaviy faoliyat",
        subItems: [
            { subId: 1, title: "Byudjet mablag'lari", link: "/byudjet-mablaglari" },
            { subId: 2, title: "To'lov-kontrakt asosidagi ta'lim mablag'lari", link: "/tolov-kontrakt-asosidagi-talim-mablaglari" },
            { subId: 3, title: "Davlat xaridlari to'g'risidagi ma'lumotlar", link: "/davlat-xaridlari-togrisidagi-malumotlar" },
            { subId: 4, title: "Mansabdor shaxslarning xizmat safarlari va xorijdan tashrif buyurgan mehmonlarni kutib olish xarajatlari to'g'risidagi ma'lumotlar", link: "/mansabdor-shaxslarning-xizmat-safarlari-va-xorijdan-tashrif-buyurgan-mehmonlarni-kutib-olish-xarajatlari-togrisidagi-malumotlar" },
            { subId: 5, title: "Xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to'g'risidagi ma'lumotlar", link: "/xarid-qilinishi-rejalashtirilgan-tovarlar-togrisidagi-malumotlar" },
            { subId: 6, title: "Davlat organlari va tashkilotlari tasarrufidagi xizmat avtomototransport vositalari, xizmat uylari va boshqa ko'chmas mulklar to'g'risidagi ma'lumotlar", link: "/davlat-organlari-va-tashkilotlari-tasarrufidagi-xizmat-avtomototransport-vositalari-xizmat-uylari-va-boshqa-kochmas-mulklar-togrisidagi-malumotlar" },
            { subId: 7, title: "Davlat xaridlari va investitsiya loyihalari doirasida tashkil etiladigan xarid komissiyalarning tarkibi to'g'risidagi ma'lumotlar", link: "/davlat-xaridlari-va-investitsiya-loyihalari-doirasida-tashkil-etiladigan-xarid-komissiyalarning-tarkibi-togrisidagi-malumotlar" },
            { subId: 8, title: "Daromadlar va xarajatlar to'g'risidagi ma'lumotlar", link: "/daromadlar-va-xarajatlar-togrisidagi-malumotlar" },
            { subId: 9, title: "Doimiy foydalanish uchun belgilangan yer maydonlari va boshqa mol-mulklarni davlat-xususiy sheriklik asosida olgan yuridik va jismoniy shaxslar to'g'risidagi ma'lumotlar", link: "/doimiy-foydalanish-uchun-belgilangan-yer-maydonlari-va-boshqa-mol-mulklarni-davlat-xususiy-sheriklik-asosida-olgan-yuridik-va-jismoniy-shaxslar-togrisidagi-malumotlar" },
        ]
    },
    {
        mainID: 8,
        title: "Qabul 2024",
        subItems: [
            { subId: 1, title: "Bakalavriat", link: "/bakalavriat" },
            { subId: 2, title: "Magistratura", link: "/magistratura" },
            { subId: 4, title: "Xorijiy fuqarolar uchun", link: "/xorijiy-fuqar-uchun" },
            { subId: 5, title: "Xalqaro fakultet", link: "/xalqaro-fakultet" },
        ]
    },
    {
        mainID: 9,
        title: "Ta'lim sifati",
        subItems: [
            { subId: 1, title: "Talabalar so'rovnomasi", link: "/talabalar-sorovnomasi" },
            { subId: 2, title: "Ota-onalar so'rovnomasi", link: "/ota-onalar-sorovnomasi" },
            { subId: 3, title: "Ish beruvchilar so'rovnomasi", link: "/ish-beruvchilar-sorovnomasi" },
            { subId: 4, title: "Professor-o'qituvchilar so'rovnomasi", link: "/professor-oqituvchilar-sorovnomasi" },
            { subId: 5, title: "Onlayn murojaat", link: "/onlayn-murojaat" },
            { subId: 6, title: "Reytinglardagi ishtiroki", link: "/reyting-ishtiroki" },
            { subId: 7, title: "Attestatsiya va akkreditatsiya", link: "/attestatsiya-va-akkreditatsiya" },
        ]
    },
    {
        mainID: 10,
        title: "Yangiliklar",
        subItems: [
            { subId: 1, title: "Yangiliklar", link: "/yangiliklar" },
            { subId: 2, title: "Voqealar", link: "/voqealar" },
            { subId: 3, title: "Tanlovlar", link: "/tanlovlar" },
            { subId: 4, title: "E'lonlar", link: "/elonlar" },
            { subId: 5, title: "OAV biz haqimizda", link: "/oav-biz-haqimizda" },
            { subId: 6, title: "Vakansiyalar", link: "/vakansiyalar" },
        ]
    },
    {
        mainID: 11,
        title: "Promo",
        subItems: [
            { subId: 1, title: "Video roliklar", link: "/video-roliklar" },
            { subId: 2, title: "Broshura va buketlar", link: "/broshura-va-buketlar" }
        ]
    },
    {
        mainID: 12,
        title: 'Institut "Veb platformalari"',
        subItems: [
            { subId: 1, title: "Hemis", link: "/hemis" },
            { subId: 2, title: "Portal", link: "/portal" },
            { subId: 3, title: "Moodle", link: "/moodle" },
            { subId: 4, title: "Taqsimot", link: "/taqsimot" }
        ]
    }
]

export const BurgerMenu = (isOpen ,toggleOpen) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:px-20 text-white py-6">
            {data.map(item => {
                return (
                    <div key={item.mainID + 'main'} className="gap-4 flex flex-col">
                        <div>
                            <p className="font-bold text-2xl">{item.title}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {item.subItems.map(subItem => {
                                return <p key={subItem.subId + 'sub'} className="cursor-pointer hover:underline w-fit"><Link to={subItem.link} onClick={() => toggleOpen(!isOpen)}>{subItem.title}</Link> </p>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}