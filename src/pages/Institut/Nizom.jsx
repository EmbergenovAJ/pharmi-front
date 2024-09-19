import { Card, Typography, Drawer, IconButton, Button } from "@material-tailwind/react";

import React from "react";
const TABLE_HEAD = [ "F.I.SH.", "Lavozimi"];
 
const TABLE_ROWS = [
  {
    name: "Z.U.Mamatqulov",
    job: "O`quv ishlari bo`yicha prorektor",
  },
  {
    name: "I.R.Sagatov",
    job: "Yoshlar masalalari va ma`naviy-ma`rifiy ishlar bo`yicha prorektor",
  },
];

const Nizom = () => {

    const [open, setOpen] = React.useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };
     
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);


    return (
        <div>
            <div>
            <div size="md" onClick={openDrawer} className="">
                {isDrawerOpen ? 
                <Button>X</Button>
                 : 
                <Button>Mundarija</Button>
                }
            </div>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
            <Card>
                <h3>Mundarija</h3>
                <ul>
                    <li>1-bob. Umumiy qoidalar</li>
                    <li>2-bob. Mehnat shartnomasini tuzish, o‘zgartirish va bekor qilish</li>
                    <li>3-bob. Ish vaqti, dam olish vaqti hamda ulardan foydalanish</li>
                    <li>4-bob. Ta’limni tashkil etish tartibi, mehnat va o‘quv intizomi</li>
                    <li>5-bob. Binolar ichidagi tartib.</li>
                    <li>6-bob. Ish va o‘qishdagi yutuqlari uchun rag‘batlantirish</li>
                    <li>7-bob. Mehnat va o‘quv intizomini buzganlik uchun javobgarlik</li>
                    <li>8-bob. Alohida qoidalar</li>
                    <li>9-bob. Yakuniy qoidalar</li>
                </ul>
            </Card>
            </Drawer>
            </div>
            
        <div>
            <p>Mazkur “Ichki tartib qoidalari” Toshkent farmatsevtika institut Kengashining 2022-yil “ 2”-fevral kunidagi “6”-sonli yig'ilishida muhokama qilingan va ma'qullangan.
     «Ichki tartib qoidalari » (ichki mehnat tartibi qoidalari) institut rektorining 2022-yil 2-fevral kunidagi 58-sonli buyrug'i asosida ishlab chiqildi.
     Ushbu «Ichki tartib qoidalari » (keyingi o‘rinlarda - Qoidalar) O‘zbekiston Respublikasining Mehnat kodeksi, “Ta’lim to‘g‘risida”gi Qonuni, oliy ta’limga oid boshqa qonun va qonunosti normativ - huquqiy hujjatlarni inobatga olgan holda ishlab chiqilgan hamda institutdagi mehnat, o‘quv, ilmiy faoliyat va ta’lim - tarbiya jarayoniga oid bo‘lgan munosabatlarni tartibga soluvchi lokal normativ - huquqiy hujjat hisoblanib, institut ichki - tartib qoidalarining tamoiyllari, normalari, ta'lim jarayoni va xulq-atvorining asosiy qoidalari bilan bog'liq bo'lgan ijtimoiy munosabatlarni tartibga soluvchi hujjatdir.
     </p>

     <h2>
     TOSHKENT FARMATSEVTIKA INSTITUTINING ICHKI TARTIB QOIDALARI
     </h2>

     <p>
     Mazkur Ichki tartib qoidalari (keyingi o‘rinlarda - Qoidalar) O‘zbekiston Respublikasining Mehnat kodeksi, “Ta’lim to‘g‘risida”gi Qonuni, oliy ta’limga oid boshqa qonun va qonunosti normativ - huquqiy hujjatlarni inobatga olgan holda ishlab chiqilgan hamda institutdagi mehnat, o‘quv, ilmiy faoliyat va ta’lim-tarbiya jarayoniga oid bo‘lgan munosabatlarni tartibga soluvchi lokal normativ-huquqiy hujjat hisoblanadi.
     </p>

     <h3>
     1-bob. Umumiy qoidalar
     </h3>

     <p>
     1.Mazkur Qoidalarda quyidagi asosiy tushunchalardan foydalaniladi:
    xodim - institut bilan mehnat shartnomasini tuzgan O‘zbekiston Respublikasi fuqarolari, shuningdek, chet el fuqarolari va fuqaroligi bo‘lmagan shaxslar;
    mehnat shartnomasi - xodim bilan ish beruvchi o‘rtasida muayyan mutaxassislik, malaka, lavozim bo‘yicha ishni ichki mehnat tartibiga bo‘ysungan holda taraflar kelishuvi, shuningdek, mehnat to‘g‘risidagi qonunlar va boshqa normativ-huquqiy hujjatlar bilan belgilangan shartlar asosida haq evaziga bajarish haqidagi kelishuvidir;
    professor-o‘qituvchilar - kafedra mudiri, professor, dotsent, katta o‘qituvchi, o‘qituvchi, stajor-o‘qituvchi lavozimiga ishga qabul qilingan xodimlar;
    doktorant – institutga tayanch doktorantura yoki doktoranturaga belgilangan tartibda qabul qilingan shaxs;
    mustaqil izlanuvchi - institutga mustaqil izlanuvchilikka belgilangan tartibda qabul qilingan shaxs;
    talaba - tegishli mutaxassislik bo‘yicha ta’lim olish uchun institutga belgilangan tartibda qabul qilingan hamda ta’lim va tarbiyani qabul qiluvchi shaxs.
    
     2.Ushbu Qoidalar institutning ichki mehnat tartibi, institut, rahbariyat, professor-o‘qituvchi, xodim, talaba, doktorant, mustaqil izlanuvchilarning burchlari, shuningdek, ishga qabul qilish, mehnat shartnomasini o‘zgartirish va mehnat shartnomasini bekor qilish, ta’lim va tarbiya jarayonini tashkil etish tartibi, mehnat va o‘quv intizomi, ish vaqti, dam olish vaqti va undan foydalanish, shu bilan birga ish va o‘qishdagi yutuqlar uchun rag‘batlantirish, mehnat va o‘quv intizomini buzganlik uchun javobgarlik, institut hududi va binolar ichidagi tartib hamda ish beruvchi bilan professor-o‘qituvchi, xodim, doktorant, mustaqil izlanuvchi va talabalar o‘rtasida yuzaga keladigan boshqa huquqiy munosabatlarga oid masalalarni tartibga soladigan asosiy ichki normativ-huquqiy hujjat hisoblanadi.
     </p>

<h3>
2-bob. Mehnat shartnomasini tuzish, o‘zgartirish va bekor qilish
1-§. Mehnat shartnomasini tuzish
</h3>
<p>
3. Xodim bilan institut o‘rtasidagi mehnat munosabatlari ular o‘rtasida tuzilgan mehnat shartnomasi asosida vujudga keladi.
    
    4. Ishga qabul qilish vaqtida ishga kirayotgan shaxs quyidagi hujjatlarni:
    doimiy yashash yoki vaqtincha ro‘yxatdan o‘tgan manzili ko‘rsatilgan pasport yoki uning o‘rnini bosadigan boshqa hujjatni;
    mehnat daftarchasini (birinchi marotaba ishga kirayotgan shaxslar bundan mustasno);
    harbiy xizmatga majburlar yoki chaqiriluvchilarga tegishli harbiy bilet yoki harbiy hisobda turganlik haqidagi guvohnomani;
    qonunchilik hujjatlariga muvofiq bajarilishiga faqat maxsus tayyorgarlikka ega bo‘lgan shaxslargina qo‘yilishi mumkin bo‘lgan ishga kirish vaqtida ishga kiruvchining oliy yoki o‘rta maxsus, kasb-hunar o‘quv yurtini bitirganlik to‘g‘risidagi diplomi, mazkur ishni bajarish huquqini beruvchi guvohnoma (chet davlatlar hududida olingan diplom O‘zbekiston Respublikasi qonunchilik hujjatlari bilan belgilangan tartibda nostrifikatsiyalangan (ekvivalentligi qayd etilgan)ligi haqida tegishli guvohnomasi);
    o‘rindoshlik asosida ishga kirayotgan shaxslar mehnat daftarchasi o‘rniga asosiy ish joyidan olgan ma’lumotnomani taqdim etadi.
    Ishga qabul qilish vaqtida ishga kirayotgan shaxsdan qonun hujjatlarida ko‘rsatilmagan hujjatlarni talab qilish taqiqlanadi.
    Ishga kirayotgan shaxsning pasporti yoki shaxsini tasdiqlovchi boshqa hujjati haqiqiy bo‘lmasa, uni ishga qabul qilish rad etilishi mumkin.
    
    5. Taqdim etilgan mazkur Qoidalarning 4-bandi ikkinchi-oltinchi xatboshilarida ko‘rsatilgan hujjatlarning to‘liqligi tekshirib ko‘rilgach, ishga kirayotgan shaxs tomonidan ariza yoziladi va institut devonxonasida ro‘yxatdan o‘tkaziladi. Arizada ishga kiruvchining ismi, familiyasi, otasining ismi to‘liq, qisqartirishsiz, ishga kirayotgan lavozimi esa shtat jadvalida belgilangan lavozimga mos holda yozilishi shart.
    
    6. Ishga qabul qilinayotgan xodim bilan ish beruvchi o‘rtasida quyidagilar haqida mehnat shartnomasi tuziladi:
    xodim ishga qabul qilinayotgan lavozim va ish joyi;
    mehnat shartnomasi muddati;
    ishning boshlanish kuni;
    taraflarning mehnat huquqlari va majburiyatlari;
    ish vaqti hamda mehnat ta’tili berish tartibi;
    mehnatga haq to‘lash tartibi;
    mehnat qonunchiligida nazarda tutilgan boshqa holatlar.
    Mehnat shartnomasida uning amal qilish muddati ko‘rsatilmagan hollarda ushbu shartnoma nomuayyan muddatga tuzilgan hisoblanadi.
    Muddatli mehnat shartnomasini tuzish mehnat to‘g‘risidagi qonunlar va boshqa normativ-huquqiy hujjatlarga muvofiq amalga oshiriladi.
    
    7. Ishga qabul qilinayotgan har bir xodim (shu jumladan, o‘rindoshlik asosida kiruvchilar) bilan mehnat shartnomasi bir xil yuridik kuchga ega bo‘lgan kamida ikki nusxada yozma shaklda tuziladi va ular tomonlarning har biriga saqlash uchun topshiriladi.
    Xodimning talabiga ko‘ra mehnat shartnomasi (kontrakt) u biladigan tilda tuziladi va davlat tilida tuzilgan shartnoma (kontrakt) bilan bir xil yuridik kuchga ega bo‘ladi.
    Mehnat shartnomasida taraflarning manzillari ko‘rsatiladi.
    Mehnat shartnomasi xodim va institut rektorining (direktorining) imzosi bilan tasdiqlanadi. Institut rektorining imzosi institut gerbli muhri bilan tasdiqlanadi.
    
    8. Institutning Kadrlar bo‘limi tomonidan O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 5-dekabrdagi 971-sonli qarori bilan tasdiqlangan “Yagona milliy mehnat tizimi” idoralararo dasturiy-apparat kompleksida mehnat shartnomalarini ro‘yxatdan o‘tkazish, elektron mehnat daftarchalarini shakllantirish va yuritish tartibi to‘g‘risidagi nizomga muvofiq xodim va ish beruvchi o‘rtasidagi mehnat munosabatlari (mehnat shartnomalarini tuzish, o‘zgartirish va bekor qilish, mehnat daftarchasini shakllantirish hamda yuritish va boshqalar) “Yagona milliy mehnat tizimi” idoralararo dasturiy-apparat kompleksida ro‘yxatga olinadi.
    
    9. Qonun hujjatlariga muvofiq tuzilgan mehnat shartnomasi tomonlar imzolagan kundan boshlab qonuniy kuchga kiradi. Xodim mehnat shartnomasida ko‘rsatilgan kundan boshlab mehnat vazifalarini bajarishga kirishadi. Agar mehnat shartnomasida ishning boshlanish kuni haqida shartlashilmagan bo‘lsa, xodim mehnat shartnomasi imzolangan ish kuni (smena)ning ertasidan kechikmay ishga tushishi lozim.
    
    0. Ish beruvchining ruxsati bilan ishga qabul qilishni tegishlicha rasmiylashtirmasdan turib, ishga qo‘yilgan shaxs ishga tushgan birinchi kunidan boshlab mehnat shartnomasi tuzilgan deb hisoblanadi.
    
    11.Mehnat shartnomasi tuzilganidan keyin ish beruvchi mehnat shartnomasining mazmuniga muvofiq ravishda ishga qabul qilish to‘g‘risida buyruq chiqaradi va buyruq bilan imzo qo‘ydirgan holda xodimni tanishtiradi.
    
    12. Ish beruvchi quyidagi hollarda ishga qabul qilishdan bosh tortishga haqli emas:
    
    a) ish beruvchining o‘zi tomonidan ishga taklif qilingan shaxslar;
    b) nogironlar, o‘quv muassasalarning bitiruvchilari, uch va undan ortiq farzandlari bor yolg‘iz ota (ona), pensiya yoshiga yaqinlashgan shaxslar agar ular joylardagi davlat hokimiyati organi tomonidan muassasaga belgilangan eng kam miqdordagi ish o‘rinlari hisobidan ishga yo‘llanma bo‘yicha mahalliy mehnat organlari tomonidan yuborilgan bo‘lsa;
    v) homilador ayollar va uch yoshgacha bolalari bo‘lgan shaxslar;
    g) qonunchilik hujjatlarida nazarda tutilgan boshqa hollarda.
    
    13.Xodim ish beruvchidan ishga qabul qilishni rad etish sabablarini yozma ravishda asoslashni talab qilishga haqlidir. Ish beruvchi uch kun ichida unga yozma asos ko‘rsatishi shart. Homilador ayollarga va uch yoshgacha bolasi bo‘lgan ayollarga ish beruvchining agar ular shunday talab bilan murojaat etmagan taqdirda ham ishga qabul qilishni rad etish sababi yozma ravishda tushuntiriladi. Ishga qabul qilish g‘ayriqonuniy ravishda rad etilganda xodim belgilangan tartibda nazorat qiluvchi organ yoki sudga shikoyat qilishga haqlidir.
    
    14. Ishga qabul qilish paytida mehnat shartnomasida dastlabki sinov to‘g‘risida shartlashilgan bo‘lishi mumkin. Bunday shartlashuv bo‘lmagan taqdirda xodim dastlabki sinovsiz ishga qabul qilingan deb hisoblanadi. Sinov to‘g‘risidagi shart ishga qabul qilish to‘g‘risidagi buyruqda aks ettiriladi. Dastlabki sinov bilan ishga qabul qilingan xodimning mehnat daftarchasiga ishga qabul qilish haqidagi yozuv dastlabki sinov haqidagi shartlar ko‘rsatilmagan holda kiritiladi.
    Dastlabki sinov muddati uch oydan oshib ketishi mumkin emas. Dastlabki sinovning aniq muddati (uch oy doirasida) mehnat shartnomasi taraflarining kelishuvi asosida belgilanadi. Taraflar tomonidan belgilangan sinov muddati tugagunga qadar ish beruvchi (sinov natijasi qoniqarsiz bo‘lgan taqdirda), shuningdek, xodim (mehnatga oid munosabatlarni davom ettirish istagi bo‘lmagan taqdirda) ikkinchi tarafni uch kun oldin yozma ravishda ogohlantirib, mehnat shartnomasini bekor qilishga haqli.
    Agar taraflar tomonidan belgilangan sinov muddati tugagunga qadar taraflardan birortasi mehnat shartnomasini bekor qilishni talab qilmasa, mehnat shartnomasining amal qilishi davom etadi va uni bundan keyin bekor qilishga umumiy asoslarda yo‘l qo‘yiladi.
    Xodimning vaqtincha mehnatga qobiliyatsizlik davri va uzrli sabablarga ko‘ra xodim ishda bo‘lmagan boshqa davrlar dastlabki sinov muddatiga kiritilmaydi.
    Dastlabki sinov davrida xodimga mehnat to‘g‘risidagi qonun hujjatlari va institut xodimlari uchun belgilangan mehnat shartlari to‘liq tatbiq etiladi.
    Xodimni boshqa ishga o‘tkazishda sinov muddati belgilanishiga yo‘l qo‘yilmaydi.
    Quyidagilar bilan mehnat shartnomasi tuzish davrida dastlabki sinov muddati qo‘llanilmaydi:
    homilador ayollar, shuningdek, uch yoshga to‘lmagan bolasi bor ayollar;
    o‘rta maxsus, kasb-hunar ta’limi muassasalari hamda oliy ta’lim muassasalarining tegishli ta’lim muassasasini tamomlagan kundan e’tiboran uch yil ichida birinchi bor ishga kirayotgan bitiruvchilar;
    olti oygacha muddatga ishga qabul qilinayotganlar;
    oliy ta’lim muassasasi uchun belgilangan minimal ish joylari hisobidan ishga yuborilgan shaxslar.
    
    15.Institutga ishga qabul qilish belgilangan tartibda tasdiqlangan nizom talablari asosida amalga oshiriladi.
    
    16.Ishga qabul qilish jarayonida yoki xodim uning roziligi bilan boshqa ishga o‘tkazilayotganda institut:
    unga yuklatilgan mehnat vazifalari doirasi, huquq va majburiyatlari, mehnat va mehnatga haq to‘lash shartlari;
    mazkur Qoidalar, jamoa shartnomasi, lavozim yo‘riqnomasi va xodimning mehnat faoliyatiga oid boshqa hujjatlar;
    Institutning Odob-axloq kodeksi;
    Institutning korrupsiyaga qarshi kurashish dasturi (siyosati) bilan;
    Institutning xodim, talaba, professor-o‘qituvchi, o‘quvchi va doktorantlari tomonidan korrupsiyaviy huquqbuzarliklar sodir etishga og‘dirish maqsadida murojaat qilish holatlari haqida xabardor qilish to‘g‘risidagi nizom;
    mehnatni muhofaza qilish, texnika xavfsizligi va ishlab chiqarish sanitariyasiga doir qoidalar bilan xodimni tanishtirishi lozim.
    
    17. Institutda besh kundan ortiq ishlagan barcha xodimlarga Kadrlar bo‘limi tomonidan Mehnat daftarchalarini yuritish tartibi to‘g‘risidagi yo‘riqnoma (ro‘yxat raqami 402, 1998-yil 29-yanvar) qoidalariga muvofiq mehnat daftarchasi yuritiladi, o‘rindoshlik asosida ishlovchilar bundan mustasno.
    Shuningdek, O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 5-dekabrdagi 971-sonli qarori bilan tasdiqlangan “Yagona milliy mehnat tizimi” idoralararo dasturiy-apparat kompleksida mehnat shartnomalarini ro‘yxatdan o‘tkazish, elektron mehnat daftarchalarini shakllantirish va yuritish tartibi to‘g‘risidagi nizom talablariga asosan “Yagona milliy mehnat tizimi” idoralararo dasturiy-apparat kompleksida elektron mehnat daftarchalarini shakllantirish va yuritish ta’minlanadi.
    
    18. Ish beruvchi va institutning mansabdor shaxslari xodimdan uning mehnat majburiyatlariga kirmaydigan ishlarni bajarish, qonunga zid harakatlarni sodir etish, shuningdek, xodimning yoki boshqa shaxslarning hayoti va sog‘lig‘ini xavf ostiga qo‘yadigan, or-nomusi va sha’nini kamsitadigan harakatlar sodir etishni talab qilishga haqli emas.
    Institutda xotin-qizlar bilan munosabatlar qonunchilik hujjatlari talablari, milliy an’analar va o‘zaro hurmat tamoyillariga asoslanishi lozim.
