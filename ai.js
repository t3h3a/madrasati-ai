// عناصر DOM
const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

// رابط الـ Worker تبعك
const API_URL = "https://patient-river-127d.popoytydhdt.workers.dev/";

// دالة إضافة رسالة للصندوق
function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// رسالة ترحيب
addMessage("مرحباً! أنا هنا لمساعدتك. اسأل ما تريد ❤️", "bot");


// عند الإرسال
chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    // رسالة انتظار
    const loading = document.createElement("div");
    loading.classList.add("message", "bot");
    loading.textContent = "⏳ جاري التفكير...";
    chatBox.appendChild(loading);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputs: text })
        });

        const data = await response.json();
        loading.remove();

        if (data.error) {
            addMessage("⚠️ حدث خطأ بالخادم. حاول لاحقاً.", "bot");
        } else {
            const answer = data.choices?.[0]?.message?.content || "لم أفهم سؤالك.";
            addMessage(answer, "bot");
        }
    } catch (err) {
        loading.remove();
        addMessage("⚠️ لا يوجد اتصال. تأكد من الإنترنت.", "bot");
    }
});
