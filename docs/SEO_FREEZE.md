# 🧊 SEO FREEZE PROTOCOL (Active until Google Indexing Complete)

> **Effective Date**: 2025-12-30  
> **Expected Duration**: 7 days (until Google Favicon Crawler completes indexing)

---

## ⚠️ Why This Matters

Google identifies your favicon by its **File Hash** (the `?34d...` part of the URL). As long as the `icon.png` file itself is not modified, Next.js will generate the **exact same hash** on every deployment.

If you change the file, the hash changes → Google sees a "new" asset → **indexing queue resets**.

---

## 🚫 DO NOT MODIFY (Quarantine List)

| File | Reason |
|------|--------|
| `src/app/icon.png` | Primary favicon - hash must remain stable |
| `src/app/apple-icon.png` | Apple touch icon - same principle |
| `src/app/layout.tsx` → `metadata` export | Contains SEO-critical structured data |

---

## ✅ SAFE TO DEPLOY

- ✅ Update text content on `page.tsx`
- ✅ Add new routes/pages
- ✅ Change CSS styles
- ✅ Install new npm packages
- ✅ Modify any UI components
- ✅ Update business logic

---

## 📋 Pre-Deploy Checklist

Before every deployment during freeze period:

- [ ] `icon.png` unchanged? (`git status src/app/icon.png`)
- [ ] `apple-icon.png` unchanged?
- [ ] `layout.tsx` metadata untouched?

---

*This freeze will be lifted once Google Search Console confirms favicon indexing is complete.*
