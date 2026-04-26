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

## על הפרויקט

**DAMYEL Paris** היא אפליקציית מסחר אלקטרוני מלאה שפיתחתי עבור חנות שוקולד ומתוקים בסגנון פריזאי.  
הפרויקט מדגים מחזור חיים מלא של מוצר — מהצגה בחנות, דרך סל הקניות, ועד ניהול מלאי על ידי מנהל.

הפרויקט בנוי כ-**Monorepo** עם הפרדה מלאה בין צד לקוח לצד שרת, ומיישם אדריכלות REST API סטנדרטית עם אבטחת JWT.

---

## תכונות עיקריות

| תכונה | תיאור |
|---|---|
| **אימות משתמשים** | הרשמה, כניסה ויציאה עם JWT ו-bcrypt |
| **קטלוג מוצרים** | סינון לפי קטגוריה, חיפוש ותצוגת פרטים |
| **סל קניות** | הוספה, הסרה ועדכון כמות בזמן אמת |
| **גלריית תמונות** | גלריה אינטראקטיבית עם תמונות ממוזערות בעמוד הבית |
| **לוח ניהול** | CRUD מלא למוצרים — רק למשתמשי מנהל |
| **תמיכה ב-RTL** | ממשק מותאם לעברית עם כיווניות ימין-לשמאל |
| **עיצוב רספונסיבי** | תצוגה מותאמת לכל גדלי מסך |

---

## קטגוריות מוצרים

- **טבלאות** — שוקולד בסגנון קלאסי
- **מיוחדים** — פריטים ייחודיים ומוגבלים
- **מארזים** — מארזי מתנה מעוצבים
- **שוקולדים** — שוקולדים ופרלינים
- **מקרונים** — מקרונים צרפתיים אותנטיים

---

## טכנולוגיות

### צד לקוח (Frontend)
```
React 19          — ספריית UI מודרנית עם Hooks
Redux Toolkit     — ניהול מצב גלובלי + RTK Query לקריאות API
React Router 7    — ניתוב בצד הלקוח (SPA)
PrimeReact 10     — ספריית קומפוננטות עשירה (DataTable, Dialog, Toast, Galleria)
PrimeFlex         — מערכת Grid רספונסיבית
Axios             — HTTP Client לתקשורת עם ה-API
```

### צד שרת (Backend)
```
Node.js + Express 5  — שרת REST API
MongoDB + Mongoose 8 — בסיס נתונים NoSQL עם Schema validation
JWT                  — אימות Stateless מאובטח
bcrypt               — הצפנת סיסמאות (10 salt rounds)
CORS                 — ניהול מדיניות cross-origin
dotenv               — ניהול משתני סביבה
Nodemon              — hot-reload בפיתוח
```

---

## ארכיטקטורה ומבנה הפרויקט

```
node-react/
├── client/                         ← React Frontend
│   └── src/
│       ├── app/
│       │   ├── store.js            ← Redux Store
│       │   └── apiSlice.js         ← RTK Query Base API
│       ├── features/
│       │   ├── userSlice.js        ← User State
│       │   └── func/
│       │       ├── productSlice.js ← Product State
│       │       └── productApiSlice.js
│       └── Component/
│           ├── All/                ← דפי האפליקציה
│           │   ├── Home.jsx        ← גלריה + ברוכים הבאים
│           │   ├── Product.jsx     ← קטלוג + סינון
│           │   ├── MyBasket.jsx    ← סל קניות
│           │   ├── Manager.jsx     ← לוח ניהול מנהל
│           │   ├── Login.jsx
│           │   └── Register.jsx
│           └── Shared/             ← קומפוננטות משותפות
│               ├── Header.jsx
│               ├── Layout.jsx
│               └── Footer.jsx
│
└── server/                         ← Node.js Backend
    ├── config/
    │   ├── dbConn.js               ← חיבור MongoDB
    │   └── corsOptions.js
    ├── models/
    │   ├── User.js                 ← Schema משתמש
    │   ├── Product.js              ← Schema מוצר
    │   └── Basket.js               ← Schema סל קניות
    ├── routes/
    │   ├── userRoute.js
    │   ├── productRoute.js
    │   └── basketRoute.js
    ├── controllers/
    │   ├── userController.js
    │   ├── productController.js
    │   └── basketController.js
    ├── midlleware/
    │   ├── verifyJWT.js            ← אימות JWT
    │   └── manager.js              ← הרשאות מנהל
    └── server.js                   ← נקודת כניסה
```

