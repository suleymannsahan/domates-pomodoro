# Domates: kurulan sürüm

Telefona, tablete ve bilgisayara kurulan Pomodoro uygulaması. Kurulduktan sonra **internet olmadan** çalışır, sayacı **bildirim panelinde** gösterir.
Veriler cihazda saklanır. Claude'daki sürümle veri taşımak için **Ayarlar › Yedek ve aktarım** bölümünü kullan.

## Özellikler (sürüm 5)

- **Görevler:** Bugün / Yaklaşan / Tümü sekmeleri. Görev eklerken **⋯** ile etiket, tarih ve tekrar (her gün, hafta içi, her hafta) seç. Tekrarlanan görevi bitirince bir sonrakisi kendiliğinden oluşur.
- **Alt görevler ve düzenleme:** Görevin sağındaki **⌄** okuyla alt görev ekle, adını, etiketini, tarihini ve tahminini değiştir.
- **Sıralama:** Görevin solundaki noktalı tutamaçtan sürükleyerek sırala (dokunmatik ekranda da çalışır).
- **Etiketler:** Etiketli görevlerde geçen süre ve elle eklenen süreler, haftalık grafiğin altında etiketlere göre dağılır.
- **Günlük hedef:** Ayarlar › Süreler bölümünde dakika olarak gir (0 = kapalı). Kadranın dış halkası dolar, "Hedef serisi" hedefi tutturduğun ardışık günleri sayar.
- **Son 12 ay:** GitHub tarzı ısı haritası; bir güne dokununca o günün günlüğü açılır. Ay, yıl, toplam ve en iyi gün toplamları.
- **Excel (CSV) indir:** Ayarlar › Yedek ve aktarım. Her gün bir satır: pomodoro, dakika, etiketler, görevler, notlar.
- **Arka plan sesi:** Yağmur, dalga, beyaz ve kahverengi gürültü. Uygulama kendisi üretir, internet gerekmez. Yalnızca odak sırasında çalar.
- **Odak modu:** Kadranın yanındaki köşeli düğme ya da **F** tuşu. Yalnızca sayaç ve görev görünür.
- **Aklıma geldi:** Odak sırasında aklına geleni yaz (kısayol **A**), odağa dön. Notlar Görevler bölümünde ve o günün günlüğünde görünür; tek dokunuşla göreve çevrilir.

## 1. Yayınla (GitHub Pages, ücretsiz)

1. GitHub'da yeni bir **public** depo aç (örneğin `domates`).
2. Bu klasördeki tüm dosyaları deponun köküne yükle (*Add file › Upload files*). Klasörü değil, içindeki dosyaları yükle.
3. *Settings › Pages*: **Source: Deploy from a branch**, **Branch: main**, **/(root)**, ardından **Save**.
4. 1-2 dakika sonra adresin hazır olur: `https://KULLANICI_ADIN.github.io/domates/`

**Daha önce yüklediysen:** aynı depoya bu klasördeki dosyaları yeniden yükle, eskilerin üzerine yazsın (yeni dosya: `icon-badge.png`). Uygulamayı internetliyken bir kez kapatıp aç, yeni sürüm gelir.

## 2. Kur

| Cihaz | Nasıl |
|---|---|
| Android telefon / tablet | Chrome'da adresi aç › ⋮ › **Uygulamayı yükle** |
| iPhone / iPad | Safari'de adresi aç › Paylaş › **Ana Ekrana Ekle** |
| Windows / Mac bilgisayar | Chrome veya Edge'de adresi aç › adres çubuğunun sağındaki **Yükle** simgesi (ya da ⋮ › Yayınla ve kaydet › Uygulamayı yükle) |

İlk açılışta internet gerekir. Sonrasında internetsiz açılır.

## 3. Bildirimleri aç

Uygulamada **Ayarlar › Bildirimler › Bildirim panelinde göster** düğmesini aç ve gelen izin sorusuna **İzin ver** de. **Deneme bildirimi gönder** ile kontrol et.

Bildirim panelinde şunlar görünür:
- **Çalışırken:** "Odak · 18 dk kaldı · Bitiş 14:05" ve **Duraklat** / **Geç** düğmeleri. Kalan süre dakikada bir güncellenir.
- **Duraklatınca:** kalan süre ve **Devam et** / **Sıfırla** düğmeleri.
- **Süre dolunca:** sesli/titreşimli "Pomodoro bitti" uyarısı ve **Molayı başlat** düğmesi.
- **Beklerken:** sıradaki mod ve **Başlat** düğmesi.

Uygulamayı kapatsan bile sayaç durmaz. Tekrar açtığında kaldığı yerden devam eder. Süre o arada dolmuşsa pomodoro sayılır ve "bitti" bildirimi gelir.

### Cihaza göre notlar

- **iPhone / iPad:** iOS 16.4 veya üstü gerekir. Bildirimler yalnızca **ana ekrandan açılan** uygulamada çalışır, Safari sekmesinde çalışmaz.
  Apple web uygulamalarında bildirim düğmelerine izin vermez. Bu yüzden **bildirime dokunmak düğme gibi çalışır**: "Sırada" bildirimine dokununca sayaç başlar, "Duraklatıldı" bildirimine dokununca devam eder, "bitti" bildirimine dokununca mola ya da odak başlar. Çalışan sayaçta dokunmak yalnızca uygulamayı açar.
  iPhone her güncellemede ses çıkarabileceği için çalışan sayaç bildirimi dakikada bir güncellenmez; bir kez bitiş saatiyle gösterilir.
