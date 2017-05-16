# MOPCON 2017 Back-End

- Node.js
    - Framework: express 4.14
    - Template: ejs
- [Google Drive](https://drive.google.com/drive/u/0/folders/0B4fEFbbW93y5Qi1zOGliaS1BX3M)

---

## Page Router

---

## API Router
|         Path         |  功能       | Type  |
|----------------------|------------|-------|
| /api/data/schedule   | 議程列表    | Array |
| /api/data/speaker    | 講師列表    | Array |
| /api/data/unconf     | 交流場次列表 | Array |
| /api/data/community  | 主辦單位列表 | Object |
| /api/data/sponsor    | 贊助商列表   | Object |
| /api/data/json/:fileName | 2016 JSNO 資料 | Object |

### /api/data/schedule
```
[
    {
        "name"    : "講師姓名",
        "info"    : "講師自己介紹",
        "topic"   : "議程名稱",
        "summary" : "議程簡介",
        "image"   : "講師個人照檔案名稱",
        "facebook": "講師 facebook link",
        "github"  : "講師 github link",
        "blog"    : "講師 blog link",
        "website" : "講師 website link",
        "linkin"  : "講師 linkin link"
    }
]
```

###  /api/data/json/:fileName
MOPCON 2016 JSON file read.
- schedule
- community
- sponsor
- unconf
 
> ex: http://localhost/:3000/api/data/json/schedule