---

## API Endpoints

### משתמשים `/api/user`
| Method | Endpoint | תיאור | הרשאה |
|--------|----------|-------|-------|
| `POST` | `/re` | הרשמת משתמש חדש | פתוח |
| `POST` | `/login` | כניסה + קבלת JWT | פתוח |
| `GET` | `/all` | רשימת כל המשתמשים | פתוח |

### מוצרים `/api/product`
| Method | Endpoint | תיאור | הרשאה |
|--------|----------|-------|-------|
| `GET` | `/` | כל המוצרים | פתוח |
| `GET` | `/category` | סינון לפי קטגוריה | פתוח |
| `GET` | `/name` | חיפוש לפי שם | פתוח |
| `GET` | `/:id` | מוצר בודד | פתוח |
| `POST` | `/create` | יצירת מוצר | מנהל בלבד |
| `PUT` | `/update` | עדכון מוצר | מנהל בלבד |
| `DELETE` | `/:id` | מחיקת מוצר | מנהל בלבד |

### סל קניות `/api/basket`
| Method | Endpoint | תיאור | הרשאה |
|--------|----------|-------|-------|
| `GET` | `/my` | הסל של המשתמש המחובר | JWT |
| `POST` | `/create` | הוספת מוצר לסל | JWT |
| `POST` | `/add` | הגדלת כמות | JWT |
| `DELETE` | `/delete` | הקטנת כמות | JWT |
| `DELETE` | `/delproduct` | הסרת מוצר מהסל | JWT |

---

## הפעלת הפרויקט

### דרישות מוקדמות
- Node.js 18+
- MongoDB (מקומי או Atlas)

### 1. שכפל את הפרויקט
```bash
git clone https://github.com/sari1108/node-react.git
cd node-react
```

### 2. הגדר משתני סביבה
צור קובץ `.env` בתיקיית `server/`:
```env
PORT=44444
DATABASE_URI=mongodb://localhost:27017/myDatabase
ACCESS_TOKEN_SECRET=your_super_secret_key_here
```

### 3. הפעל את השרת
```bash
cd server
npm install
npm run dev
```

### 4. הפעל את הלקוח
```bash
cd client
npm install
npm start
```

האפליקציה תפתח בכתובת: `http://localhost:3000`

---

## מודל אבטחה

```
הרשמה/כניסה  →  bcrypt (10 salt rounds)
                ↓
            JWT Token
                ↓
     Authorization: Bearer <token>
                ↓
       verifyJWT Middleware
                ↓
    manager Middleware (מנהל בלבד)
```

- סיסמאות מוצפנות בעזרת **bcrypt**
- אימות מבוסס **JWT Stateless** — ללא session בצד שרת
- Middleware נפרד לאימות זהות ולאימות הרשאת מנהל
- הגנת CORS מוגדרת עבור המקורות המורשים בלבד

---

## מה למדתי מהפרויקט

- בניית **REST API** מלא עם Express כולל middleware מותאם אישית
- ניהול מצב מורכב עם **Redux Toolkit** ו-**RTK Query**
- יישום **אימות JWT** מקצה לקצה — צד שרת וצד לקוח
- תכנון **Schema** ב-MongoDB עם קשרים בין אוספים (references)
- עבודה עם **ספריות UI מתקדמות** (PrimeReact) בסביבת React
- הפרדת תחומי אחריות בארכיטקטורת **MVC** בצד השרת

---

## פותח על ידי

**סארי** — מפתחת Full Stack  
ella0504116441@gmail.com  
[github.com/sari1108](https://github.com/sari1108)

---

<div align="center">

*נבנה עם אהבה — ועם הרבה שוקולד*

</div>

</div>
