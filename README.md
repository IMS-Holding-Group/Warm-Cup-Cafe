# مقهى الكوب الدافئ

## 1. ما هو المشروع؟

موقع ثابت بالعربية لمقهى الكوب الدافئ: صفحة رئيسية، وقائمة طعام ومشروبات، وصفحة رأي. الاتجاه RTL.

## 2. لماذا يوجد هذا المشروع؟

استنتاج من الكود: الصفحات تعرض تعريف المقهى والأسعار وتجمع رأي الزائر داخل المتصفح.

## 3. من يستخدمه؟

الزائر. حساب موظف أو طلب شراء غير موجود.

## 4. ماذا يستطيع النظام أن يفعل؟

- الرئيسية: ترحيب، صورة `assets/images/hero.jpg`، فيديو `assets/video/promo.mp4`، روابط خريطة وهاتف وبريد.
- القائمة: مشروبات وحلويات مع أسعار، وجدول أسعار.
- الرأي: الاسم، البريد، تقييم من 1 إلى 5، خيارات الإعجاب (سرعة، طعم، أجواء، خدمة)، ملاحظات، وزر إرسال يتحقق منه `script.js`.

## 5. كيف يعمل النظام؟

ثلاث صفحات HTML تشترك في `assets/css/style.css` و`assets/js/script.js`. النموذج يمنع الإرسال الافتراضي. عند صحة الاسم والبريد والتقييم تظهر رسالة `تم استلام رأيك شكراً!` ثم يُمسح النموذج بعد 3 ثوانٍ. الطلب لا يغادر المتصفح.

## 6. أمثلة واقعية

أسعار مكتوبة في `menu.html`: قهوة أمريكية 8 ريال، كابتشينو 12، لاتيه 12، موكا 15، شاي أحمر 3، شاي أخضر 3، كرواسون 8، كيك الشوكولاتة 15. صفّان نصّهما `السعر هنا` وصورهما `YOUR_IMAGE_NAME.jpg`.
الهاتف في الرئيسية `+966 50 123 4567` عبر `tel:+966501234567`. البريد `info@warmcupcafe.com`. الخريطة بحث Google عن عبارة مقهى الكوب الدافئ.

## 7. رحلة المستخدم

فتح index.html. الانتقال إلى قائمة الطعام أو رأيك يهمنا من القائمة. في الرأي: تعبئة الاسم والبريد واختيار تقييم ثم إرسال. النجاح يظهر في `#feedback-success`.

## 8. الوحدات والأقسام

| الصفحة | الملف |
| --- | --- |
| الرئيسية | index.html |
| القائمة | menu.html |
| الرأي | feedback.html |
| التنسيق | assets/css/style.css |
| التحقق | assets/js/script.js |

## 9. الشركات والكيانات

الاسم الظاهر: مقهى الكوب الدافئ. فروع متعددة غير موجودة في الملفات.

## 10. الصلاحيات

غير موجود في الملفات الحالية.

## 11. الأتمتة وWorkflows

مؤقت واحد بعد نجاح النموذج: `setTimeout` 3000 مللي ثانية ثم `form.reset()`.

## 12. التكامل بين الوحدات

القائمة المشتركة في الصفحات الثلاث تربط index وmenu وfeedback. التحقق يعمل عندما يوجد `#feedback-form`، لذلك الرئيسية والقائمة تحمّلان السكربت بلا نموذج.

## 13. المصطلحات

| المصطلح | المعنى |
| --- | --- |
| feedback-form | نموذج الرأي |
| email-error | مكان خطأ البريد |
| promo.mp4 | فيديو الصفحة الرئيسية |

## 14. الأسئلة الشائعة

**هل يصل الرأي إلى بريد المقهى؟** الرسالة تُعرض في الصفحة. خادم بريد غير موجود.

**ما المسار القديم في README السابق؟** النص القديم ذكر `C:\Users\TRSI\VSCode\Projects\Warm Cup Café`. مكان الملفات الحالي تحت مجلد المشاريع `D:\VSCode\Projects\Warm Cup Café`.

## 15. Architecture

```
Browser
  -> index.html | menu.html | feedback.html
  -> assets/css/style.css
  -> assets/js/script.js
  -> images / video / fonts
```

## 16. Tech Stack

HTML5 وCSS3 وJavaScript بلا مكتبات، كما في README السابق. الخط IBM Plex Sans Arabic محلي. `lang` العربي وRTL في الصفحات.

## 17. Project Structure

```
Warm Cup Café/
  index.html
  menu.html
  feedback.html
  assets/css/style.css
  assets/js/script.js
  assets/images/hero.jpg
  assets/video/promo.mp4
  assets/fonts/ (سبعة ttf + OFL.txt)
```
README السابق ذكر أيضاً coffee1.jpg وmenu-item1.jpg وملفاً واحداً woff2 داخل IBM-Plex-Sans-Arabic/. الملفات الموجودة الآن: hero.jpg والفيديو وخطوط ttf بأسماء IBMPlexSansArabic-*.ttf. صور القائمة المشار إليها في HTML (coffee1.jpg وmenu-item1.jpg وlatte.jpg وmocha.jpg وred-tea.jpg وgreen-tea.jpg وcroissant.jpg وchocolate-cake.jpg وYOUR_IMAGE_NAME.jpg) غير موجودة في `assets/images` حالياً سوى hero.jpg.

