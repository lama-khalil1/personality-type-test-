// 🔹 مصفوفة الأسئلة وصورها وقيمها (مع أول سؤالين نصيين)
const questions = [
    {
        question: "السؤال الاول كيف تحب أن تتعلم شيئًا جديدًا؟",
        images: [
            { src: "asses/quistionnaire/q1/a2/صورة2.jpg", title:"اشاهد لوحة مليئة بالرسومات", value: "imagev1" },
            { src: "asses/quistionnaire/q1/a1/صورة1.jpg", title:"اجلس واستمع الى المعلمة", value: "imagea1" },
            { src: "asses/quistionnaire/q1/a3/صورة4.jpg", title:"العب بالمكعبات والأدوات التعليمية", value: "imagek1" },
            { src: "asses/quistionnaire/q1/a4/صورة5.jpg", title:"امسك كتاب واشير للكلمات", value: "imagel1" }
        ]
    },
    {
        question: "السؤال الثاني كيف تحب أن تتعلم عن الحيوانات؟",
        images: [
            { src: "asses/quistionnaire/q2/a1/صورة6.jpg", title:"أشاهد صور الحيوانات", value: "imagev3" },
            { src: "asses/quistionnaire/q2/a2/صورة7.jpg", title:"استمع إلي اصوات الحيوانات", value: "imagea3" },
            { src: "asses/quistionnaire/q2/a3/صورة8.jpg", title:"اقلد حركات الحيوانات", value: "imagel3" },
            { src: "asses/quistionnaire/q2/a4/صورة9.jpg", title:"أقرأ اسماء الحيوانات", value: "imagel2" }
        ]
    },
    {
        question: "السؤال الثالث كيف تحب أن تتعلم الأرقام ؟",
        images: [
            { src: "asses/quistionnaire/q3/a1/صورة12.jpg", title:"أشاهد بطاقات الأرقام", value: "imagev2" },
            { src: "asses/quistionnaire/q3/a2/صورة10.jpg", title:"أستمع الى نشيد الأرقام", value: "imagea2" },
            { src: "asses/quistionnaire/q3/a3/صورة.jpeg", title:" أقرا الارقام ", value: "imagek2" },
            { src: "asses/quistionnaire/q3/a4/صورة13.jpg", title:"أعد المكعبات", value: "imagek3" }
        ]
    },
    {
        question: "السؤال الرابع كيف تحب ان تحفظ الأناشيد ؟",
        images: [
            { src: "asses/quistionnaire/q4/a1/صورة1.jpg", title:"أشاهد صور معبرة عن كلمات النشيد", value: "imagev4" },
            { src: "asses/quistionnaire/q4/a2/صورة2.jpg", title:"أستمع للمعلمة وهي تغني", value: "imagea4" },
            { src: "asses/quistionnaire/q4/a3/صورة3.jpg", title:"أتحرك مع النشيد", value: "imagek4" },
            { src: "asses/quistionnaire/q4/a4/صورة4.jpg", title:"أقرأ كلمات النشيد", value: "imagel4" }
        ]
        
    },
    {
        question: "السؤال الخامس ماذا تفعل عندما تريد معرفة طريق البيت ؟",
        images: [
            { src: "asses/quistionnaire/q5/a1/صورة1.jpg", title:"أشاهد خريطة او رسمة للحي", value: "imagev5" },
            { src: "asses/quistionnaire/q5/a2/صورة2.jpg", title:"استمع لشخص يشرح الاتجاهات", value: "imagea5" },
            { src: "asses/quistionnaire/q5/a3/صورة3.jpg", title:"اتبع اشارات الطريق بنفسي", value: "imagek5" },
            { src: "asses/quistionnaire/q5/a4/صورة4.jpg", title:"أقرأ اللوحات الإرشادية", value: "imagel5" }
        ]
    },
    {
        question: "السؤال السادس ماذا تفعل عندما تلعب لعبة تركيب (Puzzle)",
        images: [
            { src: "asses/quistionnaire/q6/a1/صورة5.jpg", title:"اشاهد الصورة كاملة قبل البدأ", value: "imagev6" },
            { src: "asses/quistionnaire/q6/a2/صورة6.jpg", title:"استمع لشرح صديقي كيف يركبها", value: "imagea6" },
            { src: "asses/quistionnaire/q6/a3/صورة7.png", title:"ابدأ بتركيب القطع مباشرة", value: "imagek6" },
            { src: "asses/quistionnaire/q6/a4/صورة1.jpg", title:"أقرأ التعليمات", value: "imagel6" }
        ]
    },
    {
        question: "السؤال السابع ماذا تفعل اذا اردت تعلم لعبة رياضية ؟",
        images: [
            { src: "asses/quistionnaire/q7/a1/صورة8.jpg", title:"اشاهد صور او فيديو للعبة", value: "imagev7" },
            { src: "asses/quistionnaire/q7/a2/صورة9.jpg", title:"استمع لشرح القوانين من المدرب", value: "imagea7" },
            { src: "asses/quistionnaire/q7/a3/صورة10.jpg", title:"اجرب تنفيذ الحركات بنفسي", value: "imagek7" },
            { src: "asses/quistionnaire/q7/a4/صورة11.jpg", title:"اقرأ قوانين اللعبة", value: "imagel7" }
        ]
    },
    {
        question: "السؤال الثامن كيف تحب ان تتعلم عن الفواكة ؟ ",
        images: [
            { src: "asses/quistionnaire/q8/a1/صورة12.jpg", title:"اشاهد صور الفواكة الملونة", value: "imagev8" },
            { src: "asses/quistionnaire/q8/a2/صورة13.jpg", title:"استمع للمعلمة وهي تتحدث عن الفواكة", value: "imagea8" },
            { src: "asses/quistionnaire/q8/a3/صورة14.jpg", title:"المس الفواكة واتذوقها واشم رائحتها", value: "imagek8" },
            { src: "asses/quistionnaire/q8/a4/صورة.jpg", title:"اقرأ اسماء الفواكة المكتوبة", value: "imagel8" }
        ]
    },
];

