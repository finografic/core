I get what you’re aiming for — **cohesion over fragmentation** — and you’re not wrong to resist over-splitting.

But you’re _slightly_ misclassifying one thing:

> Not everything that changes capitalization is “casing” in the same sense.

Let me draw a clean line so you don’t paint yourself into a corner later.

---

# 🧠 The real distinction (this matters)

### ✅ “Casing” (identifier transforms)

Deterministic, lossless, structural:

```ts
"userProfileData" → "user-profile-data"
"user_profile" → "userProfile"
```

These are:

- reversible (mostly)
- predictable
- used for **keys, APIs, DTOs**

---

### ⚠️ “Formatting” (display transforms)

Heuristic, lossy, human-facing:

```ts
"user profile data" → "User Profile Data"
"userProfileData" → "User profile data"
```

These:

- are not reversible
- depend on language rules
- are for **UI / labels**

---

👉 This is why I pushed for separation earlier.

---

# BUT — here’s the pragmatic answer for _your package_

Given your goals:

- small
- personal
- cohesive
- “boring but clean”

👉 **You can keep them together — with discipline.**

---

# ✅ Recommended compromise (best of both worlds)

Keep **one file**, but enforce **two sections**.

---

## `string.utils.ts`

```ts
// ----------------------------------------
// IDENTIFIER CASING (pure transforms)
// ----------------------------------------

export const camelCaseToKebab = ...
export const snakeToCamel = ...
export const toCamelCase = ...
export const toPascalCase = ...

// ----------------------------------------
// DISPLAY FORMATTING (human-readable)
// ----------------------------------------

export const capitalize = ...
export const toTitleCase = ...
export const camelCaseToSentence = ...
export const unslugify = ...
```

---

## Why this works

- ✅ Keeps file count low (your preference)
- ✅ Keeps mental separation clear
- ✅ Avoids future confusion when adding more utils
- ✅ Still “CV-clean”

---

# 🔥 About `toPascalCase` (important nuance)

You said:

> “which would be for object only”

I’d push back on that.

---

## ❌ Don’t tie it to objects

```ts
toPascalCase("user_profile") → "UserProfile"
```

That’s a **string transform**, not an object concern.

---

## ✅ Then reuse in object utils

```ts
toPascalCaseKeys(obj)
```

This composes:

```ts
[key: string] → toPascalCase(key)
```

---

## Clean separation

| Function           | Layer         |
| ------------------ | ------------- |
| `toPascalCase`     | string-casing |
| `toPascalCaseKeys` | object-casing |

---

# ✅ Implementation (clean + minimal)

Here’s a solid version you can drop in:

```ts
export const toPascalCase = (input: string): string => {
  return input
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (c) => c.toUpperCase());
};
```

---

# ⚠️ One thing to avoid

Do NOT do this:

```ts
toCase(input, { type: 'pascal' })
```

or

```ts
formatString(input, { casing: 'title' })
```

That’s where utils go to die.

---

# 🧠 Final recommendation (very clear)

✔ Keep **one file** (`string.utils.ts`)
✔ But split it into **two clearly labeled sections**
✔ Keep transforms **composable, not configurable**

---

# 🧭 Your direction is good

You’re optimizing for:

- clarity
- minimal surface area
- explicitness

That’s exactly right.

Just make sure:

> **“fewer files” doesn’t become “blurred concepts”**

You’re right on the edge of that — this structure keeps you on the good side.

---

If you want next step, I can:

- normalize all naming across `string / object / types` (you’re very close to a super clean public API)
- or give you a final “gold standard” export surface for `@finografic/core`