</p>

<h3>
2-§. Mehnat shartnomasini o‘zgartirish va bekor qilish
</h3>

<p>
19. Mehnat shartnomalarini o‘zgartirish O‘zbekiston Respublikasining Mehnat kodeksi talablari asosida amalga oshiriladi.
    
    20. Xodim bir necha kasb va lavozimdagi ishlarni mehnat shartnomasida ko‘rsatilgan o‘zining asosiy ishi bilan bir qatorda belgilangan ish vaqti davomida bajaradi.
   
    21. Bir necha kasb va lavozimda ishlash muayyan yoki nomuayyan muddatga belgilanishi mumkin. Kelishilgan muddat tugaganidan so‘ng bir necha kasb va lavozimda ishlash haqida mazkur xodim bilan belgilangan shartlar bekor qilinadi. Bir necha kasb va lavozimda ishlash va uni bekor qilish mehnat shartnomasida aks ettiriladi va institut rektorining buyrug‘i bilan rasmiylashtiriladi.
   
    22. Mehnat shartnomasi faqat O‘zbekiston Respublikasining Mehnat kodeksida nazarda tutilgan asoslar bo‘yicha va unda belgilangan tartibda bekor qilinishi mumkin.
   
    23. Xodim mehnat shartnomasini bekor qilish niyatida ekanligi haqida ikki hafta oldin ariza bilan ish beruvchini yozma ravishda ogohlantirishi shart. Ogohlantirish muddati ariza ro‘yxatga olingan sanadan qat’i nazar, ariza berilgan kunning ertasidan boshlanadi.
    Xodim tomonidan berilgan ariza u berilgan kun va keyingi kundan kechiktirmay institut rektoriga taqdim etiladi.
    Xodimning arizasi uzrli sabablarga ko‘ra ishni davom ettirishning imkoni yo‘qligi bilan bog‘liq bo‘lsa, u berilgan kunda institut rektori (rektor bo‘lmaganda uning o‘rnini bosuvchi shaxs)ga taqdim etiladi.
    Quyidagilar uzrli sabablar jumlasiga kiradi:
    harbiy xizmatni o‘tash;
    ta’lim muassasalariga o‘qishga qabul qilinganlik;
    pensiyaga chiqqanlik;
    saylab qo‘yiladigan lavozimga saylanish yoki yuqori turuvchi idoralar nomenklaturasi (lavozimlar ro‘yxati)ga kiruvchi lavozimlarga tayinlanish;
    xodim yoki uning parvarishiga muhtoj bo‘lgan yaqin qarindoshlari sog‘ligining TMEK yoki TMK tomonidan berilgan tibbiy xulosaga muvofiq holati;
    ushbu lavozimda ishlashni davom ettirishning imkoni yo‘qligi to‘g‘risidagi boshqa uzrli sabablar.
   
    24. Xodim mehnat shartnomasini bekor qilish to‘g‘risida istalgan vaqtda, jumladan, vaqtinchalik mehnatga qobiliyatsizlik davri, ta’til, xizmat safari davrida ariza berishga haqli. Sanab o‘tilgan ana shu davrlarning barchasi mehnat shartnomasini bekor qilish to‘g‘risidagi ogohlantirish muddati davriga kiritiladi.
    Ogohlantirish muddati davrida mehnat shartnomasining shartlari taraflar tomonidan odatdagi tartibda bajarilishi davom ettiriladi.
    Nomuayyan muddatga tuzilgan mehnat shartnomasini, shuningdek, muddatli mehnat shartnomasini ish beruvchining tashabbusiga ko‘ra uning muddati tugashidan oldin bekor qilishga quyidagi hollarda yo‘l qo‘yiladi:
    Institut faoliyatida mehnatni tashkil etishdagi o‘zgarishlar, xodimlar soni (shtati) yoki ish xususiyatining o‘zgarishiga olib kelgan ishlar hajmi qisqarganda yoxud tegishli tarkibiy bo‘linmalar tugatilganda;
    xodimning malakasi yetarli bo‘lmaganligi yoki sog‘lig‘i holatiga ko‘ra bajarayotgan ishiga noloyiq bo‘lib qolganda;
    xodim o‘z mehnat vazifalarini muntazam ravishda buzganda (avval mehnat majburiyatlarini buzganligi uchun xodim intizomiy yoki moddiy javobgarlikka tortilgan yoxud unga nisbatan mehnat to‘g‘risidagi qonunlar va boshqa normativ hujjatlarda nazarda tutilgan ta’sir choralari qo‘llanilgan kundan e’tiboran bir yil mobaynida xodim tomonidan takroran intizomga xilof nojo‘ya harakat sodir qilinishi mehnat vazifalarini muntazam ravishda buzish hisoblanadi);
    xodim o‘z mehnat vazifalarini bir marta qo‘pol ravishda buzganda;
    o‘rindoshlik asosida ishlamaydigan boshqa xodimning ishga qabul qilinishi munosabati bilan, shuningdek, mehnat shartlariga ko‘ra o‘rindoshlik ishi cheklanishi sababli o‘rindoshlar bilan mehnat shartnomasi bekor qilinganda;
    xodim pensiya yoshiga to‘lganda;
    qonun hujjatlariga muvofiq yoshga doir davlat pensiyasini olish huquqi mavjud bo‘lganda.
   
    25. Xodim vaqtincha mehnatga qobiliyatsizlik davrida va mehnat to‘g‘risidagi qonunlar va boshqa normativ-huquqiy hujjatlarda nazarda tutilgan ta’tillarda bo‘lgan davrida mehnat shartnomasini ish beruvchining tashabbusi bilan bekor qilishga yo‘l qo‘yilmaydi, muassasa butunlay tugatilgan hollar bundan mustasno.
   
    26. Mehnat shartnomasini bekor qilishga olib kelishi mumkin bo‘lgan bir marta qo‘pol ravishda buzishga quyidagilar kiradi:
    ijro intizomini buzish (O‘zbekiston Respublikasi Prezidentining qarorlari, farmonlari, farmoyishlari va topshiriqlarida, Hukumat qarorlari va farmoyishlari, Oliy va o‘rta maxsus ta’lim vazirligi hay’atining qarorlari, Sog‘liqni saqlash vazirligi buyruqlari, mazkur vazirliklarning buyruqlari va ko‘rsatmalarida belgilangan vazifalarni amalga oshirishni o‘z vaqtida va to‘liq hajmda ta’minlanmaganlik);
    ishga uzrli sabablarsiz kelmaslik (ishda uzrli sabablarsiz ish kuni mobaynida uzluksiz yoki ishda bo‘lmagan vaqtni jamlab hisoblaganda 3 (uch) soatdan ko‘proq vaqt bo‘lmaganlik), professor-o‘qituvchilar uchun dars jadvaliga ko‘ra bir ish kuni mobaynida dars jadvalida belgilangan dars mashg‘ulotlarini o‘z vaqtida boshlamaslik yoki ishtirok etmaslik;
    ichki tartib qoida talablariga rioya qilmaslik va ularni buzish;
    ishga alkogolli ichimlik, giyohvandlik (psixotrop) moddasi ta’sirida yoki o‘zgacha tarzda mastlik holatida kelish;
    institutning mol-mulkiga zarar yetkazish yoki uni turli xil usullar bilan talon-taroj qilish (shu jumladan, o‘g‘irlash);
    xodim tomonidan mansab (xizmat) vazifasi (vakolati)ni suiste’mol qilishi (lavozimi bo‘yicha berilgan vakolatlardan xizmat manfaatlariga zid ravishda foydalanish) va g‘ayriaxloqiy ko‘rinishdagi, institut xodimi degan nomga dog‘ tushiruvchi xatti-harakatlarni sodir etish;
    ish beruvchining roziligisiz yuqori turuvchi organlarga faoliyatga doir axborot bilan murojaat qilish;
    xotin-qizlarga tegajog‘liq qilish, sha’ni va qadr-qimmatini kamsitadigan harakatlar sodir etish, tazyiq o‘tkazish va zo‘ravonlik qilish, huquqlarini boshqacha tarzda poymol qilish;
    asossiz yoki g‘ayriaxloqiy xatti-harakatlari, OAV va ijtimoiy tarmoqlardagi chiqishlari bilan institutning ishchanlik obro‘si va manfaatlariga putur yetkazish yoki zarar yetkazishi mumkin bo‘lgan xatti-harakatlarni sodir etish;
    institut xodimlarining, jumladan, o‘zining hayoti yoki sog‘lig‘iga xavf tug‘diradigan tarzda texnika xavfsizligi, sanitariya qoidalarini qo‘pol ravishda buzish;
    xodimlar tomonidan vazifalarini bajarishda korrupsiyaga oid huquqbuzarliklar sodir etilishining oldini olish tartibi to‘g‘risidagi nizom talablarini qo‘pol ravishda buzish, ya’ni xodim:
    uni korrupsiyaga oid huquqbuzarliklar sodir etishga ko‘ndirish maqsadida biror-bir shaxs o‘ziga murojaat etganligiga doir barcha holatlar to‘g‘risida, shuningdek, davlat organlarining boshqa xodimlari tomonidan sodir etilgan shunga o‘xshash huquqbuzarliklarning o‘zlariga ma’lum bo‘lib qolgan har qanday faktlari haqida o‘z rahbarlari, O‘zbekiston Respublikasi Oliy va o‘rta maxsus vazirligi hamda O‘zbekiston Respublikasi Sog‘liqni Saqlash vazirligi tizimida korrupsiyaga qarshi kurashish bo‘limi yoxud huquqni muhofaza qiluvchi organlarni xabardor etmasligi;
    o‘z xizmat mavqeidan foydalangan holda yoki jismoniy va yuridik shaxslardan ularning manfaatlarini ko‘zlagan holda muayyan harakatni bajarishi yoki bajarmasligi evaziga bevosita o‘zi yoki vositachi orqali pul, qimmatli qog‘ozlar, moddiy boyliklar, sovg‘alar, ssudalar, mulkiy mohiyatga molik bo‘lgan xizmatlar olishi;
    bo‘ysunuvidagi xodimning noqonuniy qarorlar qabul qilish yoki korrupsiyaviy xatti- harakatlar sodir etishga majbur etishi;
    xizmat ko‘rsatilishi uchun fuqarolarga belgilangan to‘lovlardan mansabidan foydalangan holda ozod bo‘lish orqali mulkiy foyda olishi yoki boshqacha tarzda imtiyozlarga ega bo‘lishga qaratilgan harakatga yo‘l qo‘yishi;
    boshqaruv tartibiga qarshi jinoyatlar, jumladan, mansab yoki xizmat mavqeini suiste’mol qilish bilan bog‘liq hamda korrupsiyaning kelib chiqishiga sabab bo‘lishi mumkin bo‘lgan holatlar to‘g‘risida tegishli tarkibiy bo‘linma rahbariga xabar bermasligi;
    Institut tomonidan o‘tkazilayotgan o‘rganish (tekshirish) guruhi rahbari o‘rganish (tekshirish)da qatnashayotgan xodimlar tomonidan mansab vakolatini suiste’mol qilish bilan bog‘liq xabar kelib tushgan taqdirda bu haqida yuqori turuvchi mansabdor shaxsga yetkazmasa hamda salbiy oqibatlar kelib chiqishining oldini olish choralarini ko‘rmasa;
    xodimning ongli ravishda O‘zbekiston Respublikasi Oliy va o‘rta maxsus vazirligi hamda O‘zbekiston Respublikasi Sog‘liqni Saqlash vazirligi tizimida manfaatlar to‘qnashuvini boshqarish to‘g‘risidagi nizomda belgilangan tartibda manfaatlar to‘qnashuvi to‘g‘risidagi ma’lumotlarni qasddan yashirishi yoki o‘z vaqtida to‘liq oshkor qilmasligi natijasida xizmat majburiyatlarini lozim darajada bajarmasligiga olib kelsa yoki institutning qonuniy manfaatlari buzilsa.
   
    27. Ish beruvchi tomonidan ichki tartib qoidalarning mazkur bandida ko‘rsatilgan asoslarga ko‘ra xodim bilan tuzilgan mehnat shartnomasining institut Kasaba uyushmasi qo‘mitasining roziligini olmasdan turib bekor qilinishiga yo‘l qo‘yilmaydi, qonunchilikda ko‘rsatilgan holatlar bundan mustasno.
    Kasaba uyushmasi qo‘mitasining xodim bilan mehnat shartnomasini bekor qilishga rozilik berish masalasi bo‘yicha qabul qilgan qarori haqida ish beruvchiga yozma ravishda xabar berishi kerak, bunday xabar ish beruvchining yozma taqdimnomasi olingan kundan boshlab o‘n kunlik muddat ichida ma’lum qilinadi.
    Ish beruvchi kasaba uyushmasi qo‘mitasining xodim bilan mehnat shartnomasini bekor qilishga rozilik berish to‘g‘risidagi qarori qabul qilingan kundan boshlab bir oydan kechiktirmay mehnat shartnomasini bekor qilishga haqlidir.
   
    28. Mehnat shartnomasini bekor qilish ish beruvchining buyrug‘i bilan rasmiylashtiriladi.
    Oxirgi ish kuni mehnat shartnomasi bekor qilingan kun deb hisoblanadi. Shu kuni institut xodimga uning mehnat daftarchasini va mehnat shartnomasi bekor qilinganligi haqida buyruqning nusxasini beradi hamda u bilan belgilangan tartibda hisob-kitob qilinadi.
