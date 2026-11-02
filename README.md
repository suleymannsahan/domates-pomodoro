# Domates — internetsiz sürüm

Telefonun ana ekranına kurulan, kurulduktan sonra **internet olmadan** çalışan Pomodoro uygulaması.
Veriler telefonda saklanır. Claude'daki sürümle veri taşımak için **Ayarlar › Yedek ve aktarım** bölümünü kullan.

## 1. Bir kez yayınla (GitHub Pages, ücretsiz)

1. GitHub'da yeni bir **public** depo aç (örneğin `domates`).
2. Bu klasördeki tüm dosyaları deponun köküne yükle (*Add file › Upload files*). `index.html` en üstte olmalı.
3. *Settings › Pages* bölümünde **Source: Deploy from a branch**, **Branch: main / (root)** seç ve kaydet.
4. Bir iki dakika sonra adres hazır olur: `https://KULLANICI_ADIN.github.io/domates/`

> Service worker yalnızca **https** üzerinden çalışır. Dosyayı telefonda doğrudan açmak çevrimdışı çalışmayı sağlamaz.

## 2. Telefona kur

**Android (Chrome):** adresi aç › sağ üstteki ⋮ menü › **Uygulamayı yükle** (ya da *Ana ekrana ekle*).

**iPhone (Safari):** adresi aç › Paylaş düğmesi › **Ana Ekrana Ekle**.

İlk açılışta internet gerekir, uygulama kendini önbelleğe alır. Sonrasında uçak modunda bile açılır.

## 3. Claude sürümüyle veri taşıma

- Telefondan Claude'a: telefonda *Ayarlar › Panoya kopyala* (ya da *Dosyaya aktar*), Claude sürümünde *Ayarlar › yapıştır › Yapıştırılanı içe aktar*.
- Claude'dan telefona: aynı adımlar ters yönde.

İçe aktarma birleştirir, hiçbir şeyi silmez. Aynı görev ya da süre iki kez eklenmez. Aynı güne farklı notlar varsa alt alta birleşir.

## Güncelleme

Yeni bir `index.html` yüklediğinde `sw.js` içindeki `VERSION` değerini artır (örn. `domates-v2`). Uygulama internete bağlanınca yeni sürümü alır.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `sw.js` | Çevrimdışı çalışmayı sağlayan service worker |
| `manifest.webmanifest` | Ad, renk ve simgeler; ana ekrana kurulumu sağlar |
| `icon-*.png`, `apple-touch-icon.png` | Uygulama simgeleri |
