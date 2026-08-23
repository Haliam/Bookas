---
title: Bookas – Design Tokens
description: Actual design tokens in use in the Bookas codebase. Use these — not the old BookPro indigo palette.
version: 1.0.0
date: 2026-06-06
author: Haliam Perez
---

# Design Tokens

These tokens reflect what is already coded in components. Do not introduce new values without updating this file.

---

## Colors

```
/* Text */
--text-primary:    #2C2C2C   (headings, labels, active icons)
--text-secondary:  #6B7280   (subtitles, dates)
--text-muted:      #9CA3AF   (captions, placeholders, inactive)

/* Background */
--bg-page:         #FFFFFF
--bg-subtle:       #FAFAFA   (cards, inputs, skeleton)

/* Border */
--border-default:  #F0F0F0
--border-strong:   #E5E7EB

/* Brand accents */
--accent-green:    #1BBF8A   (confirmed, success, active state)
--accent-red:      #E94C59   (error, cancel, notification badge)
--accent-yellow:   #F5B11F   (pending, warning)
--accent-blue:     #3E86A7   (info, links)
```

---

## Status badge colors

These are used by `StatusBadge` and should stay consistent across all appointment lists:

| Status | Background | Text |
|--------|-----------|------|
| confirmed | `#E8FBF4` | `#1BBF8A` |
| pending | `#FEF7E0` | `#F5B11F` |
| cancelled | `#FDECEA` | `#E94C59` |
| completed | `#F0F0F0` | `#6B7280` |
| noshow | `#F0F0F0` | `#9CA3AF` |

---

## Spacing & layout

```
Page horizontal padding:  px-5   (20px)
Section vertical gap:     py-6   (24px)
Card inner padding:       p-4    (16px)
Item list gap:            space-y-3

Max content width (mobile): 430px (BottomNav cap)
Max content width (desktop): 1200px (future responsive layout)
```

---

## Border radius

```
Cards:           rounded-2xl   (16px)
Buttons (sm):    rounded-lg    (8px)
Buttons (md/lg): rounded-xl    (12px)
Badges / pills:  rounded-full
Avatar:          rounded-full
Input:           rounded-xl    (12px)
```

---

## Typography

```
Page title:      font-semibold  text-2xl    #2C2C2C
Section title:   font-medium    text-base   #2C2C2C
Body:            font-normal    text-sm     #4B5563
Caption:         font-normal    text-xs     #9CA3AF
Tiny label:      font-normal    text-[10px] #9CA3AF
```

---

## Shadows

```
Card:     shadow-[0_4px_24px_rgba(0,0,0,0.06)]
Modal:    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
```

---

## Touch targets

All interactive elements must meet **48px minimum height** (`min-h-[48px]`).
Bottom nav items: 64px height. Floating buttons: 48px × 48px.

---

## Transitions

All interactive elements use `transition-colors` with `duration-150` unless animated (use `motion` library for complex animations).
