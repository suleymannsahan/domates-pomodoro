# Domates: kurulan sürüm

Telefona, tablete ve bilgisayara kurulan Pomodoro uygulaması. Kurulduktan sonra **internet olmadan** çalışır, sayacı **bildirim panelinde** gösterir.
Veriler cihazda saklanır. Claude'daki sürümle veri taşımak için **Ayarlar › Yedek ve aktarım** bölümünü kullan.

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

## 4. Claude sürümüyle veri taşıma

Bir tarafta *Ayarlar › Panoya kopyala* (ya da *Dosyaya aktar*), diğer tarafta *Ayarlar › kutuya yapıştır › Yapıştırılanı içe aktar*.
İçe aktarma birleştirir, hiçbir şeyi silmez.

## Güncelleme

Yeni bir `index.html` yüklediğinde `sw.js` içindeki `VERSION` değerini artır (şu an `domates-v3`).

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `sw.js` | Çevrimdışı çalışma ve bildirim düğmeleri |
| `manifest.webmanifest` | Ad, renk ve simgeler; kurulumu sağlar |
| `icon-*.png`, `apple-touch-icon.png` | Uygulama simgeleri |
| `icon-badge.png` | Android durum çubuğundaki küçük simge |
