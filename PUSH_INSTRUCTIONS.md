# Push Request — feat/admin-apuestas-results

## Situación del sandbox (verificada 2026-10-07)
- El repo remoto es ACCESIBLE (clonado sin problemas), pero GitHub exige autenticación para escribir: este entorno NO tiene credenciales, por lo que el push debe hacerse desde tu máquina o con un token.
- IMPORTANTE: en GitHub ya se fusionó el PR #1 (responsive). Las ramas locales antiguas de este sandbox quedaron obsoletas (contenían node_modules/dist y no partían del main actualizado).
- Se construyó una rama NUEVA Y LIMPIA `feat/admin-apuestas-results` basada en el main actual de GitHub, con 2 commits que representan exactamente la funcionalidad pedida. Los parches están VERIFICADOS: aplicados sobre un clon fresco del repo → `git am` sin conflictos y código resultante idéntico byte a byte al trabajo final del sandbox.

## Archivos listos en /workspace
- 0001-Add-admin-panel-for-registering-bets-match-history-a.patch (52 KB)
- 0002-Add-nula-push-void-bet-result-stake-returned-exclude.patch (17 KB)

## Comandos para crear el PR (desde tu computadora)
```bash
cd apuestasInteligente
git checkout -b feat/admin-apuestas-results origin/main
git am < 0001-Add-admin-panel-for-registering-bets-match-history-a.patch
git am < 0002-Add-nula-push-void-bet-result-stake-returned-exclude.patch
git push -u origin feat/admin-apuestas-results
gh pr create --base main \
  --title "feat: panel admin de apuestas, historial /results y rendimiento general" \
  --body "- Fuente de datos compartida src/data/predictions.ts (apuestas, administradores, nulas/push)
- /admin: registro de apuestas con múltiples administradores + tabla de partidos
- /results: historial público (tabla desktop / cards móvil)
- Inicio: rendimiento general dinámico (ROI, win rate, nulas excluidas)
- Apuestas NULAS (Draw No Bet / handicaps): stake devuelto, excluidas de métricas"
```
(Alternativa sin gh: tras el push, abrir el enlace https://github.com/carlossoler20/apuestasInteligente/pull/new/feat/admin-apuestas-results)

## Alternativa con token (para que el sandbox haga el push)
Proporciona un Personal Access Token con scope `repo` y ejecutaré:
git push https://x-access-token:<TOKEN>@github.com/carlossoler20/apuestasInteligente.git feat/admin-apuestas-results

## Contenido de los commits
### Commit 1: Admin + Results + Rendimiento
src/data/predictions.ts (nuevo, 312 líneas), src/pages/admin.astro (nuevo, ~346), src/pages/results.astro, src/components/PicksSection.astro, PredCardFeatured.astro, PredCardSecondary.astro, Hero.astro, NavBar.astro, index.astro.

### Commit 2: Apuestas NULAS (push/void)
ResultadoApuesta += 'nula'; ejemplo Draw No Bet; win rate sobre decididas; ROI/stake devuelto; badges ➖ en admin/results/inicio; desglose por admin con nulas.
