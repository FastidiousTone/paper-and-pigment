# Paper & Pigment - Section Styling Guide

A design reference without CSS code. All measurements, colors, and text styles are provided; you decide how to implement them. This replaces the previous complete guide and spacing guide.

Spacing instructions name margin, padding, or gap where relevant, but there are no stylesheet declarations, positioning recipes, or completed selectors to copy.

## Jump to a section

- [Custom properties](#custom-properties)
- [Fonts and page defaults](#fonts-and-page-defaults)
- [Shared container](#shared-container)
- [Header](#header)
- [Introduction](#introduction)
- [Collection](#collection)
- [Product cards](#product-cards)
- [Empty bag](#empty-bag)
- [Populated bag](#populated-bag)
- [Confirmation dialog](#confirmation-dialog)
- [Footer](#footer)
- [Interaction and accessibility](#interaction-and-accessibility)

## Reading the measurements

- Mobile: below 600px. Tablet: 600px to below 1100px. Desktop: 1100px and wider.
- Measurements are CSS pixels. Rem conversions assume a 16px root size. Keep the root at 100%.
- Use top/bottom terminology throughout. Unspecified margins and padding are zero.
- Give each space one owner; do not add both a bottom margin and a top margin for the same separation.
- Text and panels grow naturally. Do not impose fixed heights on headings, paragraphs, cart rows, or the bag.
- The values in this guide take priority over incidental differences in the static reference images.

## Custom properties

All names and values are grouped here for tokens.css. These are reference entries, not CSS declarations. Keep only one definition of each name at each breakpoint. Do not add duplicate names solely because you see them again in a section.

### Colors

- **--canvas**: #f7f5ef.
- **--surface**: #ffffff.
- **--ink**: #202b38.
- **--muted**: #626a70.
- **--primary**: #294f99.
- **--primary-hover**: #203f7b.
- **--on-primary**: #ffffff.
- **--accent**: #a84e34.
- **--border**: #c8ccc7.
- **--soft**: #eef1e9.
- **--focus**: #202b38.

### Font families and weights

- **--font-body**: 'DejaVu Sans', sans-serif.
- **--font-heading**: 'DejaVu Serif', serif.
- **--weight-regular**: 400.
- **--weight-bold**: 700.

### Text sizes: mobile defaults

- **--text-brand**: 1.1875rem (19px).
- **--text-main-heading**: 2.375rem (38px).
- **--text-intro**: 0.9375rem (15px).
- **--text-section-heading**: 1.625rem (26px).
- **--text-product-name**: 1rem (16px).
- **--text-product-category**: 0.8125rem (13px).
- **--text-product-price**: 1rem (16px).
- **--text-product-btn**: 0.875rem (14px).
- **--text-bag-heading**: 1.375rem (22px).
- **--text-dialog-heading**: 2rem (32px).
- **--text-note**: 0.75rem (12px).

### Spacing

- **--space-4px**: 0.25rem.
- **--space-8px**: 0.5rem.
- **--space-12px**: 0.75rem.
- **--space-16px**: 1rem.
- **--space-20px**: 1.25rem.
- **--space-24px**: 1.5rem.
- **--space-32px**: 2rem.
- **--space-40px**: 2.5rem.
- **--space-48px**: 3rem.
- **--space-64px**: 4rem.

### Layout and shape

- **--content-max-width**: 75rem (1200px).
- **--page-gutter**: 1.5rem (24px).
- **--bag-width**: 22rem (352px).
- **--dialog-max-width**: 35rem (560px).
- **--target-min-height**: 2.75rem (44px).
- **--button-min-height**: 3rem (48px).
- **--product-control-width**: 10rem (160px).
- **--radius-small**: 0.5rem.
- **--radius-image**: 0.75rem.
- **--radius-panel**: 1rem.
- **--radius-dialog**: 1.25rem.
- **--radius-pill**: 999px.

### Additional tokens: grouped together for easy copying

- **--text-header-caption**: 0.75rem (12px).
- **--text-eyebrow**: 0.75rem (12px).
- **--text-cart-name**: 0.875rem (14px).
- **--text-cart-detail**: 0.8125rem (13px).
- **--text-total-label**: 0.875rem (14px).
- **--text-total-amount**: 1.75rem (28px).
- **--backdrop**: rgb(16 28 48 / 55%).

### Responsive token changes

Below 360px, change the page gutter to 20px (1.25rem).

At 600px and above:

- Brand text: 22px (1.375rem).
- Main heading: 56px (3.5rem).
- Intro text: 16px (1rem).
- Section heading: 28px (1.75rem).
- Dialog heading: 40px (2.5rem).

At 1100px and above, change the page gutter to 32px (2rem).

No other token values change across these breakpoints.

## Fonts and page defaults

Use the supplied local fonts:

- **DejaVu Sans regular, weight 400:** /fonts/dejavu-sans-regular.ttf.
- **DejaVu Sans bold, weight 700:** /fonts/dejavu-sans-bold.ttf.
- **DejaVu Serif regular, weight 400:** /fonts/dejavu-serif-regular.ttf.

These are TrueType files. Register each face separately in your base/font stylesheet, outside the custom-property root. Use normal style and swap font loading. Preserve the supplied font license.

Page defaults: canvas background, ink text, Sans at 16px, weight 400, line height 1.5. Remove the body's default margin. Use border-box sizing, including pseudo-elements. Remove default heading, paragraph, product-list, and cart-list margins and padding. Product lists and cart lists have no bullets. Buttons use the body font. Keep keyboard focus visible.

## Shared container

- Center header, main, and footer using the same container.
- Maximum usable content width: **1200px**. This does not include the outer gutters.
- Outer gutters: **24px mobile/tablet**, **20px below 360px**, **32px desktop**.
- The container itself has **no padding**. Leave the outer gutters through its width and horizontal margins; do not add a second layer of body padding.
- At 1440px, content is 1200px wide with 120px on each side. At 390px, content is 342px. At 320px, content is 280px.

## Header

### Header row

- Brand at left, supporting caption at right; vertically centered.
- **Top and bottom padding:** 24px mobile, 32px tablet/desktop.
- **Left and right padding:** zero inside the shared container.
- **Gap between items:** 12px mobile, 16px tablet/desktop. Permit wrapping.
- **Bottom border:** 1px, border color, spanning the content width.
- No fixed height or outer margins.

### Brand link

- Text: Paper & Pigment.
- Sans, **19px mobile / 22px larger**, weight **700**, line height **1.3**.
- Color: ink, including after the link has been visited.
- Minimum target height: **44px**.
- No padding, underline, or extra letter spacing by default.
- Hover: underline with **0.2em** underline offset.

### Header caption

- Text: Supplies for your next idea.
- Sans, **12px**, weight **400**, line height **1.5**, muted color; right aligned.
- Hidden below 600px; visible from 600px.
- No margin or padding. Separate styling from the intro eyebrow.

## Introduction

### Section spacing

- **Top padding:** 32px mobile / 48px tablet and desktop, supplying space after the header divider.
- **Bottom margin:** 40px mobile / 48px larger, supplying space before the collection.
- Other padding and margins: zero.

### Eyebrow

- Text: Good tools. Room to play.
- Sans, **12px**, weight **700**, line height **1.5**, accent color.
- Uppercase appearance; letter spacing **0.04em**.
- **Bottom margin:** 16px.

### Main heading

- Text: Make something yours.
- Serif, **38px mobile / 56px larger**, weight **400**, line height **1.15**, ink.
- Normal letter spacing; allow natural wrapping without forced line breaks.
- **Bottom margin:** 16px.

### Intro paragraph

- Text: Thoughtful tools for sketching, painting, and the ideas in between.
- Sans, **15px mobile / 16px larger**, weight **400**, line height **1.6**, muted.
- Maximum width: **65ch**.
- No margin or padding. The section's bottom margin owns the following separation.

## Collection

### Main catalog/bag arrangement

- Mobile/tablet: catalog above bag, separated by a **32px layout gap**.
- Desktop: catalog left, bag right, separated by a **32px layout gap**.
- Desktop bag width: **352px**. Catalog takes the remaining width.
- At the maximum content width, the catalog is **816px**.
- Heading/count and product list belong together in the catalog column; bag is their sibling.
- No collection bottom margin: the footer supplies the separation after the shop.

### Collection heading row

- Text: The everyday collection.
- Heading: Serif, **26px mobile / 28px larger**, weight **400**, line height **1.2**, ink.
- Count: 6 creative essentials; Sans **12px**, weight **400**, line height **1.5**, muted.
- Count hidden below 600px; shown from 600px.
- Heading left, count right, with text baselines aligned. Allow wrapping with a **12px gap**.
- **Bottom margin of the heading row:** 24px before the product grid.
- No fixed heading width. The heading row spans only the catalog column.

### Product grid

- One column below 600px, two columns from 600px, three columns from 1100px.
- Equal product columns; **column gap 24px** and **row gap 40px**.
- Rows size naturally. The row gap follows the tallest card content in that row.
- No bullets, margins, or padding on the list.

## Product cards

### Card and image

- No outer card panel, border, shadow, padding, or margins.
- Intrinsic images: **800 x 600px**, displayed at the card width with a **4:3 ratio**.
- Preserve proportions; corners **12px**. No image shadow.
- Group each image with its Add to bag control, separately from the text beneath.
- Selected image: **2px primary outline**, with **zero outline offset**. Selection also changes the control, so it is not communicated by color alone.

### Add to bag control

- Horizontally centered on its own image.
- Overlap the image's bottom edge by **24px**, so half of the intended **48px** control is below the image.
- Width **160px**; minimum height **48px**.
- **Internal padding:** 12px top/bottom, 20px left/right; border-box sizing includes padding and border in the width.
- White surface, primary text, **1px border-color border**, pill corners.
- Sans **14px**, weight **700**, line height **1.3**; centered text.
- Optional plus icon: **16 x 16px**, with an **8px icon/text gap**.
- Hover: soft background, primary border, primary text.
- This is an action button, not a navigation link.

### Space below the overlapping control

- **Image-wrapper bottom margin:** 40px.
- This accounts for **24px control overhang + 16px clear space before the category**.
- Category top margin: **zero**. Do not add another 16px gap there.
- The image/button wrapper must not clip the overlapping control or its focus ring.
- Positioning technique is yours to implement; no positioning recipe is supplied here.

### Category

- Sans **13px**, weight **400**, line height **1.5**, muted.
- Uppercase appearance, letter spacing **0.04em**.
- **Bottom margin:** 8px.
- Do not reuse the intro eyebrow's accent color or bold weight.

### Product name

- Sans **16px**, weight **700**, line height **1.4**, ink at every breakpoint.
- **Bottom margin:** 4px. Let long names wrap.

### Price

- Sans **16px**, weight **700**, line height **1.4**, primary.
- No margin or padding. Display dollars with two decimals.

### Selected quantity control

- Replaces Add to bag in the same centered, overlapping location.
- Overall target size: **160px wide**, minimum **48px tall**, pill shape, primary background, white content.
- No internal padding or border.
- Minus and plus button targets: each **44px wide**, minimum **48px tall**; visible icons **16px**.
- Quantity occupies the center; Sans **14px**, weight **700**, line height **1.3**.
- Round the group's outside ends. Hovered minus/plus target uses primary-hover.
- Keep focus rings and quantity digits visible. Do not show negative quantities or duplicate Add and quantity controls together.

## Empty bag

### Bag panel

- Width fills the catalog/bag layout's bag column; no fixed height.
- Surface background; **1px border-color border**; **16px corners**; no shadow.
- **Padding on every side:** 24px.
- **Top margin:** zero below 1100px. On desktop, **57.6px / 3.6rem**.
- The desktop offset aligns the panel's top border with the first product images, assuming the supplied single-line collection heading: 28px x 1.2 line height + 24px margin.
- No extra top spacing in stacked mode; the layout gap supplies 32px.

### Bag heading

- Text: Your bag (0), with the number updated from cart state.
- Sans **22px**, weight **700**, line height **1.3**, ink.
- **Bottom margin:** 24px.

### Empty content group

- Contains the illustration and two text lines, below the bag heading.
- Center the items horizontally and center their text.
- **Top/bottom padding:** 24px; left/right padding zero.
- No uniform group gap; the individual margins below supply the spacing.

### Empty illustration

- Soft backing: **64 x 64px**, corners **16px**.
- Center a **32 x 32px** primary-colored bag icon within it.
- **Bottom margin of backing:** 24px.
- Decorative: no redundant accessible description.

### Empty message

- Text: A little inspiration starts here.
- Sans **14px**, weight **700**, line height **1.5**, ink.
- **Bottom margin:** 8px.

### Supporting sentence

- Text: Add a favorite to begin your next project.
- Sans **12px**, weight **400**, line height **1.5**, muted.
- Maximum width **28ch**; no margin or padding.
- Empty bag has no total, supporting note, or Confirm order action.

## Populated bag

Keep the same panel and heading measurements as the empty bag. Replace the empty content group with the cart list, total row, note, and Confirm order action.

### Cart list and item rows

- List: no bullets or padding; **bottom margin 24px** before the total.
- Each row: **top/bottom padding 16px**, left/right padding zero, **1px bottom border** in border color, including the final row.
- Row layout: product details left, remove control right, **8px column gap**. Remove-control column **44px**; details take remaining space and may wrap.
- No thumbnails in the bag; thumbnails appear in the confirmation dialog.

### Item text

- Name: Sans **14px**, weight **700**, line height **1.4**, ink; **bottom margin 8px**.
- Quantity/unit price/subtotal row: **8px layout gap**, wrap if needed.
- Quantity: **13px**, weight **700**, line height **1.5**, primary.
- Unit price: **13px**, weight **400**, line height **1.5**, muted.
- Line subtotal: **13px**, weight **700**, line height **1.5**, ink.

### Remove control

- Target **44 x 44px minimum**, no padding or border; transparent background, muted icon.
- Visible close icon **16px**, centered.
- Circular hover background: soft; hovered icon ink.
- Accessible name identifies the product being removed.

### Total row

- Label left, amount right; align text baselines, allow wrapping; **12px layout gap**.
- **Bottom margin:** 16px. No top margin; the list owns the preceding 24px.
- Label: Sans **14px**, weight **400**, line height **1.5**, ink.
- Amount: Sans **28px**, weight **700**, line height **1.2**, ink.

### Note

- Text: Carefully chosen. Ready for your next idea.
- **Padding:** 12px on all sides. **Bottom margin:** 16px.
- Soft background, **8px corners**.
- Sans **12px**, weight **400**, line height **1.5**, muted, centered.
- Allow wrapping; no fixed height.

### Confirm order button

- Full available width inside the bag; minimum height **48px**.
- **Padding:** 12px top/bottom, 20px left/right; **1px transparent border**, pill corners.
- Primary background, white text; hover primary-hover.
- Sans **14px**, weight **700**, line height **1.3**, centered.
- No extra top margin. It does not overlap an image.

## Confirmation dialog

### Dialog shell

- Center within the viewport.
- Width fits inside **16px outer space on each side**; maximum width **560px**.
- Keep **16px outer space at top/bottom**; cap the dialog to the available viewport height and allow internal vertical scrolling.
- **Internal padding:** 24px mobile / 32px from 600px.
- Surface background, ink text, no border, **20px corners**.
- Shadow: horizontal offset **0**, vertical offset **24px**, blur **64px**, color **rgb(16 28 48 / 20%)**.
- Backdrop: **rgb(16 28 48 / 55%)**.
- No fixed content height. The closed dialog must remain hidden.

### Close control

- At the upper-right of the padded content area, alongside the success icon.
- Minimum target **44 x 44px**, visible icon **20px**, no padding or border.
- Transparent background, muted icon; hover soft circular background and ink icon.
- No extra offset inside the content area. Accessible label: Close order confirmation.

### Success icon

- Soft circle **48 x 48px**, primary check **24 x 24px**, centered.
- **Bottom margin:** 24px.

### Dialog heading

- Text: A good start.
- Serif **32px mobile / 40px larger**, weight **400**, line height **1.15**, ink.
- **Bottom margin:** 16px. **Right padding:** 16px.
- Starts below the success-icon block, clear of the close control.

### Demo paragraph

- Text: Demo order confirmed. No payment was taken and no order was sent.
- Sans **12px**, weight **400**, line height **1.5**, muted.
- **Bottom margin:** 24px.

### Summary heading

- Text: Your creative essentials.
- Sans **14px**, weight **700**, line height **1.4**, ink.
- **Bottom margin:** 16px.

### Summary panel

- Soft background, **16px corners**.
- **Padding:** 16px on all sides. **Bottom margin:** 24px before the action.
- List inside: no bullets, margins, or padding.

### Confirmation item

- Thumbnail left, details right; **12px column gap**.
- Thumbnail **56 x 42px**, **8px corners**, proportional crop.
- **Row padding:** 16px top/bottom, zero left/right.
- **Bottom divider:** 1px border color on every row.
- Name: Sans **14px**, **700**, line height **1.4**, ink; **bottom margin 8px**.
- Quantity and unit-price details: **8px layout gap**, wrapping allowed; Sans **13px**, line height **1.5**. Quantity primary/700; unit price muted/400.
- Subtotal on its own line below details: **top margin 8px**, Sans **13px**, **700**, line height **1.5**, ink; right aligned.
- No remove/quantity-edit controls in this view.

### Summary total

- **Top margin:** 24px after the item list. No bottom margin; panel padding supplies the space to its edge.
- Label left, amount right, aligned baselines, wrap if needed; **12px layout gap**.
- Label: Sans **14px**, **400**, line height **1.5**, ink.
- Amount: Sans **28px**, **700**, line height **1.2**, ink.

### Start new order button

- Same appearance, font, height, padding, and hover as Confirm order.
- Full available width, no extra margin, no image overlap.
- Dismissing the dialog preserves the cart; Start new order resets it. These are functional requirements to implement later.

## Footer

- Uses the shared container and sits after the collection.
- **Footer top margin:** 48px mobile / 64px tablet and desktop. Do not add this spacing again below the collection.
- Inner content: **1px top border**, border color; **top/bottom padding 24px**, left/right zero.
- Text: A practice shop. No real orders or payments.
- Sans **12px**, weight **400**, line height **1.5**, muted.
- Paragraph margins zero.

## Interaction and accessibility

- Every interactive control needs a visible keyboard focus ring: **2px ink/focus outline**, **3px offset**. Keep it visible around overlaps and rounded corners.
- Use real buttons for cart actions. Icon-only controls need meaningful accessible names.
- The skip link appears at **8px from the top and left** when focused, with **12px top/bottom and 16px left/right padding**, ink background, white **14px bold** text, **1.3 line height**, **8px corners**. It stays out of view until focused.
- Keep a concise cart status available to screen readers without displaying it visually. Do not announce the entire product list on every update.
- Dialog must support keyboard use, focus containment, Escape, and appropriate focus return.
- Decorative icons do not need spoken labels. Product images use the supplied descriptive alt text.
- No animations, sticky cart, dark theme, filters, or payment backend are required.
- Test 320, 390, 600, 768, 1024, 1100, and 1440px, plus 200% zoom and a short viewport.
- Use acceptance-checklist.md for the functional tests. The guide gives design measurements; your code supplies the implementation.