let currentQuestionIndex = 0;
let selectedValues = [];
let selectedImageValue = null; // لتخزين الصورة المختارة للسؤال الحالي

document.getElementById("startBtn").addEventListener("click", () => {
    const childName = document.getElementById("childName").value.trim();
    const childDesc = document.getElementById("childDesc").value.trim();

    if (!childName || !childDesc) {
        alert("الرجاء إدخال اسم الطفل والفصل أولاً");
        return;
    }
    selectedValues.push({ key: "childName", value: childName });
    selectedValues.push({ key: "childDesc", value: childDesc });
    // إخفاء القسم الأول وإظهار الأسئلة
    document.getElementById("startSection").style.display = "none";
    document.querySelector(".quistioncontainer").style.display = "block";

    // تحميل السؤال الأول
    loadQuestion();
});
// 🔹 تحميل السؤال
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.querySelector(".img-container");
    document.getElementById("questionText").innerText = question.question;

    selectedImageValue = null; // إعادة تعيين كل مرة للسؤال الجديد

    if (question.isText) {
        container.innerHTML = `<input type="text" id="textAnswer" placeholder="أدخل إجابتك هنا">`;
    } else {
        container.innerHTML = `
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
        `;
        const titleElements = document.querySelectorAll(".image-title");
        const imgElements = document.querySelectorAll(".answer-image");

        imgElements.forEach((img, index) => {
            img.src = question.images[index].src;
            titleElements[index].innerText = question.images[index].title;
            img.onclick = () => {
                selectedImageValue = question.images[index].value;
                // لتوضيح الاختيار بصرياً
                imgElements.forEach(i => i.style.border = "none");
                img.style.border = "3px solid green";
            };
        });
    }
}

// 🔹 حفظ الإجابة عند الضغط على زر التالي أو إرسال
function handleAnswer() {
    const question = questions[currentQuestionIndex];

    if (question.isText) {
        const text = document.getElementById("textAnswer").value.trim();
        if (!text) { alert("الرجاء إدخال الإجابة"); return false; }
        selectedValues.push({ key: question.valueKey, value: text });
    } else {
        if (!selectedImageValue) { alert("الرجاء اختيار صورة"); return false; }
        selectedValues.push(selectedImageValue);
    }

    console.log("القيم المختارة:", selectedValues);
    return true;
}