- **Android:** Uygulamayı arka plana alıp uzun süre başka işle uğraşırsan telefon pil tasarrufu için uygulamayı dondurabilir. O durumda "bitti" uyarısı uygulamayı tekrar açtığında gelir. Bildirimdeki **bitiş saati** her zaman doğrudur. Daha güvenilir olması için: *Ayarlar › Uygulamalar › Chrome › Pil › Kısıtlanmamış*.
- **Bilgisayar:** Pencereyi küçültebilirsin, sayaç ve uyarılar doğru zamanda çalışır. Pencereyi tamamen kapatırsan uyarı, uygulamayı yeniden açtığında gelir. Windows'ta *Ayarlar › Sistem › Bildirimler* bölümünde Chrome/Edge'in açık olduğundan emin ol. Mac'te bunun için *Sistem Ayarları › Bildirimler* bölümüne bak.

## 3a. Hesap ve eşitleme (sürüm 6)

Ayarlar › **Hesap ve eşitleme**: ilk cihazda **Hesap oluştur**, diğerlerinde aynı e-posta ve şifreyle **Giriş yap**.
- Görevler, süreler, etiketler, notlar ve ayarlar tüm cihazlarda kendiliğinden eşitlenir. Açık olan diğer cihazlar birkaç saniye içinde güncellenir; arka plandaki uygulama öne gelince güncellenir.
- İlk girişte o cihazdaki veriler hesaba eklenir, hiçbir şey silinmez.
- İnternet yokken çalışmaya devam eder; bağlantı gelince değişiklikler kendiliğinden gönderilir. Sağ üstteki gösterge durumu söyler, ona dokununca hesap ayarları açılır.
- Veriler Supabase projendeki `domates_docs` tablosunda durur ve yalnızca senin hesabın okuyabilir.

## 3c. Uygulama kapalıyken de "bitti" uyarısı (sürüm 7)

Hesapla giriş yapmışsan ve Ayarlar › Bildirimler açıksa, süre başladığında bitiş zamanı Supabase'e yazılır. Supabase'deki `domates-push` fonksiyonu süre dolunca tüm cihazlarına bildirim gönderir; uygulama kapalı ya da telefon kilitli olsa da gelir. Ayarlar › Bildirimler'de "Sunucu bildirimi açık" yazmalı; **Sunucudan deneme** düğmesi 20 saniye sonra bir bildirim gönderir.

Sunucu tarafının kurulumu (tablolar, fonksiyon, gizli anahtarlar) sohbetteki adımlarla bir kez yapılır. Gizli anahtarları bu depoya koyma.

## 3b. iPad / iPhone: kilit ekranında canlı sayaç

Web uygulamaları kilit ekranında canlı sayaç gösteremez, ama iPad'in **Saat zamanlayıcısı** gösterebilir: en üstte sabit durur, canlı sayar, **duraklat / iptal** düğmeleri vardır. Domates, Başlat'a bastığında bu zamanlayıcıyı aynı süreyle başlatabilir.

**Bir kez kısayolu kur:**
1. **Kısayollar** uygulamasını aç, sağ üstteki **+** düğmesine dokun.
2. **Eylem Ekle**'ye dokun, aramaya **zamanlayıcı** yaz, **Zamanlayıcıyı Başlat**'ı seç.
3. Eylemdeki süre kutusuna (mavi **30**) dokun, klavyenin üstündeki **Kısayol Girdisi**'ni seç. Birim **dakika** kalsın.
4. En üstteki adı **Domates Sayaç** yap (büyük/küçük harf ve Türkçe karakterler aynı olmalı). **Bitti**'ye dokun.

**Domates'te aç:** Ayarlar › **iPad / iPhone kilit ekranı** › *Başlatınca Saat zamanlayıcısını da başlat*. **1 dakikalık deneme başlat** ile dene: Kısayollar bir an açılır, zamanlayıcı başlar. Domates'e geri dön (ekranın altından yukarı kaydır ya da uygulama değiştiriciden).

İlk çalıştırmada iPad "Domates, Kısayollar'ı açmak istiyor" diye sorabilir: **Aç**'a dokun.

**Bilmen gerekenler:**
- Saat zamanlayıcısı ayrı çalışır. Yalnızca **yeni** bir süre başladığında açılır. Duraklat/devam et'i Domates'te yaparsan Saat'tekini de kilit ekranından duraklatman gerekir.
- Mola veya odak otomatik başlıyorsa (Ayarlar › Otomatik) Saat zamanlayıcısı açılmaz; iPad bir uygulamanın kendiliğinden başka uygulama açmasına izin vermez. En iyisi Başlat'a kendin basmak.
- Kilit ekranında görünmesi için iPadOS 17 veya üstü gerekir.

## 4. Claude sürümüyle veri taşıma

Bir tarafta *Ayarlar › Panoya kopyala* (ya da *Dosyaya aktar*), diğer tarafta *Ayarlar › kutuya yapıştır › Yapıştırılanı içe aktar*.
İçe aktarma birleştirir, hiçbir şeyi silmez.

## Güncelleme

Yeni bir `index.html` yüklediğinde `sw.js` içindeki `VERSION` değerini artır (şu an `domates-v7`).

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `sw.js` | Çevrimdışı çalışma ve bildirim düğmeleri |
| `manifest.webmanifest` | Ad, renk ve simgeler; kurulumu sağlar |
| `icon-*.png`, `apple-touch-icon.png` | Uygulama simgeleri |
| `icon-badge.png` | Android durum çubuğundaki küçük simge |
| `supabase.js` | Hesap ve eşitleme kitaplığı (internetsiz açılabilmek için uygulamanın içinde) |
