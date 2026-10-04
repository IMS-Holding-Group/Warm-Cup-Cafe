document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.getElementById('feedback-form');
  if (form) {
    form.addEventListener('submit', validateFeedbackForm);
  }
}

function validateFeedbackForm(e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // مسح رسائل الخطأ السابقة
  const err = document.getElementById('email-error');
  if (err) {
    err.textContent = '';
  }

  // مسح رسالة النجاح السابقة
  const success = document.getElementById('feedback-success');
  if (success) {
    success.textContent = '';
  }

  // التحقق من صحة البريد الإلكتروني
  if (!email || !emailRegex.test(email.value.trim())) {
    if (err) {
      err.textContent = 'الرجاء إدخال بريد إلكتروني صالح';
      err.style.color = 'red';
    } else {
      alert('الرجاء إدخال بريد إلكتروني صالح');
    }
    return false;
  }

  // التحقق من الحقول المطلوبة
  const name = document.getElementById('name');
  if (!name || !name.value.trim()) {
    alert('الرجاء إدخال الاسم');
    return false;
  }

  const rating = document.querySelector('input[name="rating"]:checked');
  if (!rating) {
    alert('الرجاء اختيار التقييم');
    return false;
  }

  // إذا تم التحقق بنجاح، عرض رسالة النجاح
  if (success) {
    success.textContent = 'تم استلام رأيك شكراً!';
    success.style.color = 'green';
  }

  // إعادة تعيين النموذج بعد ثانية
  setTimeout(() => {
    if (form) {
      form.reset();
      if (success) {
        success.textContent = '';
      }
    }
  }, 3000);

  return true;
}
