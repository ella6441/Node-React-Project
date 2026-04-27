<div dir="rtl">

<div align="center">

# DAMYEL Paris — חנות שוקולד מקוונת

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.8-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

> **אפליקציית Full-Stack מלאה לחנות שוקולד פריזאית — כולל ממשק לקוח, לוח ניהול ו-API מאובטח**

</div>

---

<!-- כאן ניתן להוסיף תמונות -->

---

## על הפרויקט

**DAMYEL Paris** היא אפליקציית מסחר אלקטרוני לחנות שוקולד בסגנון פריזאי.  
הפרויקט בנוי כ-**Monorepo** עם הפרדה מלאה בין צד לקוח (React) לצד שרת (Node.js), ומיישם REST API מאובטח עם JWT.

קטגוריות: טבלאות | מיוחדים | מארזים | שוקולדים | מקרונים

---

## תכונות עיקריות

| תכונה | תיאור |
|---|---|
| **אימות משתמשים** | הרשמה, כניסה ויציאה עם JWT ו-bcrypt |
| **קטלוג מוצרים** | סינון לפי קטגוריה וחיפוש |
| **סל קניות** | הוספה, הסרה ועדכון כמות בזמן אמת |
| **לוח ניהול** | CRUD מלא למוצרים — מנהל בלבד |
| **גלריית תמונות** | גלריה אינטראקטיבית בעמוד הבית |
| **עיצוב רספונסיבי** | תמיכה ב-RTL ומותאם לכל מסך |

---

## טכנולוגיות

**Frontend:** React 19, Redux Toolkit, React Router 7, PrimeReact, Axios

**Backend:** Node.js, Express 5, MongoDB, Mongoose, JWT, bcrypt

---

## הפעלת הפרויקט

```bash
# שרת
cd server && npm install && npm run dev

# לקוח
cd client && npm install && npm start
```

קובץ `.env` בתיקיית `server/`:
```env
PORT=44444
DATABASE_URI=mongodb://localhost:27017/myDatabase
ACCESS_TOKEN_SECRET=your_secret_key
```

---

## מה למדתי מהפרויקט

- בניית **REST API** מלא עם Express וניהול הרשאות Middleware
- ניהול מצב גלובלי עם **Redux Toolkit** ו-**RTK Query**
- יישום **אימות JWT** מקצה לקצה
- תכנון **Schema** ב-MongoDB עם קשרים בין אוספים
- עבודה עם **ספריות UI מתקדמות** בסביבת React

---

## פותח על ידי

**אלה** — מפתחת Full Stack  
[github.com/ella6441](https://github.com/ella6441)

---

<div align="center">

*נבנה עם אהבה — ועם הרבה שוקולד*

</div>

</div>
