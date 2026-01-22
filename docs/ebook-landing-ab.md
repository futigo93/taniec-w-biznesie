# Ebook landing A/B/C

## Routing

- Wejscie: `/ebook`
- Przekierowanie: `/ebook1`, `/ebook2`, `/ebook3`
- Sticky wariant: cookie `ebook_variant` (30 dni)
- Query string (UTM) jest zachowywany w przekierowaniu.

## Eventy GA4

- `ebook_variant_view` (param: `variant`)
- `ebook_demo_download` (param: `variant`, `source` = `button` | `cover`)
- `ebook_full_interest` (param: `variant`)
- `newsletter_submit` (param: `source`)

## CTA do zapisu

Przycisk zapisu przenosi na `/#zapis` i zachowuje query string z landing page.
