# Style guide

## Art direction
Warm paper, art materials, and a quiet editorial layout. Cream background, deep navy text, cobalt controls, terracotta small accents. Original illustrations provide the color. No dark theme in core scope.

## Color tokens
| Suggested token | Value | Use |
|---|---|---|
| --canvas | #F7F5EF | Page |
| --surface | #FFFFFF | Bag and dialog |
| --ink | #202B38 | Main text |
| --muted | #626A70 | Secondary text |
| --primary | #294F99 | Buttons, price, selected outline |
| --primary-hover | #203F7B | Primary hover |
| --on-primary | #FFFFFF | Text on primary |
| --accent | #A84E34 | Small eyebrow text |
| --border | #C8CCC7 | Dividers and neutral outlines |
| --soft | #EEF1E9 | Notes and confirmation summary |
| --focus | #202B38 | Focus ring with offset |

Normal text uses ink, muted, accent, or primary on canvas/white. Do not use pale illustration colors as text colors. Check contrast when introducing new color pairs.

## Local fonts
Define your own @font-face declarations. Paths begin /fonts/.
- DejaVu Sans, weight 400: dejavu-sans-regular.ttf
- DejaVu Sans, weight 700: dejavu-sans-bold.ttf
- DejaVu Serif, weight 400: dejavu-serif-regular.ttf
Use font-display: swap. Body uses Sans; display heading and dialog heading use Serif. These are regular/bold files, not variable fonts. Use 400 and 700 only.

| Element | Desktop | Mobile | Weight / leading |
|---|---|---|---|
| Brand | 22px | 19px | Sans 700 / 1.3 |
| Main heading | 56px | 38px | Serif 400 / 1.15 |
| Intro | 16px | 15px | Sans 400 / 1.6 |
| Section heading | 28px | 26px | Serif 400 / 1.2 |
| Product name | 16px | 16px | Sans 700 / 1.4 |
| Product category | 13px | 13px | Sans 400 / 1.5 |
| Price | 16px | 16px | Sans 700 / 1.4 |
| Button | 14px | 14px | Sans 700 / 1.3 |
| Bag heading | 22px | 22px | Sans 700 / 1.3 |
| Dialog heading | 40px | 32px | Serif 400 / 1.15 |
| Note | 12px | 12px | Sans 400 / 1.5 |

## Layout
Reference widths: 1440 desktop, 768 tablet, 390 mobile. Test 320 too. These are viewport widths, not fixed page widths.
- Center content with a max width of 1200px. Desktop gutter at least 32px; mobile gutter 24px (20px at 320 if needed).
- Desktop catalog/bag: 816px + 32px gap + 352px at the maximum container width. The catalog has three equal columns with 24px gaps. Bag aligns with the product grid below the collection heading.
- At 768px: two product columns, bag below the catalog. At 390px: one product column, bag below it.
- Suggested starting breakpoints: below 1100px stack bag; below 600px use one product column. Adjust based on content, not device names.
- Product images have a 4:3 ratio, 12px corners. The card has no outer panel/border; an image outline indicates selected products.
- Product button overlaps the image's bottom edge, centered. Reserve space before category text.
- Bag uses 24px padding, a 16px radius, and subtle shadow or border.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px.
- Main buttons at least 48px tall. Increment, decrement, remove, and close buttons have at least 44x44px targets even when the visible icon is smaller.

## Interaction states
- Add to bag: white fill, primary text, border. Hover: soft background and primary border.
- Selected product: 2px primary outline around the image. Quantity control: primary fill, white text and icons.
- Confirm / Start new order: primary fill and on-primary text; primary-hover on hover.
- Focus-visible: clear 2px ring, approximately 3px offset. Keep it visible around overlapping controls.
- Empty bag: decorative bag symbol, heading and helpful text. No total or confirmation control.
- Respect prefers-reduced-motion if adding animation. Motion is optional.

## Dialog
Desktop maximum width 560px with 32px padding; mobile width within 16px side gutters with 24px padding. Keep it within the visible viewport with internal scrolling. Dark translucent backdrop; heading, demo note, summary, total, and new-order action. A visible close button is required.

## Copy
Brand: Paper & Pigment
Header caption: Supplies for your next idea
Eyebrow: GOOD TOOLS. ROOM TO PLAY.
Title: Make something yours.
Intro: Thoughtful tools for sketching, painting, and the ideas in between.
Collection: The everyday collection
Collection count: 6 creative essentials
Empty heading: Your bag (0)
Empty message: A little inspiration starts here.
Empty support: Add a favorite to begin your next project.
Bag note: Carefully chosen. Ready for your next idea.
Footer: A practice shop. No real orders or payments.
Dialog heading: A good start.
Dialog note: Demo order confirmed. No payment was taken and no order was sent.
Dialog subheading: Your creative essentials