</p>

<h3>
3-bob. Ish vaqti, dam olish vaqti hamda ulardan foydalanish
</h3>

<p>
29. Xodim ish tartibi yoki grafigiga yoxud mehnat shartnomasi shartlariga muvofiq o‘z mehnat vazifalarini bajarishi lozim bo‘lgan vaqt ish vaqti hisoblanadi.
    
    30. Institut xodimlari uchun har kungi ish vaqtining boshlanishi va tamom bo‘lishi hamda dam olish va ovqatlanish uchun tanaffus vaqti quyidagicha belgilanadi:
   har kuni - soat 8.30 dan 16.30 gacha;
   kundalik tushlik tanaffus - 13.00 dan 14.00 gacha.
   Shuningdek, professor-o‘qituvchilaring ish vaqti jamlab hisoblanadigan ish vaqti rejimida belgilanadi.
   Umumiy dam olish kuni yakshanbadir. Shanba kunini dam olish kuni sifatida belgilash institut rektori tomonidan Kasaba uyushmasi qo‘mitasi bilan kelishilgan holda amalga oshiriladi.
   
    31. Zarurat tug‘ilganda ish kuni rejimi Kasaba uyushmasi qo‘mitasi bilan kelishilgan holda institut rektorining buyrug‘i bilan o‘zgartirilishi mumkin.
   
    32. Professor-o‘qituvchilar uchun ish vaqtining qisqartirilgan vaqti va ish kuni haftasiga 36 soatlik qilib belgilanadi hamda o‘quv mashg‘ulotlari jadvaliga ko‘ra tartibga solinadi.
   
    33. Professor-o‘qituvchilar faoliyatini ish kuni davomida barcha turdagi o‘quv, ilmiy-uslubiy, ilmiy-tadqiqot, tashkiliy-uslubiy, ma’naviy-axloqiy va tarbiyaviy ishlar rejasi asosida amalga oshiradi.
   
    34.Professor-o‘qituvchilar tomonidan o‘quv mashg‘ulotlari jadvali, ish rejasi va navbatchilik jadvalining bajarilishi o‘quv ishlari bo‘yicha prorektor – institut qoshidagi akademik litsey direktori, tegishliligi bo‘yicha fakultet dekani va uning o‘rinbosari hamda kafedra mudiri tomonidan nazorat qilib boriladi.
   
    35.Quyidagi xodimlarga ham ish vaqtining qisqartirilgan muddati belgilanadi:
   16 yoshdan 18 yoshgacha bo‘lgan xodimlar - haftasiga 36 soat;
    I va II guruh nogironlari - haftasiga 36 soat.
   
    36.Xodim bilan ish beruvchi o‘rtasidagi kelishuvga binoan ishga qabul qilish chog‘ida ham, keyinchalik ham to‘liqsiz ish kuni yoki to‘liqsiz ish haftasi, masofaviy ish usuli, moslashuvchan ish jadvali yoki uyda ishlash rejimiga o‘tkazish belgilab qo‘yilishi mumkin.
   Ish beruvchi homilador ayolning, 14 yoshga to‘lmagan (16 yoshga to‘lmagan nogiron) bolasi bor ayolning, jumladan, homiyligida shunday bolasi bor ayolning yoki oilaning betob a’zosini parvarish qilish bilan band bo‘lgan shaxsning iltimosiga ko‘ra, tibbiy xulosaga muvofiq, shuningdek, qonun hujjatlarida nazarda tutilgan boshqa hollarda ularga to‘liqsiz ish vaqti belgilaydi.
   
    37. Ish vaqtidan tashqari xodimlarni ishga jalb etish qonun hujjatlarida belgilangan tartibda amalga oshiriladi.
   
    38. Yillik ta’tillarning muddati, ular uchun haq to‘lash va ularni hisoblab chiqarish, shuningdek, ta’til olish huquqini beradigan ish stajini hisoblab chiqarish qonun hujjatlarida nazarda tutilgan tartibda amalga oshiriladi.
   
    39. Xodimning arizasiga binoan unga ish haqi saqlanmagan holda ta’til berilishi mumkin, uning muddati tomonlarning kelishuviga binoan belgilanadi, lekin u o‘n ikki oylik davr mobaynida jami uch oydan ortiq bo‘lmasligi kerak.
   
    40. Har yilgi asosiy ta’til quyidagicha beriladi:
   birinchi ish yili uchun olti oy ishlagandan keyin (qonunda ko‘rsatilgan holatlar bundan mustasno);
   ikkinchi va undan keyingi ish yillari uchun ta’tillar jadvaliga muvofiq ish yilining istalgan vaqtida (qonunda ko‘rsatilgan holatlar bundan mustasno).
   Ta’tildan foydalanishning jadvalda belgilangan vaqti xodim bilan ish beruvchining kelishuviga binoan o‘zgartirilishi mumkin.
   
    41. Xodimning yozma arizasiga binoan ta’til qismlarga bo‘linishi mumkin. Bunda ta’tilning bir qismi o‘n ikki ish kunidan kam bo‘lmasligi lozim.
   
    42.Ta’tildan chaqirib olishga faqat xodimning roziligi bilan yo‘l qo‘yiladi. Ta’tilning foydalanilmay qolgan qismi xodimga mazkur ish yilida beriladi yoki ta’tilni boshqa muddatga ko‘chirish qoidalariga rioya etilgan holda keyingi yilga ko‘chiriladi.
   
    43. Xodimlarning xohishiga ko‘ra yillik ta’tilning eng kam muddatidan (o‘n besh ish kunidan) ortiqcha qismi uchun pullik kompensatsiya to‘lanishi mumkin.
   Ta’til berish vaqti haqida xodim ta’til boshlanishidan kamida o‘n besh kun oldin xabardor qilinishi kerak.
   Ta’til uchun haq to‘lash ta’til boshlanmasidan oldingi oxirgi ish kunidan kechikmay amalga oshirilishi lozim.
   
    44. Mehnat shartnomasi bekor qilinganda, jumladan, uning muddati tamom bo‘lishi munosabati bilan ham, xodimning xohishiga ko‘ra, xodim bilan ish beruvchi o‘rtasidagi kelishuvga muvofiq yillik ta’tillarni berib, undan keyin mehnat shartnomasini bekor qilish hollari nazarda tutilishi mumkin. Bu holda ta’til tugagan kun mehnat shartnomasi bekor qilingan kun deb hisoblanadi.
   
    Mazkur bandda nazarda tutilgan ta’til davrida xodim mehnat shartnomasi va uning tashabbusi bilan bekor qilish to‘g‘risidagi arizasini basharti mehnat shartnomasini bekor qilish to‘g‘risida ogohlantirishning qonun yoki taraflarning kelishuvi bilan belgilangan muddati tugagan bo‘lsa, qaytarib olishga haqli emas.
   
