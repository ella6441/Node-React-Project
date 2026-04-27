<div dir="rtl">

<div align="center">

# DAMYEL Paris — חנות שוקולד מקוונת

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.8-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

> **אפליקציית Full-Stack מלאה לחנות שוקולד פריזאית — ממשק לקוח, לוח ניהול ו-API מאובטח**

</div>

---

<!-- תמונות -->

---

## על הפרויקט

**DAMYEL Paris** היא אפליקציית מסחר אלקטרוני לחנות שוקולד בסגנון פריזאי.  
הפרויקט בנוי כ-**Monorepo** עם הפרדה מלאה בין צד לקוח לצד שרת, ומיישם ארכיטקטורת REST API מלאה עם אבטחת JWT והרשאות מבוססות תפקידים.

---

## תכונות עיקריות

| תכונה | תיאור |
|---|---|
| **אימות משתמשים** | הרשמה וכניסה עם JWT ו-bcrypt |
| **קטלוג מוצרים** | סינון לפי קטגוריה וחיפוש לפי שם |
| **סל קניות** | הוספה, הסרה ועדכון כמות בזמן אמת |
| **לוח ניהול** | CRUD מלא למוצרים — מנהל בלבד |
| **גלריית תמונות** | גלריה אינטראקטיבית עם תמונות ממוזערות |
| **הרשאות מבוססות תפקידים** | הפרדה בין משתמש רגיל למנהל |
| **עיצוב רספונסיבי** | תמיכה מלאה ב-RTL ומותאם לכל מסך |

---

## טכנולוגיות

### Frontend
| טכנולוגיה | שימוש |
|---|---|
| React 19 | ממשק משתמש עם Hooks |
| Redux Toolkit + RTK Query | ניהול מצב גלובלי וקריאות API עם caching |
| React Router 7 | ניתוב בצד הלקוח (SPA) |
| PrimeReact 10 | קומפוננטות UI — DataTable, Dialog, Galleria, Toast |
| Axios | תקשורת עם ה-API |

### Backend
| טכנולוגיה | שימוש |
|---|---|
| Node.js + Express 5 | שרת REST API |
| MongoDB + Mongoose | בסיס נתונים NoSQL עם Schema Validation |
| JWT + bcrypt | אימות מאובטח והצפנת סיסמאות |
| Middleware מותאם | אימות JWT והרשאת מנהל |

---

## ארכיטקטורת המערכת

```
client/src/
├── app/          → Redux Store + RTK Query
├── features/     → Slices (user, product)
└── Component/
    ├── All/      → Home, Product, MyBasket, Manager, Login, Register
    └── Shared/   → Header, Layout, Footer

server/
├── models/       → User, Product, Basket (Mongoose Schemas)
├── routes/       → userRoute, productRoute, basketRoute
├── controllers/  → business logic
└── midlleware/   → verifyJWT, manager
```

---

## API נבחר

| Method | Endpoint | תיאור | הרשאה |
|--------|----------|-------|-------|
| `POST` | `/api/user/login` | כניסה + JWT | פתוח |
| `GET` | `/api/product` | כל המוצרים | פתוח |
| `GET` | `/api/product/category` | סינון לפי קטגוריה | פתוח |
| `POST` | `/api/product/create` | יצירת מוצר | מנהל |
| `PUT` | `/api/product/update` | עדכון מוצר | מנהל |
| `GET` | `/api/basket/my` | סל המשתמש | JWT |
| `POST` | `/api/basket/create` | הוספה לסל | JWT |

---

## הפעלה מקומית

```bash
# שרת
cd server && npm install && npm run dev

# לקוח (טרמינל נפרד)
cd client && npm install && npm start
```

קובץ `.env` בתיקיית `server/`:
```env
PORT=44444
DATABASE_URI=mongodb://localhost:27017/myDatabase
ACCESS_TOKEN_SECRET=your_secret_key
```

---

## מה למדתי

- בניית **REST API** מלא עם Express כולל Middleware מותאם אישית לאימות JWT ולהרשאות
- ניהול מצב מורכב עם **Redux Toolkit** ו-**RTK Query** — כולל caching אוטומטי
- יישום **אימות מבוסס JWT** מקצה לקצה בצד שרת ובצד לקוח
- תכנון **Schemas** ב-MongoDB עם קשרים בין אוספים (references)
- עבודה עם **ספריות UI מתקדמות** (PrimeReact) בסביבת React מודרנית
- הפרדת תחומי אחריות בארכיטקטורת **MVC**

---

## פותח על ידי

**אלה** — מפתחת Full Stack  
[github.com/ella6441](https://github.com/ella6441)

---

<div align="center">

*נבנה עם אהבה — ועם הרבה שוקולד*

</div>

</div>
