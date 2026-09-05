// services/notificationService.js
export const notifyQuizCompleted = async ({ userEmail, quizTitle, score, totalQuestions }) => {
  // TODO: wire to your email/push provider (SES, Nodemailer, FCM, etc.)
  console.log(`[notify] ${userEmail}: scored ${score}/${totalQuestions} on "${quizTitle}"`);
};

export const notifyCheatFlagged = async ({ teacherEmail, studentName, quizTitle, cheatScore }) => {
  console.log(`[notify] ${teacherEmail}: ${studentName} flagged (score ${cheatScore}) on "${quizTitle}"`);
};