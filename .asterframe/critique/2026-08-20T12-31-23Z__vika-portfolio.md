---
target: vika-portfolio full pass
total_score: 33
p0_count: 0
p1_count: 0
timestamp: 2026-08-20T12-31-23Z
slug: vika-portfolio
---
## Design Health Score (Nielsen, 0–4)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Активный пункт меню помечен aria-current; индикаторов загрузки нет (сайт статичный) |
| 2 | Match System / Real World | 4 | Язык аудитории, метафоры галереи и lookbook |
| 3 | User Control and Freedom | 3 | Esc закрывает меню и возвращает из кейса; undo не применимо |
| 4 | Consistency and Standards | 3 | Единая система микро-лейблов и hairline; смешение RU/EN — осознанное |
| 5 | Error Prevention | 4 | Нет форм и деструктивных действий; битые ссылки исключены проверкой 87 ассетов |
| 6 | Recognition Rather Than Recall | 3 | Навигация скрыта за меню — допустимо для brand-register, пункты подписаны |
| 7 | Flexibility and Efficiency | 3 | Клавиатура: Tab/Enter/Esc, skip-link; шорткатов нет |
| 8 | Aesthetic and Minimalist Design | 4 | Монохромная дисциплина, работы — главный контент |
| 9 | Error Recovery | 3 | Несуществующий кейс редиректит на /works; catch-all → / |
| 10 | Help and Documentation | 3 | Контакты и соцсети на виду; help не нужен |
| **Total** | | **33/40** | **Good** |

## Anti-Patterns Verdict
LLM: сайт НЕ выглядит AI-generated — монохромная галерейная система с осознанной типографикой (Oswald+Inter, кириллица), hairline-сетками и реальным контентом. Detector: 12 групп/73 hits до правок → 7 групп/43 hits после; остаток — подтверждённые исключения: скримы на фото (функция, не атмосфера), нумерация кейсов 01–07 (реальная последовательность), переходы 300–500ms (в бюджете модалок), gap-px сетки (фирменный приём), Inter (существующее brand-решение, отмечен к пересмотру).

## Priority Issues (исправлены в этом прогоне)
- [P1] Карточки работ были div/onClick без клавиатуры → role=link, tabIndex, Enter/Space, aria-label, focus-видимость оверлея.
- [P1] Меню: не закрывалось по Esc, без фокус-менеджмента и aria → dialog/aria-modal, Esc, focus-trap на open/close, пункты стали Link.
- [P1] Контраст микро-лейблов ниже AA (neutral-400 на белом, white/40 на чёрном) → подняты до #737373 / white/50.
- [P1] Мёртвый код: шаблонный shadcn-каталог components/ui (60+ файлов) не импортировался, давал 8/9 ошибок линта → удалён; удалён демо-остаток Vite Home.tsx.
- [P2] body font-size 14px ниже мобильного пола → 16px; добавлены глобальные :focus-visible и prefers-reduced-motion.
- [P2] duration-400 (несуществующий класс Tailwind) → duration-500; hero-кейса получил fetchPriority=high; per-route document.title; скрытый h1 на главной; skip-link.
- [P2] Снесены ложные секционные маркеры ( 01 )/( 04 )/( 05 ), не образовывавшие последовательности.

## Remaining / watchlist
- Inter в body — в reflex-reject списке скилла; оставлен как текущее brand-решение. Кандидат на пересмотр: Golos Text (полная кириллица, менее дефолтен).
- Микро-лейблы 10px — осознанный fashion-приём, ниже рекомендованных 14px для основного текста; основной текст поднят до 16px.
- Изображениям не хватает width/height (CLS в masonry-ленте Visual); нужны метаданные кадров.
