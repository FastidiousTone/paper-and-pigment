# Acceptance checklist

## Layout and content
- [ ] Six products match data.json, including price, image and category.
- [ ] 320, 390, 768, 1024 and 1440px work without horizontal scrolling.
- [ ] Text remains usable at 200% zoom; controls and totals can grow.
- [ ] Images reserve their 800:600 aspect ratio and do not stretch.
- [ ] Fonts load locally; fallback text remains readable.
- [ ] The full cart and tall dialog remain usable in a short viewport.

## State and calculations - concrete test
Start with an empty bag. All prices below are in USD.
- [ ] Add Botanical marker set: quantity 1, heading (1), subtotal $24.00, total $24.00.
- [ ] Increase markers to 2: heading (2), marker subtotal $48.00, total $48.00.
- [ ] Add Everyday sketchbook: heading (3), two cart lines, total $66.00.
- [ ] Increase sketchbook to 2: heading (4), total $84.00.
- [ ] Decrease markers to 1: heading (3), total $60.00.
- [ ] Decrease markers to 0: marker line disappears, marker Add button returns, heading (2), total $36.00.
- [ ] Remove the sketchbook line: empty state returns, heading (0), no total or confirmation button.
- [ ] Add gouache and washi tape: heading (2), total $40.00. Confirm and check the same two lines and total.
- [ ] Dismiss confirmation with Escape: cart remains, focus returns to Confirm order.
- [ ] Reopen and choose Start new order: bag is empty, all product controls reset, first Add button receives focus.
- [ ] Rapid clicks do not produce duplicate lines, stale totals, zero or negative quantities.

## Accessibility
- [ ] Real buttons for actions, meaningful headings, and one main landmark.
- [ ] Keyboard reaches every action; visible focus is never clipped.
- [ ] Icon-only buttons have names including the relevant product where appropriate.
- [ ] Decorative icons are hidden from assistive technology; product images have useful alt text.
- [ ] A concise live status announces cart changes without announcing the whole grid repeatedly.
- [ ] Dialog has an accessible name; focus moves into it and stays inside until closed.
- [ ] Escape and the visible close control both dismiss the dialog and restore focus.
- [ ] Information about selection is not communicated by color alone.

## Delivery
- [ ] npm run build succeeds; production preview works.
- [ ] README explains fictional/demo scope, assets, and learning process.
- [ ] Source and package-lock.json committed; node_modules and dist excluded.
- [ ] Deployed pages and assets work with no console errors.

Optional localStorage, filters and themes are not needed to check off core completion.