</p>

<h3>
4-bob. Ta’limni tashkil etish tartibi, mehnat va o‘quv intizomi
</h3>
<p>
45. Institutda o‘quv yili, qoida tariqasida, 2-sentabrdan boshlanadi. O‘quv mashg‘ulotlari o‘quv reja va o‘quv dasturlariga mos ravishda tuzilgan dars jadvallariga asosan olib boriladi.
    
    46. O‘quv mashg‘ulotlari dars jadvali institut elektron platformasida semestr uchun tuzilib, tegishli tartibda tasdiqlanadi va semestr boshlanishidan oldin talabalar, professor-o‘qituvchilar, fakultet dekanatlari va boshqa tuzilmalarga yuboriladi. O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi hamda O‘zbekiston Respublikasi Sog‘liqni Saqlash vazirligi topshiriqlari, institut Kengashi qarorlari, O‘quv-uslubiy bo‘lim tavsiyasiga binoan fakultativ mashg‘ulotlar alohida jadval asosida o‘quv jarayoniga kiritilishi mumkin.
   
    47. Talabalarga o‘quv yili davomida ikki marotaba umumiy davomiyligi 8-10 haftaga teng bo‘lgan ta’tillar beriladi.
   
    48. Institutda akademik soatning davomiyligi 40 daqiqa deb belgilangan va 80 daqiqadan iborat tanaffussiz qo‘shma dars joriy etiladi. Har bir dars mashg‘ulotlari o‘rtasida 10 daqiqa tanaffus beriladi.
   
    49. O‘qish 2 smenadan iborat tartibda tashkil etilganda, smenalar orasidagi tanaffus 40 daqiqa etib belgilanadi.
   
    50. O‘quv yili ikki semestrga bo‘linadi, ulardan har biri talabalar o‘zlashtirishi natijalarining yakunlanishi bilan tugallanadi.
   
    51.Institut jamoat, tashkiliy va ma’muriy ishlarni bajarishda ko‘maklashish, talabalarning o‘zini o‘zi boshqarish tizimini samarali yo‘lga qo‘yish uchun fakultet dekanati tomonidan guruh sardorlari ular saylangunga qadar vaqtinchalik vazifasini bajarish uchun tayinlanadi.
   
    Guruh sardorlari o‘zining ish faoliyatini institut Ustavi, mazkur Qoidalar, institutning boshqa ichki lokal hujjatlari asosida olib boradi. Guruh sardorlari tyutorning tavsiyasiga ko‘ra guruhning umumiy yig‘ilishida ochiq ovoz berish yo‘li bilan saylanadi. Birinchi kursda guruh sardorlari fakultet dekani tomonidan vaqtinchalik vazifasini bajarishga tayinlanadi, keyinchalik bir oy ichida guruhning umumiy yig‘ilishida ochiq ovoz berish yo‘li bilan saylanadi.
   
    52. Guruh sardori o‘z arizasiga muvofiq yoki zimmasiga yuklatilgan vazifalarni talab darajasida bajarmaganligi, guruh sardori obro‘siga putur yetkazadigan xatti-harakatlarni sodir etganligi uchun fakultet dekanining taqdimiga ko‘ra muddatidan oldin vazifasidan ozod etilishi mumkin.
   Guruh sardorlari quyidagi vazifalarni bajaradi:
   yig‘ilishlarda talabalar nomidan ishtirok etish;
   o‘quv-tarbiyaviy ishlarni takomillashtirish yuzasidan fakultet dekanatiga takliflar kiritish;
   professor-o‘qituvchilar tomonidan o‘tkazilayotgan o‘quv mashg‘ulotlari sifati va talabalarning bilimini ob’ektiv baholash yuzasidan talabalarning fikr-mulohazalarini fakultet dekanatiga yetkazish;
   
    Institutning ilmiy va jamoat ishlarida faol qatnashayotgan talabalarni rag‘batlantirish yuzasidan O‘zbekiston yoshlar ittifoqi institut boshlang‘ich tashkiloti, institut kasaba uyushmasi qo‘mitasi yoki fakultet dekanatiga takliflar kiritish;
   ushbu Qoidalarda belgilangan majburiyatlarni bajarmayotgan talabalarga nisbatan chora ko‘rish yuzasidan fakultet dekanati, institut Kasaba uyushmasi qo‘mitasi yoki O‘zbekiston yoshlar ittifoqi institut boshlang‘ich tashkilotiga takliflar kiritish.
   
    53. Institut rahbar xodimlari, professor-o‘qituvchilari va boshqa xodimlari, doktorantlari va talabalari mazkur Qoidalar, institut Ustavi, institutning Odob-axloq kodeksi, institutning korrupsiyaga qarshi kurashish dasturi (siyosati), institut xodim, talaba, o‘quvchi va doktorantlari tomonidan korrupsiyaviy huquqbuzarliklar sodir etishga og‘dirish maqsadida murojaat qilish holatlari haqida xabardor qilish to‘g‘risidagi nizom, institut Kengashi qarorlari, rektor buyruqlari, lavozim yo‘riqnomasi, tarkibiy bo‘linmalar to‘g‘risidagi nizomlar va boshqa lokal normativ-huquqiy hujjatlarda belgilangan talablarga qat’iy rioya etishlari shart.
   
    54. Mazkur Qoidalarning 54-bandida ko‘rsatilgan talablardan tashqari:
   a) xodimlar va talabalar:
   talaba o‘quv mashg‘ulotlariga uzrli sabablarga ko‘ra qatnasha olmagan holda bu haqida darhol fakultet dekanini xabardor qilib, asoslantiruvchi hujjatlarni taqdim etish;
   institut faoliyat samaradorligiga daxldor bo‘lish hamda uning rahbariyati (rektor, prorektorlar, fakultet dekanlari, kafedra mudirlari, tarkibiy bo‘linma rahbarlari) haqida ma’lumotga ega bo‘lish;
   uzrli sabablarga ko‘ra ish (o‘qish)ga kelmagan xodim (talaba) tarkibiy bo‘linma rahbari (fakultet dekani) yoki Kadrlar bo‘limini ogohlantirish hamda ish (o‘qish)ga chiqqan kuni asoslantiruvchi hujjatlarni taqdim etish;
   texnika xavfsizligi, ishlab chiqarish sanitariyasi, yong‘indan saqlash qoidalari va me’yorlariga rioya etish;
   institut rahbariyatining roziligisiz o‘quv binosi va auditoriyalarga turli jihozlarni, begona shaxslarni olib kirmaslik va olib chiqmaslik;
   b) doktorant (mustaqil izlanuvchi va izlanuvchilar):
   O‘zbekiston Respublikasi Vazirlar Mahkamasining 2017-yil 22-maydagi 304-sonli qarori bilan tasdiqlangan Oliy ta’limdan keyingi ta’lim to‘g‘risidagi nizom qoidalariga qat’iy rioya qilish;
   doktorlik dissertatsiya ishini tayyorlashning yakka tartibdagi ish rejasiga ega bo‘lish va uni to‘liq hamda o‘z vaqtida bajarish;
   doktorlik dissertatsiyasini muddatida tayyorlash va Ilmiy kengashga himoya uchun taqdim etish;
   biriktirilgan tarkibiy bo‘linma bilan doimiy aloqada bo‘lish, tarkibiy bo‘linmaning faoliyati yo‘nalishi bilan bog‘liq ishlarda ishtirok etish;
   uzrli sabablarga ko‘ra o‘qishga kelmagan doktorant Ilmiy tadqiqot, innovatsiya va ilmiy pedagog kadrlar tayyorlash bo'limi va biriktirilgan tarkibiy bo‘linma rahbarini ogohlantirish hamda o‘qishga kelgan kunida asoslantiruvchi hujjatlarini taqdim etish;
   Institutda haftasiga 20 soat bo‘lish (xizmat safari hamda ruxsat etilgan xorij safarlarida bo‘lish, aloqa xatlariga asosan boshqa tashkilotlarda tadqiqot olib borish bundan mustasno);
   Institut va boshqa muassasalarda o‘tkaziladigan anjumanlarda ishtirok etish, shuningdek, boshqa mutasaddi tashkilotlardan kelgan ilmiy tadqiqotlar bo‘yicha hujjatlar ijrosini ta’minlash va qonun loyihalarini tayyorlashda ishtirok etish;
   Institut rektori, prorektorlar, fakultet dekanlari hamda tegishli tarkibiy bo‘linmalarning rahbarlari tomonidan berilgan topshiriqlarni o‘z vaqtida va sifatli bajarish;
   davlat, jamiyat va jamoat manfaatlariga doir harakatlar qilganda, vaqtincha mehnatga layoqatsiz bo‘lganda, akademik ta’til olish uchun asoslar vujudga kelganda hamda boshqa uzrli sabablar mavjudligida bo‘ysunuv tartibida yuqori turuvchi rahbarni xabardor qilishga majbur.
   
    55. To‘lov-kontrakt asosida ta’lim olayotgan talabalarni moddiy jihatdan qo‘llab-quvvatlash qonun hujjatlarida belgilangan tartibda amalga oshirilishi mumkin.
   
   56. Institutga xorijdan hamda respublikaning uzoq shahri va viloyatlaridan kelib ta’lim olayotgan talabalar belgilangan mezonlar asosida komissiya xulosasiga ko‘ra hamda institut rektorining tegishli buyrug‘iga asosan Talabalar turar joylariga joylashtiriladi.
   
   57. Talabalar turar joylariga joylashish uchun talaba ariza bilan murojaat qiladi hamda tegishli hujjatlarni ilova qiladi. Mazkur murojaat o‘rnatilgan tartibda institut rektorining buyrug‘i bilan tasdiqlangan komissiya tomonidan hamda belgilangan mezonlar asosida ko‘rib chiqiladi.
   
    58. Talabalar turar joylarida istiqomat qiluvchi talabalar, qoida tariqasida, belgilangan tartibda vaqtincha hisobga olinadi.
   
   59. Talabalar turar joylarida istiqomat qiluvchi talabalar Talabalar turar joylari to‘g‘risidagi nizom, mazkur Qoidalar hamda Talabalar turar joylari xona va jihozlaridan foydalanish bo‘yicha lokal hujjat va shartnomalarda belgilangan huquqlarga ega bo‘ladi va majburiyatlarni bajaradi.
