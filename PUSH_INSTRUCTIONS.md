# Instrucciones para subir los cambios al repositorio privado

## Opción A: Usando GitHub CLI (recomendada)

```bash
# 1. Autenticarte con gh (solo la primera vez)
gh auth login

# 2. Crear una rama nueva desde main
git checkout -b feat/admin-apuestas-results main

# 3. Aplicar el parche generado en este sandbox
git am < apuestas-feature.patch

# 4. Subir la rama al remoto (repo privado)
git push -u origin feat/admin-apuestas-results

# 5. Crear el Pull Request automáticamente
gh pr create --base main \
  --title "feat: panel admin de apuestas, historial /results y rendimiento general" \
  --body "## Cambios principales
- Fuente de datos compartida src/data/predictions.ts (apuestas, administradores, nulas/push)
- /admin: registro de apuestas con múltiples administradores (nombre + apodo)
- /results: historial público de partidos (tabla en desktop, cards en móvil)
- Inicio: sección de rendimiento general dinámica (ROI, win rate, nulas)
- Soporte de apuestas NULAS (Draw No Bet / handicaps): stake devuelto, excluidas del win rate y ROI
- Mejoras responsive: viewport, tipografías fluidas (clamp), NavBar/Hero/tarjetas optimizadas para móvil
- Accesibilidad táctil: botones convertidos en enlaces, targets >44px

## Archivos modificados (18 archivos, +1308 líneas)
src/components/: FeaturesBar, Footer, Hero, MainCard, MainLeagues, NavBar, PicksSection, PredCardFeatured, PredCardSecondary, SecondCard, SectionBlog, TertiaryCard
src/data/predictions.ts (nuevo)
src/layouts/Layout.astro
src/pages/: admin.astro (nuevo), index.astro, results.astro (nuevo)
src/styles/global.css

## Nota técnica
Sitio estático Astro: los formularios de /admin guardan borradores en localStorage; para publicar definitivamente se añade la entrada a src/data/predictions.ts (todo centralizado en un solo lugar). Siguiente paso opcional: conectar a backend/CMS (Sanity, Supabase, etc.)."
```

## Opción B: Desde el navegador tras hacer push

```bash
# Pasos 1–4 idénticos a Opción A, luego:
git push -u origin feat/admin-apuestas-results
```
GitHub mostrará en la terminal un enlace directo:
```
remote: Create a pull request for 'feat/admin-apuestas-results' on GitHub by visiting:
remote:      https://github.com/carlossoler20/apuestasInteligente/pull/new/feat/admin-apuestas-results
```
Entra a ese enlace, revisa los commits y pulsa **"Create pull request"**.

---

### Verificación previa (ya realizada en el sandbox)
✅ El parche `apuestas-feature.patch` (96 KB) contiene 4 commits limpios sobre `main`.  
✅ Se probó aplicar el parche en un clon temporal: todas las páginas (`admin.astro`, `results.astro`) y componentes quedaron presentes.  
✅ Los 10,655 archivos de `node_modules/` y `dist/` **no están incluidos** en el parche (excluidos correctamente por `.gitignore`).  

El archivo `apuestas-feature.patch` está listo en `/workspace/apuestas-feature.patch` para copiarlo a tu computadora.
