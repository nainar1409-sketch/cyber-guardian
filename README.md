# Cyber Guardian

Act as a Senior Frontend Security Engineer and Creative Web Developer. Build a single-page, privacy-first Password Strength Analyzer & Generator web application with a high-tech Hollywood movie aesthetic and custom theming.

---

### 1. CORE PRIVACY & ARCHITECTURE CONSTRAINTS (CRITICAL)
- 100% Client-Side Only: Under NO circumstances should any analyzed password, candidate string, or keystroke be sent across the network. Zero API requests, telemetry beacons, external analytics, or persistent browser storage (no localStorage, sessionStorage, cookies, or IndexedDB for passwords).
- High Performance: The analysis engine must run synchronously on input events in <16ms with zero UI lag.
- Self-Contained: Provide the complete code in a single standalone HTML file containing embedded CSS and vanilla JavaScript.

---

### 2. VISUAL DESIGN, ANIMATION & THEMES
- Default Aesthetic: Classic Hollywood hacker/cyberpunk vibe (Black background with glowing neon green characters, glowing borders, and subtle CRT scanline/glow effects).
- Hollywood Floating Characters Canvas:
  - An HTML5 Canvas background with green-tinted letters, numbers, and symbols streaming/floating across the screen (digital rain/floating matrix code effect).
  - Characters should float at varying speeds with fading trails.
- Dynamic Theme Selector:
  - Provide an interactive dropdown or pill toggle so the user can change the theme on the fly.
  - The matrix canvas particles and entire UI palette must seamlessly adapt to the selected theme.
  - Available color palettes:
    1. Black & Green (Default Hollywood Matrix)
    2. Black & White (Monochrome terminal)
    3. Pink & Brown (Deep espresso with soft rose highlights)
    4. Blue & Beige (Deep navy slate with warm cream accents)
    5. Olive Green & Cream (Earthy military olive with linen cream)
    6. Blue & Pink (Cyberpunk synthwave)
    7. Grey & White (Modern minimalist charcoal & stark white)
    8. Olive & White (Deep olive with clean white accents)
- Typography:
  - Big Titles & Main Headings: Font family "Onigusa" (with fallbacks: 'Cinzel Decorative', 'Cinzel', 'Orbitron', serif).
  - Normal / Body / Form / Metric text: Font family "Times New Roman", Times, serif.
- Rotating Quirky Security Quotes:
  - A dynamic, stylish banner displaying humorous, quirky cybersecurity quotes reminding users to keep their passwords safe (e.g., "Passwords are like underwear: make them long, change them often, and never share them with strangers.").
  - Automatically cycle to a new quote every 2 minutes with a smooth fade animation, with a manual button to cycle instantly.

---

### 3. PASSWORD STRENGTH & HEURISTIC ENGINE (CLIENT-SIDE)
Implement a robust evaluation pipeline that inspects the password on every keystroke:
1. Length Analysis: Raw count, penalties for < 8 chars, strong rewards for 16+ chars.
2. Character Diversity: Uppercase, lowercase, digits, and special symbols (!@#$%^&*...).
3. Repetition & Sequence Detection:
   - Repeated characters (e.g., "aaaa", "1111").
   - Sequential runs: alphabetical ("abc", "zyx"), numerical ("12345", "9876"), and keyboard walks/QWERTY patterns ("qwerty", "asdf").
4. Dictionary & Common Pattern Detection:
   - Match against a built-in list/set of top breached passwords and common keywords ("password", "admin", "dragon", "qwerty", "iloveyou", "welcome", etc.).
   - Reverse l33t-speak normalization before dictionary matching (e.g., '@' -> 'a', '0' -> 'o', '3' -> 'e', '$' -> 's', '1' -> 'i').
5. Information Entropy:
   - Theoretical pool entropy: E = Length * log2(Pool Size).
   - Adjusted realistic entropy: penalizes detected dictionary words, repeated characters, and keyboard walks.
6. Crack Time Estimation:
   - Categorize estimated crack time assuming an offline high-end GPU cluster (e.g., 100 billion guesses/second).
   - Display categorized times: "Instant", "Seconds", "Minutes", "Hours", "Days", "Months", "Centuries".
7. Visual 5-Tier Strength Meter:
   - Dynamically fills and labels: "Very Weak", "Weak", "Moderate", "Strong", "Very Strong".
   - Segmented color transitions (Red -> Orange -> Yellow -> Green -> Neon Emerald).
8. Real-Time Actionable Security Recommendations:
   - Dynamic checklist pointing out specific vulnerabilities (e.g., "Contains common dictionary word", "Contains predictable sequence '123'", "Add symbols to increase entropy").

---

### 4. CRYPTOGRAPHIC PASSWORD GENERATOR
- Uses the Web Crypto API (`window.crypto.getRandomValues`) for cryptographically secure pseudo-random number generation (CSPRNG). Never use `Math.random()`.
- Controls:
  - Length slider (8 to 64 characters, default 16).
  - Toggle options: Uppercase, Lowercase, Numbers, Special Symbols.
  - Option to "Exclude Ambiguous Characters" (`0`, `O`, `l`, `1`, `I`, `|`).
  - Guarantee that the generated password contains at least one character from each selected category.
- Actions:
  - "Generate New" button.
  - "Copy to Clipboard" button with temporary visual feedback.
  - "Use in Analyzer" button to instantly pass the generated string into the security analyzer.

---

### 5. DELIVERABLE FORMAT
Return a single, clean, dependency-free `index.html` containing all HTML, CSS, and vanilla JavaScript. Ensure full responsiveness, smooth transitions, and proper accessibility labels.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d79388ba-6e1c-40f5-a20d-b4f440446a1a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