</p>

<h3>5-bob. Binolar ichidagi tartib</h3>

<p>
51. O‘quv binolarini zarur jihozlar (mebel, o‘quv uskunalari va boshqalar) bilan ta’minlanishi uchun institut Ishlar boshqarmasi boshlig‘i mas’ul hisoblanadi.
    
    52. Bino ichiga kirish xizmat ruxsatnomalari, elektron ruxsatnoma, vaqtinchalik ruxsatnoma va talabalik guvohnomalari hamda shaxsni tasdiqlovchi boshqa hujjatlar asosida amalga oshiriladi.
    
    53. Ish vaqti tugagandan so‘ng xona va auditoriyalarning kaliti bino xavfsizligini ta’minlovchi institutga biriktirilgan qo‘riqlash xizmati xodimiga maxsus jurnalga imzo qo‘yish orqali topshiriladi.
    
    54. Bino xavfsizligini ta’minlovchi institutga biriktirilgan qo‘riqlash xizmati xodimi ish vaqti tugagandan so‘ng yong‘in va texnika xavfsizligini ta’minlash maqsadida elektr yoritkichlar o‘chirilganligi, deraza va eshiklar qulflanganligi, xodim va talabalarning o‘z vaqtida binodan chiqib ketganligini tekshirib chiqadi.
    
