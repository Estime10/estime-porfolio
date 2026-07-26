# Take The Crown (3x3) · Étude de cas

**Repo :** `creativity/TTC-v0` · **Statut :** Release 1.0.0 · 2026  
**Live :** https://take-the-crown-v001.vercel.app/  
**≠** ligue 1v1 (`1V1_streetball`) : autre produit, même univers de marque.

## Exemples retenus (pas un dump de la doc)

1. Chaîne Identity → Event → Match → Result verified → Ranking
2. Anti-farming : scores réservés à l’auteur event, points après `verified`
3. AuthZ en profondeur : Server Actions + RLS + RPC ranking
4. Admin path obscure (`ADMIN_PANEL_PATH`) + Geoapify à la création d’event
5. Documented ≠ Implemented ≠ MVP (brackets / private events hors ship)

## Sources doc produit

`doc/00_Product/`, `doc/01_Domain/`, `doc/03_Architecture/` (sécurité, UI courante, supabase)

## Stack

Next.js 16 · Supabase · Zod · GSAP · Vitest · Playwright

## Lien app

`/projects/ttc-v0`
