const userInput = document.querySelector(".user-input");
const imgInput = document.querySelector(".img-input");
const sendBtn = document.querySelector(".sendBtn");
const chatBody = document.querySelector(".chat-body");
sendBtn.addEventListener("click", sendUserMsg);

// function sendUserMsg() {
//   let userText = userInput.value.toString();
//   let userMessage = document.createElement("div");
//   userMessage.classList.add("user-message", "message");
//   userMessage.innerHTML = `
//             <div class="message-text">${userText}</div>
//   `;
//   chatBody.appendChild(userMessage);
// }
function sendUserMsg() {
  if (!userInput || !chatBody) return; // التحقق من أن العناصر موجودة

  let userText = userInput.value.trim(); // إزالة المسافات الزائدة
  if (userText === "") return; // تجاهل الرسائل الفارغة

  let userMessage = document.createElement("div");
  userMessage.classList.add("user-message", "message");
  userMessage.innerHTML = `<div class="message-text">${userText}</div>`;

  chatBody.appendChild(userMessage);

  userInput.value = ""; // إعادة تعيين حقل الإدخال
  chatBody.scrollTop = chatBody.scrollHeight; // التمرير إلى آخر رسالة
}

function popupToggle() {
  const chatbotPopup = document.querySelector(".chatbot-popup");
  chatbotPopup.classList.toggle("open");
}
document.querySelector(".bot").addEventListener("click", popupToggle);
document.querySelector(".CBtn").addEventListener("click", popupToggle);

sendBtn.innerHTML;
