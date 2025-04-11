import React from 'react';
import './NewsArticle.css';

const NewsArticle = () => {
  return (
    <div className="news-container">
      <div className="content">
        <h2 className="title">Ayvalı Köyüne Yeni İmam ve Müezzin Ataması</h2>

        <div className="image-row">
          <img src="/Images/1.jpg" alt="imam1" />
          <img src="/Images/2.jpg" alt="muezzin1" />
        </div>

        <p>
          Ayvalı Köyü'nde cemaatin uzun süredir beklediği imam ve müezzin ataması bugün itibariyle gerçekleşti.Köy muhtarı Hasan Çakır'ın da büyük çabalarıyla gerçekleşen bu atama köyde büyük coşkuyla karşılandı. Köy halkı sabah namazında yeni imamlarıyla ilk kez bir araya geldi. Cemaat, imamın liderliğinde büyük bir coşku ile namazlarını kıldı. 
          Bu yeni görevlendirmelerle birlikte köydeki dini hayatın daha aktif hale gelmesi bekleniyor. 
        </p>

        <img className="news-img" src="/Images/4.jpg" alt="cami1" />

        <p>
          Yeni imam Yıldıray Çetin ve müezzin Recep Erdem Çetin görevlerine büyük bir coşkuyla başladı. Köy muhtarı yaptığı açıklamada, "Köyümüz için büyük bir gün. Artık camimiz daha da canlanacak. Gençlerimiz camiye daha fazla ilgi gösterecek." dedi. 
          Yeni imam, aynı zamanda köyün sosyal aktivitelerinin artmasını sağlamak için çalışmalara başlayacak. Camide düzenlenecek sohbetler ve dini eğitimler sayesinde köy halkı daha bilinçli hale gelecek.
        </p>

        <img className="news-img" src="/Images/3.jpg" alt="cami2" />
      </div>

      <div className="sidebar">
        <h3>Son Haberler</h3>
        <ul>
          <li><img className="small-image" src="/Images/pompa.jpg" alt="news1" /> Benzine indirim geliyor!</li>
          <li><img className="small-image" src="/Images/indir.jpg" alt="news2" /> Perşembe günü soğuk hava ve kar geliyor!</li>
          <li><img className="small-image" src="/Images/kilit.jpg" alt="news3" /> KYK Kız Öğrenci yurdunda hırsız şoku!</li>
        </ul>
      </div>
    </div>
  );
};

export default NewsArticle;