// 🔹 زر (التالي)
document.getElementById("yesBtn").addEventListener("click", () => {
   if (!handleAnswer()) return;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // تم الوصول إلى آخر سؤال
        document.getElementById("noBtn").disabled = false; // تفعيل زر التسليم
    }
});

// 🔹 زر (إرسال)


// إغلاق النافذة المنبثقة
document.getElementById("closeModalBtn").addEventListener("click", () => {
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "finalLandPage.html"; // ضع هنا رابط الصفحة الأساسية
});



document.getElementById("storeda").addEventListener("click", () => {
    // توجيه المستخدم إلى صفحة "results.html" (يمكنك تعديل الرابط حسب حاجتك)
    window.location.href = "storedAnswers.html";
});

// 🔹 الفنكشن لحساب النمط
function detectThinkingStyle(answers) {
    let visual = 0, auditory = 0, kinesthetic = 0, linguistic = 0;

    answers.forEach(answer => {
        if (typeof answer === "string") {
            if (["imagev1","imagev2","imagev3","imagev4","imagev5","imagev6","imagev7","imagev8"].includes(answer)) visual++;
            if (["imagea1","imagea2","imagea3","imagea4","imagea5","imagea6","imagea7","imagea8"].includes(answer)) auditory++;
            if (["imagek1","imagek2","imagek3","imagek4","imagek5","imagek6","imagek7","imagek8"].includes(answer)) kinesthetic++;
            if (["imagel1","imagel2","imagel3","imagel4","imagel5","imagel6","imagel7","imagel8"].includes(answer)) linguistic++;
        }
    });

    const maxScore = Math.max(visual, auditory, kinesthetic, linguistic);
    const result = [];
    if (visual === maxScore) result.push("بصري");
    if (auditory === maxScore) result.push("سمعي");
    if (kinesthetic === maxScore) result.push("حسي حركي");
    if (linguistic === maxScore) result.push("لغوي");
    
    window.currentThinkingStyle = result.join(" & ");

    return window.currentThinkingStyle;
}

// 🔹 تحميل أول سؤال عند فتح الصفحة
// loadQuestion();

/* ================== إظهار/إخفاء الصور الجانبية ================== */
/* ضعي هذا المقطع في نهاية ملف app.js (بعد كل الكود اللي أعطيتِه) */

(function() {
  // الحاويات التي قد تحتوي الصور الجانبية
  const sideContainers = document.querySelectorAll('.with-sides, .table-with-sides');

  // أزرار وعناصر التحكم
  const startBtn = document.getElementById('startBtn');          // زر ابدأ
  const closeModalBtn = document.getElementById('closeModalBtn'); // زر إغلاق المودال (إن وُجد)
  const Homebtn = document.getElementById('Homebtn');            // زر العودة (إن وُجد)
  const qContainer = document.querySelector('.quistioncontainer'); // صندوق الأسئلة

  // دوال المساعدة
  function hideSidePhotos() {
    sideContainers.forEach(c => c.classList.add('hide-sides'));
  }
  function showSidePhotos() {
    sideContainers.forEach(c => c.classList.remove('hide-sides'));
  }

  // 1) عند الضغط على زر "ابدأ" نخفي الصور (هذا يغطي أكثر الحالات)
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      hideSidePhotos();
      // لو عندك كود آخر يظهر الأسئلة هنا، هذا يكفي لإخفاء الصور
    });
  }

  // 2) مراقب للتغيّر في حالة صندوق الأسئلة (لو يتم إظهاره بطرق أخرى)
  if (qContainer) {
    const observer = new MutationObserver(() => {
      const isVisible = (qContainer.offsetParent !== null) || (qContainer.style.display && qContainer.style.display !== 'none');
      if (isVisible) hideSidePhotos();
    });
    observer.observe(qContainer, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  // 3) عند إغلاق المودال أو الضغط على زر العودة، نعيد الصور (اختياري)
  if (closeModalBtn) closeModalBtn.addEventListener('click', showSidePhotos);
  if (Homebtn) Homebtn.addEventListener('click', showSidePhotos);

  // ملاحظة: إذا تريدين أن الصور تُخفي أيضاً أثناء التصدير، أضيفي hideSidePhotos() داخل دالة التصدير بعد حفظ الملف.
})();



