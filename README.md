# Alza Produkty 👽
## Popis
Aplikace pro zobrazení produktů postavená v Reactu a TypeScriptu, stylovaná v CSS. V projektu jsou použity knihovny Embla Carousel a react-i18next.
⚠️ Při volání endpointu ze zadání mi server vracel HTTP 403, proto jsem response stáhla přes Postman a uložila ji lokálně do data.json. Struktura skutečné odpovědi se lišila od ukázky v zadání, proto jsou typy a mapování přizpůsobené reálnému JSONu. Data se načítají asynchronně přes fetchProductsPageData() - pro demonstraci načítání je přidána umělá latence (delay) a aplikace ošetřuje stavy loading/error/success stejně jako u reálného REST API.

**Live Demo:**  
https://alzaproducts.netlify.app

## Spuštění projektu
```bash
# Naklonujte tento repozitář
https://github.com/SedlakovaLucie/alza-project.git

# Nainstalujte
npm install

# Spusťte aplikaci
npm run dev
```

