export const AboutWithVideo = () => (
    <section className="grid md:grid-cols-2 gap-4 px-8 py-16 bg-slate-100 rounded-md">
        <p>
            Сужоу Фүжи Пресижн Лифт ХХК нь 1999 онд байгуулагдсан бөгөөд БНХАУ-ын анхны цахилгаан шат үйлдвэрлэлийн компаниудын нэг юм. 2011 онд Японы
            Фүжи компани хувьцаанд хөрөнгө оруулж, Японы Фүжи цахилгаан шатыг үйлдвэрлэхэд бүх хүчээ дайчлан ажиллаж, одоо бид Үйлдвэрлэл 4.0 түвшинд
            хүрч байна.
            <br /> Liyang групп (манай групп компани) нь хоёр цахилгаан шат үйлдвэрлэлийн үйлдвэртэй (Suzhou Фүжи Пресижн Лифт ХХК болон Zhejiang
            Тилсон Лифт ХХК), үүнд Хятадын дотоодын FUSIJG болон Тилсон брэндүүд, мөн Фүжи Пресижн экспортын брэндүүд багтдаг. Бид жилд 20,000 нэгж
            цахилгаан шат үйлдвэрлэх хүчин чадалтай, 15,000 нэгжийг хүргэдэг, дэлхийн хамгийн том Фүжи цахилгаан шат үйлдвэрлэлийн бааз юм. <br />
            Групп нь 2,000 гаруй салбарын шилдэг мэргэжилтэнтэй бөгөөд төрөл бүрийн дизайн, үйлдвэрлэл, чанарын хяналт, борлуулалтын өмнөх болон
            дараах үйлчилгээг хангахын тулд ажиллаж, гол долоон хэсэгтээ зургаан жилийн урт хугацааны баталгаат хугацааг санал болгодог бөгөөд дэлхийн
            хэрэглэгчдэд тохиромжтой цахилгаан шатны шийдлүүдийг нийлүүлэхэд зориулагдсан.
        </p>
        <div className="flex items-center justify-center">
            <video width="100%" poster="/about_thumbnail.jpg" controls>
                <source src="/about.mp4" type="video/mp4" />
                Your browser does not support this video playback, please upgrade!
            </video>
        </div>
    </section>
);