</p>

<h3>6-bob. Ish va o‘qishdagi yutuqlari uchun rag‘batlantirish</h3>
<p>
51. Xodimlar quyidagi shakllarda rag‘batlantiriladi:
    davlat va jamiyat oldidagi alohida xizmatlari uchun davlat mukofotlariga tavsiya etish to‘g‘risida bo‘ysunuvchi O‘zbekiston Respublikasi Sog‘liqni Saqlash vazirligi, idora yoki Oliy va o‘rta maxsus ta’lim vazirligiga taklif kiritish;
    mehnat faoliyatida alohida o‘rnak ko‘rsatayotganligi uchun faxriy yorliqlar va boshqa turdagi mukofotlarga tavsiya etish;
    Institutning faoliyat samaradorligiga munosib hissa qo‘shib belgilangan topshiriqlari o‘z vaqtida bajarib kelayotgan xodim va talabalarni institut rektorining faxriy yorlig‘i hamda turli nominatsiyadagi diplomlari bilan taqdirlash;
    yubiley sanalari munosabati bilan moddiy rag‘batlantirish, sovg‘alar berish;
    kasb bayrami munosabati bilan bir yo‘la beriladigan mukofotlar;
    bayram sanalari munosabati bilan beriladigan mukofotlar va boshqa shakllardagi rag‘batlantirish choralari.
    
    52. Ish haqi, qo‘shimcha to‘lovlar, ustamalar va mehnatga oid qonun hujjatlarida nazarda tutilgan boshqa to‘lovlar mazkur Qoidalarda belgilangan rag‘batlantirish turlariga kirmaydi.
    
    53. Talabalar o‘qishda yuqori ko‘rsatkichlarga erishganligi, ilmiy-tadqiqot ishlari va institut ijtimoiy hayotida faol ishtiroki uchun quyidagi tartibda rag‘batlantiriladi:
    tashakkurnoma e’lon qilish;
    pul mukofoti yoki qimmatbaho sovg‘a bilan taqdirlash;
    faxriy yorliq, darajali va turli nominatsiyali diplomlar bilan taqdirlash.
    Shu bilan birga, talabalarni moddiy rag‘batlantirish jamg‘armasi hisobidan davlat granti va to‘lov-kontrakt asosida ta’lim olayotgan alohida iqtidorga ega, xalqaro, respublika va institut miqyosida o‘tkazilgan fan olimpiadalari va sport musobaqalari g‘oliblari, shuningdek, institut kengashi tomonidan belgilangan mezonlarga muvofiq alohida hollarda (ota-onasining vafoti, nogironligi, ijtimoiy himoyaga muhtojligi) talabalarga bazaviy stipendiyaga nisbatan 10 baravargacha miqdorda bo‘lgan bir martalik rag‘batlantirish yoki moddiy yordam to‘lovi berilishi mumkin.
    
    54. Talabalarni rag‘batlantirish institutning Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha prorektori, Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi, fakultet dekanlari, O‘zbekiston yoshlar ittifoqi boshlang‘ich tashkiloti, Xotin-qizlar masalalari bo‘yicha maslahat kengashi taqdimnomasi yoki tavsiyanomasi, Stipendiya komissiyasi qarori asosida institut rektorining buyrug‘iga muvofiq amalga oshiriladi.
    