## 18. Frontend

ثلاث صفحات. التنقل بروابط نسبية. النموذج يتحقق في المتصفح. التصميم موصوف في README السابق كمتجاوب. فيديو بعنصر `video controls`.

## 19. Backend

غير موجود في الملفات الحالية.

## 20. Request Flow

```
Submit #feedback-form
  -> validateFeedbackForm
  -> email regex
  -> name required
  -> rating checked
  -> #feedback-success
  -> reset after 3000 ms
```

## 21. Database

غير موجود في الملفات الحالية.

## 22. API

غير موجود في الملفات الحالية.

## 23. Authentication & Authorization

غير موجود في الملفات الحالية.

## 24. Security

تحقق البريد بنمط يحتوي @ ونقطة. الحقول required في HTML. الرسالة تبقى محلية. أيقونة تبويب غير موجودة في الصفحات الثلاث. روابط الخريطة والهاتف والبريد ظاهرة في الرئيسية.

## 25. Configuration

الأسعار والنصوص في HTML. التنسيق في style.css. أسرار بيئة غير موجودة.

## 26. Integrations

رابط خرائط Google في index.html. الهاتف والبريد كروابط tel وmailto بالقيم المكتوبة في الصفحة.

## 27. Scheduled Jobs

مؤقت مسح النموذج فقط.

## 28. File Storage

hero.jpg وpromo.mp4 موجودان. بقية صور القائمة مسارات في HTML وملفاتها غير موجودة في المجلد حالياً.

## 29. Logging & Monitoring

أخطاء النموذج تُكتب في `#email-error` أو `alert`. سجل خادم غير موجود.

## 30. Installation

افتح `index.html` في المتصفح. إضافة Live Server اختيارية كما ذكر README السابق، والإضافة نفسها غير مضمّنة في المجلد.

## 31. Development Guide

صنف قائمة: انسخ بطاقة في `menu.html` وصفاً في الجدول. سؤال رأي: حقل في `feedback.html` وفحص في `validateFeedbackForm` إن كان مطلوباً.

## 32. Deployment

استضافة ملفات ثابتة. إعداد إنتاج خاص غير موجود في الملفات.

## 33. Backup & Recovery

غير موجود في الملفات الحالية.

## 34. Troubleshooting

| العرض | السبب |
| --- | --- |
| صور القائمة مكسورة | المسارات في menu.html والملفات غير موجودة إلا hero.jpg |
| الخط البديل | مسار @font-face إن اختلف عن أسماء ttf الحالية |
| الرأي لا يُخزَّن | غياب خادم |

## 35. Dependencies

مكتبات خارجية غير موجودة. الخط المحلي وOFL.txt.

## 36. Known Limitations

النموذج محلي. صور القائمة ناقصة عن المسارات. صفوف `السعر هنا` و`YOUR_IMAGE_NAME.jpg` ما زالت في الصفحة. أيقونة تبويب غير موجودة. شجرة README القديم لا تطابق الملفات الحالية بالكامل.

## 37. Current System State

| الحالة | التفصيل |
| --- | --- |
| موجود | ثلاث صفحات وفيديو وصورة بطل وخط وتحقق نموذج |
| مسارات بلا ملفات | صور أصناف القائمة |
| غير موجود | حفظ الآراء على خادم |

## 38. Architecture Decisions

استنتاج من الكود: الموقع صفحات ثابتة والتحقق في JS حتى يعمل النموذج بلا خلفية.

## 39. سجل التغييرات

سجل إصدارات غير موجود. README السابق وصف الصفحات الثلاث والتقنيات HTML وCSS وJavaScript، ومساره القديم على المستخدم TRSI.

## System Overview

```
الزائر
  -> index.html (صورة + فيديو + تواصل)
  -> menu.html (أسعار)
  -> feedback.html
  -> script.js تحقق ثم رسالة نجاح
```

## Quick Reference

| الجزء | التقنية | الموقع | الوظيفة |
| --- | --- | --- | --- |
| الرئيسية | HTML | index.html | تعريف وتواصل |
| القائمة | HTML | menu.html | مشروبات وحلويات وأسعار |
| الرأي | HTML | feedback.html | نموذج |
| التحقق | JavaScript | assets/js/script.js | بريد وتقييم ورسالة نجاح |
| الشكل | CSS | assets/css/style.css | تنسيق مشترك |

## Quick Start

افتح `index.html`.

## For Non-Technical Users

موقع مقهى فيه تعريف، وقائمة بأسعار، وصفحة لكتابة رأيك. الرأي يظهر كرسالة شكر في الصفحة نفسها.

## For Developers

ثلاث صفحات HTML وCSS وJS. المنطق في `validateFeedbackForm`. صور القائمة المشار إليها غير موجودة حالياً إلا `hero.jpg`.
