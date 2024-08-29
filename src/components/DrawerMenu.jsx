import { Link } from 'react-router-dom';

const DrawerMenu = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:px-20 text-md'>
            <div className='col-span-1'>
            <h2 className='text-xl uppercase font-semibold text-gray-700'>Institut</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Rektor tabrigi</li>
                    <li className='hover:text-blue-700 cursor-pointer'><Link to='/institut-haqida'>Institut haqida</Link></li>
                    <li className='hover:text-blue-700 cursor-pointer'><Link to='/institut-binolari'>O`quv binolari</Link></li>
                    {/* <li className='hover:text-blue-700 cursor-pointer'>Institut tarixi</li> */}
                    <li className='hover:text-blue-700 cursor-pointer'><Link to='/institut-nizomi'>Institut nizomi</Link></li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut pasporti</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut tuzilmasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Normativ huquqiy hujjatlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Aloqa ma'lumotlari</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Institut tuzilmasi</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Kuzatuv kengashi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut kengashi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut rahbariyati</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Fakultetlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Markazlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Bo'limlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Kafedralar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut laboratoriyasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut litseyi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Institut texnikumlari</li>
                </ul>
            </div>
            <div className='col-span-1'>
            <h2 className='text-xl uppercase font-semibold text-gray-700'>O'quv faoliyat</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Malakaviy tavsifnoma</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Malaka talablari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Reyting nizomi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ta'lim standartlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>O'quv rejalar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Na'munaviy fan dasturlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Kredit-modul tizimi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Talabalar bilimini baholash markazi bilimini baholash</li>
                    <li className='hover:text-blue-700 cursor-pointer'>O'quv faoliyatini baholash mezonlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Bakalavriat</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Magistratura</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Malaka oshirish kurslari</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Ilmiy faoliyat</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy Kengash</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Muammo Hay'atlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy faoliyat vazifalari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy jurnallar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Doktorantura</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy-innovatsion grantlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Tibbiy ta'limga tatbiq etilgan ilmiy-tadqiqot ishlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy-tadqiqot yo'nalishlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy anjumanlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Scopus maqolalarr repositoriysi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy faoliyatni baholash mezonlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ilmiy maktablar</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Yoshlar bilan ishlash, ma'naviy marifiy faoliyat</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Xodimlar kasaba uyushmasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>O'zbekiston yoshlar ittifoqi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xotin-qizlar maslahat kengashi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Jamoatchilik kengashi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Talabalarni rag'batlantirish</li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                </ul>
            </div>
            <div className='col-span-1'>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Xalqaro faoliyat</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro ta'lim (chet el fuqarolari uchun)</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro ta'lim loyihalari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro ta'lim tashkilotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro hamkorlik strategiyasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro grantlar va stipendiyalar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro faoliyatni baholash mezonlari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Chet ellik talabalar haqida ma'lumot</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Moliyaviy faoliyat</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Byudjet mablag'lari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>To'lov-kontrakt asosidagi ta'lim mablag'lari</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Davlat xaridlari to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Mansabdor shaxslarning xizmat safarlari va xorijdan tashrif buyurgan mehmonlarni kutib olish xarajatlari to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Davlat organlari va tashkilotlari tasarrufidagi xizmat avtomototransport vositalari, xizmat uylari va boshqa ko'chmas mulklar to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Davlat xaridlari va investitsiya loyihalari doirasida tashkil etiladigan xarid komissiyalarning tarkibi to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Daromadlar va xarajatlar to'g'risidagi ma'lumotlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Doimiy foydalanish uchun belgilangan yer maydonlari va boshqa mol-mulklarni davlat-xususiy sheriklik asosida olgan yuridik va jismoniy shaxslar to'g'risidagi ma'lumotlar</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Qabul 2024</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Bakalavriat</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Magistratura</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xorijiy fuqarolar uchun</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Xalqaro fakultet</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-gray-700'>Ta'lim sifati</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Talabalar so'rovnomasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ota-onalar so'rovnomasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Ish beruvchilar so'rovnomasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Professor-o'qituvchilar so'rovnomasi</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Onlayn murojaat</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Reytinglardagi ishtiroki</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Attestatsiya va akkreditatsiya</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-blue-gray-700'>Yangiliklar</h2>
                <ul className='font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Yangiliklar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Voqealar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Tanlovlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>E'lonlar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>OAV biz haqimizda</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Vakansiyalar</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-blue-gray-700'>Promo</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Video roliklar</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Broshura va buketlar</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl uppercase font-semibold text-blue-gray-700'>Institut "Veb platformalari"</h2>
                <ul className=' font-medium text-blue-400'>
                    <li className='hover:text-blue-700 cursor-pointer'>Hemis</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Portal</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Moodle</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Taqsimot</li>
                    <li className='hover:text-blue-700 cursor-pointer'></li>
                </ul>
            </div>
        </div>
    );
};

export default DrawerMenu;