</p>

<h3>
7-bob. Mehnat va o‘quv intizomini buzganlik uchun javobgarlik
</h3>
<p>
51. Institut xodimga mehnat intizomini birinchi marta buzgani uchun yoki huquqbuzarlikni ehtiyotsizlikdan sodir etgan taqdirda quyidagi ta’sir choralarini qo‘llashi mumkin:
    ogohlantirish;
    bir martalik mukofotdan mahrum qilish (agar mukofotlashga oid lokal hujjatlarda nazarda tutilgan bo‘lsa);
    rag‘batlantirishdan mahrum qilish.
    
    52. Mehnat intizomini buzganligi uchun institut xodimga quyidagi intizomiy jazo choralarini qo‘llashga haqli:
    hayfsan;
    o‘rtacha oylik ish haqining o‘ttiz foizidan ortiq bo‘lmagan miqdorda jarima;
    mazkur Qoidalarning 27-bandida ko‘rsatilgan holatlar bo‘yicha o‘rtacha oylik ish haqining ellik foizidan ortiq bo‘lmagan miqdorda jarima (xodimning ish haqidan jarima ushlab qolish mehnatga oid qonun hujjatlarida nazarda tutilgan talablarga rioya qilingan holda amalga oshiriladi);
    3) mehnat shartnomasini bekor qilish.
    Ushbu bandda nazarda tutilmagan intizomiy jazo choralarini qo‘llash taqiqlanadi.
    
    53. Intizomiy jazo va ta’sir chorasini qo‘llash institut rektorining buyrug‘i bilan amalga oshiriladi. Aynan bitta mehnat intizomini buzganlik uchun ham intizomiy, ham boshqa ta’sir chorasi qo‘llanilishi mumkin emas.
    
    54. Intizomiy jazo chorasi sifatida jarima ilgari mazkur xodimga sodir etilgan nojo‘ya xatti-harakati uchun hayfsan berilgani yoki berilmaganidan qat’i nazar qo‘llaniladi.
    
    55. Intizomiy jazo qo‘llanilishidan avval xodimdan yozma ravishda tushuntirish xati talab qilinadi. Xodimning tushuntirish xati berishdan bosh tortishi uning sodir qilgan nojo‘ya xatti-harakati uchun jazo qo‘llashga to‘siq bo‘la olmaydi. Xodim mehnat intizomini buzganlik xususida tushuntirish xati berishdan bosh tortganligi dalolatnoma bilan rasmiylashtiriladi.
    Intizomiy jazoni qo‘llashda sodir etilgan nojo‘ya xatti-harakatning qay darajada og‘irligi, shu xatti-harakat sodir etilgan vaziyat, xodimning oldingi ishi va xulq-atvori hisobga olinadi.
    
    56. Intizomiy jazo choralari bevosita nojo‘ya xatti-harakat aniqlangandan keyin, ammo bu xatti-harakat aniqlangandan boshlab uzog‘i bilan bir oy ichida qo‘llaniladi. Bir oylik muddatga xodimning kasal yoki ta’tilda bo‘lgan vaqti qo‘shilmaydi.
    
    57. Nojo‘ya xatti-harakat sodir etilgan kundan boshlab olti oy o‘tganidan, moliya- xo‘jalik faoliyatini taftish etish yoki tekshirish natijasida aniqlanganda esa sodir etilgan kundan boshlab ikki yil o‘tganidan keyin jazoni qo‘llab bo‘lmaydi. Jinoiy ish bo‘yicha ish yuritilgan davr bu muddatga kirmaydi.
    
    58. Intizomiy jazo berilganligi to‘g‘risidagi buyruq xodimga ma’lum qilinib, tilxat olinadi. Xodim tilxat berishdan bosh tortgan holda tegishli dalolatnoma bilan rasmiylashtiriladi.
    
    59. Har bir nojo‘ya xatti-harakat uchun xodimga nisbatan faqat bitta intizomiy jazo qo‘llanishi mumkin.
    
    60. Intizomiy jazoning amal qilish muddati jazo qo‘llanilgan kundan boshlab bir yildan oshib ketishi mumkin emas. Agar xodim shu muddat ichida intizomiy jazoga tortilmasa, jazo e’lon qilinganidan keyin bir yil o‘tgach, u intizomiy jazo olmagan deb hisoblanadi. Bunday hollarda intizomiy jazoni olib tashlash to‘g‘risida buyruq chiqarilmaydi.
    
    61. Intizomiy jazo rektor tashabbusi bilan, xodimning iltimosiga binoan yoki xodimning bevosita rahbari iltimosiga ko‘ra bir yil o‘tmasdan oldin ham olib tashlanishi mumkin. Xodimdan intizomiy jazo muddatidan oldin olib tashlanishi institut rektorining buyrug‘i bilan rasmiylashtiriladi.
    
    62. Intizomiy jazo ustidan xodim mehnatga oid qonun hujjatlarida nazarda tutilgan tartibda shikoyat qilishi mumkin.
    
    63. Xodim tomonidan institut va uning mol-mulkiga bevosita to‘g‘ridan-to‘g‘ri zarar yetkazilganda intizomiy jazo qo‘llanilganligidan qat’i nazar, qonunchilikda belgilangan tartibda moddiy javobgarlikka ham tortilishi mumkin.
    
    64. Intizomiy jazo amal qilib turgan muddat mobaynida xodimga nisbatan rag‘batlantirish choralari qo‘llanilmaydi.
    
    65. Mazkur Qoidalar, institut Odob-axloq kodeksi, institutning korrupsiyaga qarshi kurashish dasturi (siyosati), institut xodim, talaba, o‘quvchi va doktorantlari tomonidan korrupsiyaviy huquqbuzarliklar sodir etishga og‘dirish maqsadida murojaat qilish holatlari haqida xabardor qilish to‘g‘risidagi nizom, institut Ustavi, institut Kengashi qarorlari, rektor buyruqlari, lavozim yo‘riqnomasi, tarkibiy bo‘linmalar to‘g‘risidagi nizomlar va boshqa lokal normativ hujjatlarda belgilangan talablarni buzganligi uchun:
    a) talabalarga:
    institutdan chetlashtirish (kursdan kursga qoldirish);
    hayfsan;
    uzrsiz sabablarga ko‘ra darslarni 18-soatdan, 36-soatgacha qoldirgan talaba, qoida tariqasida, fakultet dekani tomonidan unga nisbatan intizomiy jazo chorasi qo‘llanilishi to‘g‘risida rasman ogohlantirish;
    uzrli sabablarsiz 36-soatdan, 54-soatgacha va 72-soat dars qoldirgan talabaga nisbatan, qoida tariqasida, hayfsan intizomiy jazo chorasi;
    b) doktorantga: hayfsan;
    doktoranturadan chetlashtirish ta’sir chorasi qo‘llaniladi.
    Intizomiy jazo choralari nojo‘ya xatti-harakat aniqlangandan keyin bir oy ichida, sodir etilgan kundan boshlab olti oy ichida talaba (doktorant)ning kasal yoki ta’tilda bo‘lgan vaqtini hisobga olmagan holda qo‘llaniladi, shuningdek, kasal, ta’til, akademik ta’til yoki homiladorlik va tug‘ish ta’tilida bo‘lgan davrda institut (doktorantura)dan chetlashtirishga yo‘l qo‘yilmaydi.
    Intizomiy jazoning amal qilish muddati jazo qo‘llanilgan kundan boshlab bir yildan oshib ketishi mumkin emas. Agar talaba yoki doktorant shu muddat ichida intizomiy jazoga tortilmasa, jazo e’lon qilinganidan keyin bir yil o‘tgach, u intizomiy jazo olmagan deb hisoblanadi. Bunday hollarda intizomiy jazoni olib tashlash to‘g‘risida buyruq chiqarilmaydi.
    Talaba yoki doktorantga qo‘llanilgan intizomiy jazo uning namunaviy xulq-atvori, o‘qishidagi yuqori ko‘rsatkichlari, ilmiy-tadqiqot ishlari yoki institut ijtimoiy hayotida faol ishtiroki uchun tegishli fakultet dekani, Magistratura bo‘limi boshlig‘i yoki Ilmiy bo‘lim boshlig‘i bildirgisiga asosan rektorning buyrug‘i bilan bir yil o‘tmasdan oldin ham olib tashlanishi mumkin.
    
    66. Oliy ta’lim muassasasi talabalari Vazirlar Mahkamasining 2017-yil 20-iyundagi 393-sonli qarori bilan tasdiqlangan institut talabalari o‘qishini ko‘chirish, qayta tiklash va o‘qishdan chetlashtirish tartibi to‘g‘risidagi nizom talablari asosida institutdan quyidagi hollarda chetlashtirilishi mumkin:
    a) o‘z xohishiga binoan;
    b) o‘qishning boshqa ta’lim muassasasiga ko‘chirilishi munosabati bilan;
    v) o‘quv intizomi va institutning Odob-axloq kodeksi hamda ushbu Qoidalarini buzganligi uchun;
    g) bir semestr davomida darslarni uzrli sabablarsiz 74 soatdan ortiq qoldirganligi sababli;
    d) o‘qish uchun belgilangan to‘lov o‘z vaqtida amalga oshirilmaganligi sababli (to‘lov- kontrakt bo‘yicha tahsil olayotganlar uchun);
    y) talaba sud tomonidan ozodlikdan mahrum etilganligi munosabati bilan;
    j) sud qaroriga ko‘ra kirish imtihonlarida belgilangan tartibni buzganligi aniqlanganda (ushbu holatda talabalar safidan chetlashtirilganlar talabalar safiga qayta tiklanmaydi);
    z) vafot etganligi sababli.
    
    67. Institut tashabbusi bilan talabalarni o‘qishdan chetlashtirish talabalar kasaba uyushmasining yozma roziligini inobatga olgan holda (kasaba uyushmasi a’zosi bo‘lgan talabalar uchun) amalga oshiriladi. Shuningdek, talaba mazkur Qoidalarning 84-bandining “v” kichik bandiga ko‘ra chetlashtirilayotgan paytda O‘zbekiston yoshlar ittifoqi boshlang‘ich tashkiloti bilan ham kelishilishi mumkin.
    
    68. Intizomiy jazoga tortilgan talaba o‘ziga qo‘llanilgan jazo chorasining qonuniyligi va adolatliligi yuzasidan qonun hujjatlarida belgilangan tartibda shikoyat bilan murojaat etishi mumkin.
    
    69. Talabaga nisbatan qo‘llanilgan intizomiy jazo yuzasidan ma’lumot uning shaxsiy hujjatlar to‘plamida saqlanadi.
    
    70. Talaba institutdan chetlashtirilganda unga shaxsiy hujjatlari, belgilangan shakldagi akademik ma’lumotnoma beriladi va uning nusxasi shaxsiy yig‘ma jildga tikib qo‘yiladi.
    
    71. Harbiy xizmatni o‘tash, salomatligini tiklash, homiladorlik va tug‘ish, shuningdek, bolalarni parvarish qilish ta’tillari davrida hamda oilasining betob a’zosini (otasi, onasi yoki ularning o‘rnini bosuvchi shaxslar, turmush o‘rtog‘i, farzandi) parvarish qilish uchun talabaga Vazirlar Mahkamasi tomonidan belgilangan tartibda akademik ta’til berilishi mumkin.
