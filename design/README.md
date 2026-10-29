# Reference designs

Open the PNGs in an image viewer to inspect full-size layouts. SVG versions contain the same static reference art and may be imported into a design tool. They are not application HTML/CSS or a native Figma file.

- desktop-empty: initial state, 1440px wide, three product columns and side bag.
- desktop-populated: two marker sets and one sketchbook; bag count 3, total $66.00.
- tablet-empty: 768px wide, two columns with bag below.
- mobile-empty / mobile-populated: 390px wide, single product column, bag below all six products.
- desktop-confirmation / mobile-confirmation: dialog showing the same $66.00 order.
- preview.png in the root repeats the desktop populated reference for quick browsing.

Reference widths are visual checkpoints, not fixed CSS widths. The text, control target sizes, responsive rules, and behavioral details in style-guide.md and README.md take priority over approximating a screenshot. Cart remove and quantity icons look small but their buttons must have 44px targets. Confirmation shows an example; your implementation must reflect the actual current cart. The backdrop can cover a differently scrolled catalog.

Optional interaction visual references are described in style-guide.md (hover, focus, selected). No separate hover screenshot is required.