</p>

<h3>
8-bob. Alohida qoidalar
</h3>
<p>
51. Karantin yoki shu kabi holatlarda xodim o‘z mehnat vazifalarini ish joyi (institut binosi)da amalga oshirishni imkoni bo‘lmaganda qonunchilik hujjatlarida nazarda tutilgan tartibda cheklovlar o‘rnatilgan hollarda ish beruvchi xodimning roziligi bilan uni masofaviy ish usulida, moslashuvchan ish jadvalida yoki uyda ishlash rejimiga o‘tkazishi mumkin. Bunda:
    xodimning mehnat majburiyatlarini amalga oshirish uchun zarur bo‘lgan jihozlar va texnika vositalari zaruriyatga ko‘ra xodimning yozma talabiga muvofiq ish beruvchi tomonidan ta’minlanadi;
    ish beruvchi tomonidan xodimga berilgan jihozlar va texnikalar xodimning aybi bilan buzilganda yetkazilgan zarar amaldagi qonun hujjatlariga muvofiq xodim tomonidan ish beruvchiga qoplab beriladi;
    xodim o‘z mehnat vazifalarini bajarish uchun shaxsiy jihozlar va texnika vositalaridan, shuningdek, aloqa vositalari, jumladan, internet tarmog‘idan foydalangan taqdirda bazaviy hisoblash miqdorining bir baravaridan oshmagan miqdorda xarajatlar ish beruvchi tomonidan xodimga qoplab beriladi;
    ishlab chiqarish zaruriyati tug‘ilganda ish beruvchi xodimni bir kun oldin aloqa vositalari orqali ogohlantirib, uni buyruq asosida doimiy ish joyiga o‘tkazadi;
    xodim va ish beruvchi o‘rtasidagi elektron hujjat almashish yo‘li orqali aloqalar institutning ichki lokal hujjatlari hamda boshqa qonun hujjatlarida belgilangan tartibda amalga oshiriladi.
    masofaviy ish usuli (uyda ishlashga o‘tkazilgan xodimning ta’tillar jadvaliga muvofiq mehnat ta’tili, vaqtincha mehnatga layoqatsizlik bo‘yicha nafaqa olish hamda qonun hujjatlarida va institut jamoa shartnomasida nazarda tutilgan boshqa huquqlari saqlanib qolinadi.
    Masofadan ish deganda xodimning mehnat shartnomasida ko‘rsatilgan mehnat majburiyatlarini ish beruvchining joylashgan hududidan tashqarida, bevosita yoki bilvosita nazoratida bo‘lgan doimiy ish joyi, hudud yoki ob’ektdan tashqarida bajariladigan ish usuli tushuniladi.
    
    52. Masofaviy ish usulida, moslashuvchan ish jadvalida yoki uyda ishlashga o‘tish huquqidan birinchi navbatda homilador ayollar, keksalar, imkoniyati cheklangan shaxslar va surunkali kasalliklarga chalingan xodimlar foydalanadi.
    
    53. Xodimni masofaviy ishga vaqtinchalik o‘tkazishda ish beruvchi tomonidan vaqtinchalik masofaviy ish rejimiga o‘tkazish haqida muddati ko‘rsatilgan buyruq chiqariladi.
</p>

<h3>
9-bob. Yakuniy qoidalar
</h3>

<p>
51. Institut rektori va prorektorlari tomonidan fuqarolarni qabul qilish tegishli tartibda tasdiqlangan jadval asosida amalga oshiriladi.
    
    52. Mazkur Qoidalar bilan barcha ishga kiruvchilar va talabalar imzo orqali xodimlar bo‘limi tomonidan tanishtiriladi.
    
    53. Har bir xodim qonun hujjatlari, mazkur Qoidalar, institutning boshqa ichki hujjatlari va mehnat shartnomasida belgilangan huquqlarini qonunchilikda nazarda tutilgan vositalar va usullar orqali himoya qilishga, o‘zining huquqlari buzilgan deb hisoblaganda mustaqil ravishda yoki institut Kasaba uyushmasi qo‘mitasi orqali ish beruvchiga murojaat qilishga haqlidir. Ushbu murojaat belgilangan tartibda ko‘rib chiqilib, natijasi haqida xodimga ma’lum qilinadi. 
</p>

<h3>Toshkent farmatsevtika institutining "Ichki tartib qoidalari" bilan tanishib chiqildi:</h3>
<Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4  text-start" : "p-4 border-b border-blue-gray-50  text-start";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
        </div>
        </div>
    );
};

export default Nizom;